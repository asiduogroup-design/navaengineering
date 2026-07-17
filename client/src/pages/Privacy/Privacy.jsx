import React from "react";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaUserCheck,
  FaBalanceScale,
  FaEnvelope,
  FaLock,
  FaGlobeEurope
} from "react-icons/fa";

import "./Privacy.css";

export default function Privacy() {

const sections = [

{
title:"Titolare del trattamento",
icon:<FaUserLock/>,
content:
"Il titolare del trattamento dei dati personali è l’Ing. Nava Demetrio, amministratore della società Nava Engineering Srl con sede in Via Matteo Civitali 42, Milano."
},

{
title:"Tipologie di dati raccolti",
icon:<FaDatabase/>,
list:[
"Nome e Cognome",
"Indirizzo Email"
]
},

{
title:"Finalità del trattamento",
icon:<FaUserCheck/>,
list:[
"Rispondere alle richieste inviate tramite il modulo di contatto.",
"Fornire informazioni sui servizi richiesti.",
"Gestione delle comunicazioni con il cliente."
]
},

{
title:"Base giuridica",
icon:<FaBalanceScale/>,
content:
"Il trattamento si basa sul consenso dell’utente e sull’esecuzione delle richieste inviate."
},

{
title:"Protezione dei dati",
icon:<FaLock/>,
content:
"I dati sono protetti mediante misure tecniche ed organizzative conformi al GDPR."
},

{
title:"Trasferimento dati",
icon:<FaGlobeEurope/>,
content:
"I dati non vengono trasferiti fuori dallo Spazio Economico Europeo salvo obblighi di legge."
}

];

return(

<section className="privacy">

<div className="privacy-hero">

<div className="hero-icon">
<FaShieldAlt/>
</div>

<h1>Privacy Policy</h1>

<p>

Protezione dei dati personali in conformità
al Regolamento Europeo GDPR.

</p>

<span>

Ultimo aggiornamento • 04/02/2025

</span>

</div>

<div className="privacy-container container">

{sections.map((item,index)=>(

<div
className="privacy-card"
key={index}
>

<div className="card-header">

<div className="card-icon">

{item.icon}

</div>

<h2>

{item.title}

</h2>

</div>

{item.content &&

<p>

{item.content}

</p>

}

{item.list &&

<ul>

{item.list.map((text,i)=>

<li key={i}>

{text}

</li>

)}

</ul>

}

</div>

))}

<div className="contact-box">

<h2>

<FaEnvelope/>

Contatti

</h2>

<p>

Per qualsiasi richiesta relativa alla Privacy
è possibile scrivere a:

</p>

<a href="mailto:studionavademetrio@gmail.com">

studionavademetrio@gmail.com

</a>

</div>

</div>

</section>

);

}