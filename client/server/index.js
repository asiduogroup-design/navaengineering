require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3001;

// CORS: allow optionally configured origins (comma-separated), default allow all in dev
const allowed = process.env.CORS_ALLOWED ? process.env.CORS_ALLOWED.split(',').map(s => s.trim()) : [];
app.use(cors(allowed.length ? { origin: allowed } : {}));

// Rate limiter to prevent abuse
const limiter = rateLimit({ windowMs: 60 * 1000, max: 10 }); // 10 requests per minute
app.use(limiter);

// multer for file uploads (memory storage)
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// parse JSON bodies for analytics and other JSON endpoints
app.use(express.json());

// optional API key check
function requireApiKey(req, res, next) {
  const apiKey = process.env.API_KEY;
  if (!apiKey) return next();
  const header = req.get('x-api-key');
  if (header && header === apiKey) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

// parse multipart/form-data with possible file
app.post('/api/quote', requireApiKey, upload.single('attachment'), async (req, res) => {
  const data = req.body;

  if (!data || !data.nome || !data.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailBody = `Richiesta preventivo:\n\nNome: ${data.nome}\nAzienda: ${data.azienda || ''}\nEmail: ${data.email}\nTelefono: ${data.telefono || ''}\nServizio: ${data.servizio || ''}\nMessaggio: ${data.messaggio || ''}`;

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: `Richiesta preventivo - ${data.nome}`,
      text: mailBody,
    };

    if (req.file) {
      mailOptions.attachments = [{
        filename: req.file.originalname,
        content: req.file.buffer,
      }];
    }

    await transporter.sendMail(mailOptions);

    return res.json({ ok: true });
  } catch (err) {
    console.error('Error sending mail', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

// Analytics persisted in MongoDB (configured via MONGODB_URI in .env)
const { MongoClient, ObjectId } = require('mongodb');
const mongoUri = process.env.MONGODB_URI;
let mongoClient;
let analyticsDb;

async function connectMongo() {
  if (!mongoUri) {
    console.warn('MONGODB_URI not set — analytics endpoints will be disabled');
    return;
  }
  mongoClient = new MongoClient(mongoUri);
  await mongoClient.connect();
  analyticsDb = mongoClient.db(process.env.MONGODB_DB || 'navaanalytics');
  await analyticsDb.collection('sources').createIndex({ event: 1, source: 1 }, { unique: true });
  await analyticsDb.collection('counts').createIndex({ event: 1 }, { unique: true });
  console.log('Connected to MongoDB for analytics');
}

// Seed default chat rules if none exist
const DEFAULT_CHAT_RULES = [
  { pattern: 'ciao|salve|hello|hi', reply: 'Ciao, sono <strong>NovAI</strong>. Come posso aiutarti oggi?', buttons: ['Servizi','Preventivo','Contatti'], order: 1 },
  { pattern: 'serviz|progettaz|impiant', reply: '<strong>Offriamo:</strong><br/>- Progettazione energetica e diagnosi<br/>- Impianti termici, elettrici e idraulici<br/>- Progettazione antincendio e collaudi<br/>Vuoi vedere i dettagli dei servizi?', buttons: ['Mostra servizi','Contattami'], order: 2 },
  { pattern: 'preventiv|preventivo|quote', reply: 'Per un preventivo, compila il modulo di contatto o inviaci i dettagli. Vuoi che apra la pagina contatti?', buttons: ['Apri contatti','Invia dettagli'], order: 3 },
  { pattern: 'portfolio|progetti', reply: 'Visualizza i nostri progetti nella pagina Portfolio. Vuoi che ti ci porti?', buttons: ['Vai al portfolio','Mostra esempi'], order: 4 },
  { pattern: 'curriculum|cv|esperienza', reply: 'Trovi il curriculum nella sezione Curriculum. Vuoi aprirla?', buttons: ['Apri curriculum'], order: 5 }
];

async function ensureChatRulesSeed() {
  if (!analyticsDb) return;
  const col = analyticsDb.collection('chat_rules');
  const count = await col.countDocuments();
  if (count === 0) {
    await col.insertMany(DEFAULT_CHAT_RULES.map(r => ({ ...r, createdAt: new Date() })));
    console.log('Seeded default chat rules');
  }
}

async function ensureContentSeed() {
  if (!analyticsDb) return;
  const defaults = [
    { type: 'servizi', title: 'Servizi offerti', body: `<ul><li>Progettazione energetica, diagnosi energetica, audit energetico, certificazione energetica</li><li>Progettazione impianti termici e pompe di calore</li><li>Progettazione reti idriche antincendio</li><li>Progettazione impianti elettrici e speciali</li><li>Progettazione illuminotecnica e fotovoltaico</li><li>Collaudi tecnico amministrativi</li></ul>`, order: 0 },
    { type: 'referenze', title: 'Referenze', body: `<p>Referenze professionali e iscrizioni agli albi professionali. Contattaci per dettagli.</p>`, order: 0 },
    { type: 'curriculum', title: 'Curriculum', body: `<p>Curriculum professionale e incarichi svolti. Vedi la sezione Curriculum per dettagli completi.</p>`, order: 0 },
    { type: 'portfolio', title: 'Portfolio', body: `<p>Galleria progetti e lavori eseguiti. Contattaci per case studies.</p>`, order: 0 },
    { type: 'dotazioni', title: 'Dotazioni', body: `<p>Elenco strumenti e software utilizzati dallo studio.</p>`, order: 0 },
  ];

  for (const d of defaults) {
    const col = analyticsDb.collection(d.type);
    const cnt = await col.countDocuments();
    if (cnt === 0) {
      await col.insertOne({ title: d.title, body: d.body, order: d.order, createdAt: new Date() });
      console.log(`Seeded content for ${d.type}`);
    }
  }
}

function incrementAnalytics(event, source) {
  if (!analyticsDb) return Promise.resolve();
  const counts = analyticsDb.collection('counts');
  const sources = analyticsDb.collection('sources');
  const ops = [];
  ops.push(counts.updateOne({ event }, { $inc: { count: 1 } }, { upsert: true }));
  if (source) ops.push(sources.updateOne({ event, source }, { $inc: { count: 1 } }, { upsert: true }));
  return Promise.all(ops).then(() => {});
}

app.post('/api/analytics', (req, res) => {
  const { event, source } = req.body || {};
  if (!event) return res.status(400).json({ error: 'Missing event' });
  incrementAnalytics(event, source).then(() => res.json({ ok: true })).catch((err) => {
    console.error('Analytics increment error', err);
    res.status(500).json({ error: 'Failed' });
  });
});

// GET analytics (protected by API key) - returns { event: { count, bySource: { ... } } }
app.get('/api/analytics', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'Analytics DB not configured' });
  try {
    const countsRows = await analyticsDb.collection('counts').find({}).toArray();
    const sourcesRows = await analyticsDb.collection('sources').find({}).toArray();
    const result = {};
    countsRows.forEach((r) => {
      result[r.event] = { count: r.count || 0, bySource: {} };
    });
    sourcesRows.forEach((s) => {
      result[s.event] = result[s.event] || { count: 0, bySource: {} };
      result[s.event].bySource[s.source] = s.count || 0;
    });
    return res.json(result);
  } catch (err) {
    console.error('DB read error', err);
    return res.status(500).json({});
  }
});

// Content management endpoints (CMS-like) — collections per type (e.g. 'servizi', 'referenze')
// Public GET, protected POST/PUT/DELETE by API key
app.get('/api/content/:type', async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const type = req.params.type;
  try {
    const items = await analyticsDb.collection(type).find({}).sort({ order: 1 }).toArray();
    return res.json(items);
  } catch (err) {
    console.error('Content read error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.post('/api/content/:type', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const type = req.params.type;
  const item = req.body || {};
  item.createdAt = new Date();
  try {
    const r = await analyticsDb.collection(type).insertOne(item);
    return res.json({ ok: true, id: r.insertedId });
  } catch (err) {
    console.error('Content insert error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.put('/api/content/:type/:id', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const type = req.params.type;
  const id = req.params.id;
  const updates = req.body || {};
  updates.updatedAt = new Date();
  try {
    const r = await analyticsDb.collection(type).updateOne({ _id: new ObjectId(id) }, { $set: updates });
    return res.json({ ok: true, modifiedCount: r.modifiedCount });
  } catch (err) {
    console.error('Content update error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.delete('/api/content/:type/:id', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const type = req.params.type;
  const id = req.params.id;
  try {
    const r = await analyticsDb.collection(type).deleteOne({ _id: new ObjectId(id) });
    return res.json({ ok: true, deletedCount: r.deletedCount });
  } catch (err) {
    console.error('Content delete error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

// Chat rules and logging endpoints
app.get('/api/chat/rules', async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  try {
    const rules = await analyticsDb.collection('chat_rules').find({}).sort({ order: 1 }).toArray();
    return res.json(rules.map(r => ({ id: r._id, pattern: r.pattern, reply: r.reply, buttons: r.buttons || [], order: r.order || 0 })));
  } catch (err) {
    console.error('Chat rules read error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.post('/api/chat/rules', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const rule = req.body || {};
  rule.createdAt = new Date();
  try {
    const r = await analyticsDb.collection('chat_rules').insertOne(rule);
    return res.json({ ok: true, id: r.insertedId });
  } catch (err) {
    console.error('Chat rule insert error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.put('/api/chat/rules/:id', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const id = req.params.id;
  const updates = req.body || {};
  updates.updatedAt = new Date();
  try {
    const r = await analyticsDb.collection('chat_rules').updateOne({ _id: new ObjectId(id) }, { $set: updates });
    return res.json({ ok: true, modifiedCount: r.modifiedCount });
  } catch (err) {
    console.error('Chat rule update error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

app.delete('/api/chat/rules/:id', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const id = req.params.id;
  try {
    const r = await analyticsDb.collection('chat_rules').deleteOne({ _id: new ObjectId(id) });
    return res.json({ ok: true, deletedCount: r.deletedCount });
  } catch (err) {
    console.error('Chat rule delete error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});



// Protect chat logs with API key
app.post('/api/chat/log', requireApiKey, async (req, res) => {
  if (!analyticsDb) return res.status(500).json({ error: 'DB not configured' });
  const entry = req.body || {};
  entry.ts = new Date();
  try {
    await analyticsDb.collection('chat_logs').insertOne(entry);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Chat log insert error', err);
    return res.status(500).json({ error: 'Failed' });
  }
});

connectMongo().then(() => {
  // ensure default chat rules are present
  ensureChatRulesSeed().catch(err => console.error('Seed chat rules failed', err));
  // seed default content
  ensureContentSeed().catch(err => console.error('Seed content failed', err));
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
  process.exit(1);
});
