# Nava Engineering - Request Quote backend

This is a minimal Express server to receive 'Richiedi preventivo' form submissions from the client and forward them by email.

Setup

1. Copy `.env.example` to `.env` and fill SMTP credentials.

2. Install dependencies and start the server:

```bash
cd server
npm install
npm start
```

By default the server starts on port 3001. The client development server proxies requests to `/api` if configured (see client `package.json`), otherwise run the server and use relative path from the client to `http://localhost:3001/api/quote`.

Security

- Use real SMTP credentials or an API key from a transactional email provider (SendGrid, Mailgun, etc.).
- For production, secure this endpoint behind authentication and rate limiting.
	- For production, secure this endpoint behind authentication and rate limiting.

Configuration notes
- `CORS_ALLOWED`: comma-separated list of allowed origins (e.g. `https://navaengineeringsrl.com,http://localhost:5173`). If empty, all origins are allowed.
- `API_KEY`: optional. If set, the client must include header `x-api-key: <API_KEY>` when POSTing to `/api/quote`.

The server also limits requests to 10/minute per IP by default (adjust in `index.js`).

