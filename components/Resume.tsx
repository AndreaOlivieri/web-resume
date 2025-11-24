import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Car } from 'lucide-react';

export const Resume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="w-full flex justify-center bg-gray-100 p-8 print:p-0">
      <div
        ref={ref}
        className="bg-white shadow-lg print:shadow-none text-black relative"
        style={{
          width: '210mm',
          minHeight: '297mm',
          padding: '10mm',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <header className="flex items-start gap-6 mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-md flex-shrink-0 overflow-hidden border border-gray-300">
             <img 
               src="/placeholder-profile.jpg" 
               alt="Andrea Olivieri" 
               className="w-full h-full object-cover"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
                 (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center');
                 (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-xs text-center text-gray-500">Photo</span>';
               }}
             />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-1">Andrea Olivieri</h1>
            <p className="text-lg text-gray-800 font-bold mb-3">
              Ingegnere Informatico | Tech Lead | Senior Consultant <br/>
              Sviluppatore Front-End & Mobile
            </p>
            
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span className="font-semibold">Roma, Italia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span className="font-semibold">andrea.olivieri1991@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span className="font-semibold">+39 333 3488 893</span>
              </div>
              <div className="flex items-center gap-2">
                <Car size={14} />
                <span className="font-semibold">Patente B, Automunito</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={14} />
                <span className="font-semibold">github.com/AndreaOlivieri</span>
              </div>
            </div>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <p className="text-xs text-gray-800 leading-relaxed text-justify font-medium">
            Sono un Ingegnere Informatico, sviluppatore Web & Mobile con 10 anni di esperienza.
            In possesso di Certificati Professionali. Tech Lead in progetti complessi.
            Ho progettato e sviluppato un'architettura innovativa a micro-frontend e ho gestito un team di oltre 10 sviluppatori.
            Sono un appassionato di tecnologia e nel mio tempo libero mi dedico ad imparare nuovi framework e librerie.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            ESPERIENZE
          </h2>
          
          <div className="space-y-5">
            {/* Open Reply */}
            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-gray-500 mb-0.5">Feb 2021 - Oggi (4 anni)</p>
                  <h3 className="font-bold text-gray-900 text-sm">Open Reply - Via Cavour 59, 00184, Roma, Italia</h3>
                  <p className="text-xs text-green-600 font-bold mb-1">Tech Lead | Senior Consultant | Esperto Front-end (Ingegnere Informatico)</p>
                </div>
                {/* Logo Placeholder */}
                <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">REPLY</div>
              </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                <span className="font-bold block mb-0.5">Ho lavorato con diversi clienti:</span>
                <span className="font-bold">• Open Reply:</span> Ho lavorato come Tech Lead su diversi PoC per Open Reply, contribuendo alla progettazione e allo sviluppo di applicazioni cross-platform innovative. Queste applicazioni si distinguono perché l'intera interfaccia utente è controllata da agenti AI. Le principali tecnologie utilizzate sono: Python, OpenAI, OpenSearch, React Native, Expo.
              </p>
            </div>

            {/* Photocì */}
             <div className="relative">
              <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">Photocì</h3>
                   <p className="text-xs text-green-600 font-bold mb-1">Frontend Developer</p>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">Photocì</div>
              </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato al progetto Photocì come esperto Frontend, contribuendo allo sviluppo dell'editor di fotolibri del cliente per applicazioni mobile e web. Le principali tecnologie utilizzate in questo progetto sono: React Native, Expo, Typescript, Javascript.
              </p>
            </div>

            {/* Church's */}
            <div className="relative">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">Church's</h3>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">Church's</div>
               </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato al progetto Church's come esperto Frontend, contribuendo al miglioramento dell'esperienza utente del sito web di Church's. Le principali tecnologie utilizzate in questo progetto sono: Vue 3, Typescript, Javascript.
              </p>
            </div>

            {/* Mediaset */}
            <div className="relative">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">Mediaset</h3>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">MEDIASET</div>
               </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato al progetto Mediaset come esperto Frontend, contribuendo allo sviluppo di una nuova applicazione Smart TV che consente agli utenti di guardare film, serie TV e canali live offerti da Mediaset. Le principali tecnologie utilizzate in questo progetto sono: React Native, Typescript, Javascript, Storybook.
              </p>
            </div>

            {/* Unipol */}
             <div className="relative">
               <div className="flex justify-between items-start">
                 <div>
                    <h3 className="font-bold text-gray-900 text-sm">Unipol</h3>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">Unipol</div>
               </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato al progetto UnipolSai come Tech Lead ed esperto Frontend, guidando la progettazione e lo sviluppo di una nuova architettura micro-frontend basata su Module Federation. Ho diretto un team dinamico di oltre 10 sviluppatori. Gli strumenti principali di sviluppo utilizzati in questo progetto sono: React.js e Redux, Angular 14, Typescript, Javascript ES6, Node.js, Express, Webpack, Module Federation Plugin, Jest, React Testing Library, HTML 5, CSS 3, CSS in JS, SCSS/SASS, Git, Lerna/Nx.
              </p>
            </div>

            {/* British American Tobacco */}
            <div className="relative">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">British American Tobacco</h3>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">BAT</div>
               </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato al progetto Vuse.com come esperto Frontend, contribuendo allo sviluppo di un'applicazione web per la gestione e l'utilizzo della sigaretta elettronica MyVuse, oltre alla creazione di un browser interattivo basato su tecnologia BLE. Le principali tecnologie utilizzate in questo progetto includono: React.js e Redux, Typescript, Javascript ES6, Webpack, HTML 5, CSS 3, SCSS/SASS, Git.
              </p>
            </div>

             {/* Prada */}
             <div className="relative">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">Prada</h3>
                 </div>
                 <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">PRADA</div>
               </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                Ho lavorato sui progetti e-commerce di Prada, Miu Miu e Car Shoe come esperto Frontend. Gli strumenti principali di sviluppo utilizzati in questo progetto sono: Typescript, Javascript ES6, jQuery, Webpack, HTML 5, CSS 3, SCSS/SASS, Git.
              </p>
            </div>
            
            {/* Accenture */}
            <div className="relative">
              <div className="flex justify-between items-start">
                <div>
                   <p className="text-[10px] text-gray-500 mb-0.5">Oct 2019 - Feb 2021 (1 anno)</p>
                   <h3 className="font-bold text-gray-900 text-sm">Accenture - Via Sciangai 53, 00144, Roma, Italia</h3>
                   <p className="text-xs text-green-600 font-bold mb-1">Application Development Senior Analyst | Esperto Frontend | Ingegnere Informatico</p>
                </div>
                <div className="w-16 h-8 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 border border-gray-200 ml-2">accenture</div>
              </div>
              <p className="text-[11px] text-gray-700 text-justify leading-snug">
                <span className="font-bold block mb-0.5">Ho lavorato con diversi clienti:</span>
                <span className="font-bold">• Skoda, Leonardo s.p.a., e-GEOS, MSC Cruises.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            FORMAZIONE
          </h2>
          <div className="space-y-3">
            <div>
               <p className="text-[10px] text-gray-500 mb-0.5">Oct 2013</p>
               <h3 className="font-bold text-gray-900 text-sm">Superiore Tecnico di Stato e abilitazione alla professione di Ingegnere (107/110)</h3>
               <p className="text-xs text-gray-600">Università Roma Tre - Via Ostiense 159, 00154, Roma, Italia</p>
            </div>
            <div>
               <p className="text-[10px] text-gray-500 mb-0.5">Jan 2013 - Mar 2017</p>
               <h3 className="font-bold text-gray-900 text-sm">Laurea Magistrale in Ingegneria Informatica (105/110) <span className="text-gray-500 font-normal">Level 7 EQF</span></h3>
               <p className="text-xs text-gray-600">Università Roma Tre - Via Ostiense 159, 00154, Roma, Italia</p>
            </div>
             <div>
               <p className="text-[10px] text-gray-500 mb-0.5">Oct 2009 - Lug 2013</p>
               <h3 className="font-bold text-gray-900 text-sm">Laurea Triennale in Ingegneria Informatica (94/110) <span className="text-gray-500 font-normal">Level 6 EQF</span></h3>
               <p className="text-xs text-gray-600">Università Roma Tre - Via Ostiense 159, 00154, Roma, Italia</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            SKILLS
          </h2>
          <div className="space-y-2 text-[11px]">
            <div>
              <span className="font-bold text-gray-800 block">Conoscenze del settore:</span>
              <span className="text-gray-600">Sviluppo Web, Mobile e Software • Metodologie Agili • SCRUM • Object-Oriented Programming (OOP) • Algorithms • SQL • Architetture Microfront-end • TDD</span>
            </div>
            <div>
              <span className="font-bold text-gray-800 block">Sviluppo Mobile:</span>
              <span className="text-gray-600">React Native • Expo</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Sviluppo Web - Front-End:</span>
              <span className="text-gray-600">HTML5 • CSS3 • SASS • SCSS • Bootstrap • Foundation • CSS-in-JS • Styled Components • Flexbox • Javascript • ES6 • Promise • Async Await • Typescript • React • Redux • Angular 9+ • RxJS • Vue • Vuex • JQuery • Next.js • AJAX • Webpack • Module Federation • JSON • Jest • Lerna/NX • Storybook</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Sviluppo Web - Back-End:</span>
              <span className="text-gray-600">Node.js • Express • GraphQL • REST API • Amazon Web Services (AWS) • Microsoft Azure • Heroku • Server Side Rendering</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Database:</span>
              <span className="text-gray-600">PostgreSQL • MySQL</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Linguaggi di Programmazione:</span>
              <span className="text-gray-600">Python • Ruby • Java</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Soft Skills:</span>
              <span className="text-gray-600">Problem Solving • Critical Thinking • Time Management • Teamwork • Self Learning • Analytical reasoning • Adaptability</span>
            </div>
             <div>
              <span className="font-bold text-gray-800 block">Strumenti di sviluppo:</span>
              <span className="text-gray-600">Postman • Git/Gitlab • Visual Code • Miro • Figma • Chrome Dev Tools • Bash Shell</span>
            </div>
          </div>
        </section>
        
         {/* Languages */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            LINGUE
          </h2>
          <div className="space-y-1 text-[11px] text-gray-600">
             <div><span className="font-bold text-gray-900">Italiano:</span> Madrelingua</div>
             <div><span className="font-bold text-gray-900">Inglese:</span> Intermedio alto (B2 level)</div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-4 before:h-px before:bg-gray-400 before:flex-1 after:h-px after:bg-gray-400 after:flex-1 uppercase tracking-widest">
            CERTIFICAZIONI
          </h2>
          <div className="space-y-2 text-[11px] text-gray-600">
            <div>
              <p className="text-[10px] text-gray-500">Sep 2024 - Oggi</p>
              <p className="font-bold text-gray-900">Certificazioni AI Corso Online - Learnn, Udemy, Linkedin</p>
            </div>
             <div>
              <p className="text-[10px] text-gray-500">Oct 2023</p>
              <p className="font-bold text-gray-900">Meta Front-End Developer - Meta</p>
            </div>
             <div>
              <p className="text-[10px] text-gray-500">Apr 2023</p>
              <p className="font-bold text-gray-900">Meta React Native - Meta</p>
            </div>
             <div>
              <p className="text-[10px] text-gray-500">Oct 2020</p>
              <p className="font-bold text-gray-900">B2 First - Cambridge University Press & Assessment English</p>
            </div>
             <div>
              <p className="text-[10px] text-gray-500">Jul 2019</p>
              <p className="font-bold text-gray-900">Spoken English CEFR Level B2.4 - Speexx</p>
            </div>
          </div>
        </section>
        
        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-gray-300 text-[9px] text-gray-500 text-center">
          Autorizzo il trattamento dei miei dati personali contenuti nel mio curriculum vitae in base all'art. 13 del D. Lgs. 196/2003 e all'art. 13 GDPR 679/16.
        </div>

      </div>
    </div>
  );
});

Resume.displayName = 'Resume';
