const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

const compactStyle = document.createElement('style');
compactStyle.textContent = `
@media (min-width:981px){section{padding-top:64px;padding-bottom:64px}.hero{padding-top:84px;padding-bottom:56px}.page-hero{padding-top:84px;padding-bottom:52px}.section-head{margin-bottom:30px}}
`;
document.head.appendChild(compactStyle);

const pageSeo = {
  '/': ['Grupo Principia Futuro | SOFOM ENR en México','SOFOM ENR mexicana enfocada en crédito de nómina, convenios institucionales, fondeo y administración responsable de cartera.','Inicio'],
  '/quienes-somos': ['Quiénes somos | Grupo Principia Futuro','Conoce a Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R.: enfoque institucional, misión, visión, valores y operación responsable.','Quiénes somos'],
  '/solicitar-credito': ['Orientación sobre crédito de nómina | Grupo Principia Futuro','Conoce información general sobre crédito de nómina con GPF. Disponible para personas elegibles conforme a convenio vigente, análisis, documentación y capacidad de pago.','Orientación sobre crédito'],
  '/convenios': ['Convenios de crédito vía nómina | Grupo Principia Futuro','Información para empresas, instituciones y organismos públicos o privados que buscan explorar un convenio de crédito de nómina con GPF.','Convenios'],
  '/fondeadores': ['Fondeadores y alianzas de fondeo | Grupo Principia Futuro','Información institucional para fondeadores interesados en el modelo de GPF, cartera, crédito vía nómina, trazabilidad y administración responsable.','Fondeadores'],
  '/contacto': ['Contacto | Grupo Principia Futuro','Contacta a Grupo Principia Futuro para información sobre crédito de nómina, convenios institucionales, fondeo o colaboración con GPF.','Contacto'],
  '/aviso-de-privacidad': ['Aviso de privacidad | Grupo Principia Futuro','Consulta el aviso de privacidad de Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R.','Aviso de privacidad'],
  '/une': ['UNE | Grupo Principia Futuro','Información de la Unidad Especializada de Atención a Usuarios de Grupo Principia Futuro.','UNE'],
  '/buro-de-entidades-financieras': ['Buró de Entidades Financieras | Grupo Principia Futuro','Información de Grupo Principia Futuro relacionada con el Buró de Entidades Financieras.','Buró de Entidades Financieras'],
  '/informacion-legal': ['Información legal | Grupo Principia Futuro','Información legal de Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R.','Información legal']
};

const seo = pageSeo[currentPath];
if (seo) {
  document.title = seo[0];
  document.querySelector('meta[name="description"]')?.setAttribute('content', seo[1]);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo[0]);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo[1]);
  if (currentPath !== '/' && !document.getElementById('gpf-breadcrumb-schema')) {
    const script = document.createElement('script');
    script.id = 'gpf-breadcrumb-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context':'https://schema.org','@type':'BreadcrumbList',
      itemListElement:[
        {'@type':'ListItem',position:1,name:'Inicio',item:`${location.origin}/`},
        {'@type':'ListItem',position:2,name:seo[2],item:`${location.origin}${currentPath}/`}
      ]
    });
    document.head.appendChild(script);
  }
}

const siteHeader = document.querySelector('header');
const siteNav = document.querySelector('header .nav');
const mainMenu = document.querySelector('header .menu');
if (siteHeader && siteNav && mainMenu && !document.querySelector('.menu-toggle')) {
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label','Abrir menú de navegación');
  toggle.setAttribute('aria-expanded','false');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  siteNav.appendChild(toggle);
  const close = () => {mainMenu.classList.remove('is-open');document.body.classList.remove('nav-open');toggle.classList.remove('is-active');toggle.setAttribute('aria-expanded','false');};
  toggle.addEventListener('click', () => {const open = !mainMenu.classList.contains('is-open');mainMenu.classList.toggle('is-open', open);document.body.classList.toggle('nav-open', open);toggle.classList.toggle('is-active', open);toggle.setAttribute('aria-expanded', String(open));});
  mainMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => {if (e.key === 'Escape') close();});
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {const r=card.getBoundingClientRect();card.style.transform=`perspective(900px) rotateX(${((e.clientY-r.top)/r.height-.5)*-4}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*4}deg) translateY(-6px)`;});
    card.addEventListener('mouseleave', () => {card.style.transform='';});
  });
}

const replacements = [
  ['Solicitar crédito vía nómina','Orientación sobre crédito de nómina'],['Solicitar crédito','Orientación sobre crédito'],['solicitar crédito','recibir orientación sobre crédito'],['Solicitar información no significa aprobación automática.','Solicitar orientación no significa aprobación automática.'],['Tipo de cliente','Producto de interés'],['Trabajador','Crédito de nómina'],
  ['GPF existe para acompañar decisiones financieras importantes sin promesas fáciles ni atajos comerciales. Su valor está en operar con claridad, ordenar procesos, cuidar la trazabilidad y construir relaciones sostenibles.','GPF existe para estar presente cuando las personas necesitan respaldo para avanzar. En momentos importantes, especiales o urgentes, busca ofrecer soluciones financieras claras, responsables y cercanas, acompañando cada decisión con orden, transparencia y confianza.'],
  ['Lectura B2C','Para personas'],['Para personas, GPF debe sentirse como respaldo claro, serio y cercano en decisiones financieras importantes.','GPF busca acompañar a personas que necesitan respaldo financiero en momentos importantes, con información clara, atención cercana y procesos responsables.'],['Lectura B2B','Para instituciones, aliados y fondeadores'],['Para instituciones, aliados y fondeadores, GPF debe proyectar estructura, control, cumplimiento y capacidad operativa.','GPF proyecta una operación financiera enfocada en orden, cumplimiento, trazabilidad y administración responsable de cartera.'],['Administración responsable de cartera, trazabilidad e información útil.','Administración de cartera con seguimiento, control operativo e información útil.'],['GPF debe comunicar con sentido humano hacia personas y con solidez institucional hacia convenios, aliados y fondeadores.',''],
  ['Qué puede revisar un fondeador','Información para evaluar una relación de fondeo'],['La información para fondeo debe enfocarse en datos, operación y control, no en promesas comerciales.','GPF busca construir relaciones de fondeo con información clara, trazabilidad operativa y administración responsable de cartera. La revisión puede partir de datos históricos, convenios, perfil de crédito y procesos de originación, cesión, cobranza y seguimiento.'],['Convenios activos o potenciales y concentración geográfica.','Cartera histórica, monto colocado, créditos dispersados y comportamiento por convenio.'],['Perfil de crédito, plazos, periodicidad, tasas y CAT por convenio.','Concentración por entidad, tipo de dependencia, plazo, periodicidad, tasa y CAT.'],['Proceso de originación, validación, cesión, cobranza y seguimiento.','Procesos de originación, validación, formalización, cesión, cobranza y seguimiento.'],['Comportamiento histórico y brechas de información pendientes.','Información disponible, brechas de datos y próximos elementos para fortalecer el análisis.']
];
replacements.forEach(([from,to]) => document.querySelectorAll('p,span,li,h1,h2,h3,h4,option,label,a,button').forEach(el => {if(el.textContent?.includes(from)){if(to==='' && el.textContent.trim()===from) el.remove(); else el.textContent = el.textContent.replaceAll(from,to).trim();}}));
document.querySelectorAll('option').forEach(o => {if(o.textContent.trim().toLowerCase()==='pensionado') o.remove();});
document.querySelectorAll('.privacy a').forEach(a => a.href='/aviso-de-privacidad/');
document.querySelectorAll('.role-band,.pillars-section').forEach(s => s.remove());

const interes = document.getElementById('interes'), tipoCliente = document.getElementById('tipoCliente'), tipoConvenio = document.getElementById('tipoConvenio'), clienteField = document.getElementById('clienteField'), convenioField = document.getElementById('convenioField'), leadForm = document.getElementById('leadForm'), formStatus = document.getElementById('formStatus');
function updateConditionalFields(){if(!interes||!clienteField||!convenioField||!tipoCliente||!tipoConvenio)return;clienteField.classList.remove('active');convenioField.classList.remove('active');tipoCliente.required=false;tipoConvenio.required=false;if(interes.value==='Ser cliente'){clienteField.classList.add('active');tipoCliente.required=true;}if(interes.value==='Convenio'){convenioField.classList.add('active');tipoConvenio.required=true;}}
interes?.addEventListener('change', updateConditionalFields);
leadForm?.addEventListener('submit', e => {e.preventDefault();updateConditionalFields();if(!leadForm.checkValidity()){leadForm.reportValidity();return;}if(formStatus){formStatus.textContent='Gracias. Recibimos tu información para orientar el seguimiento correspondiente. La atención no implica aprobación ni autorización de crédito.';formStatus.classList.add('active');}});

if (currentPath === '/convenios') {
  const style = document.createElement('style');
  style.textContent = `
  .hero-panel{position:relative;overflow:hidden;min-height:430px;display:flex;flex-direction:column;justify-content:space-between}.hero-panel:before{content:"";position:absolute;right:-86px;top:-86px;width:240px;height:240px;border-radius:50%;border:38px solid rgba(14,140,165,.22);animation:rotateHalo 22s linear infinite}.intro-grid{align-items:stretch!important}.intro-card{height:100%;display:flex;flex-direction:column;justify-content:center}.convenio-map{position:relative;margin-top:28px;min-height:220px;border-radius:28px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);overflow:hidden}.convenio-map:before,.convenio-map:after{content:"";position:absolute;border-radius:999px;border:1px solid rgba(255,255,255,.14);inset:22px;animation:mapPulse 5s ease-in-out infinite}.convenio-map:after{inset:58px;border-color:rgba(14,140,165,.42);animation-delay:1s}.map-core{position:absolute;left:50%;top:50%;z-index:3;transform:translate(-50%,-50%);width:84px;height:84px;border-radius:28px;display:grid;place-items:center;background:var(--turquesa);color:#fff;font-weight:900;box-shadow:0 20px 42px rgba(14,140,165,.32)}.map-node{position:absolute;z-index:4;display:inline-flex;align-items:center;justify-content:center;min-width:112px;min-height:38px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.94);color:var(--azul);font-size:.78rem;font-weight:900;box-shadow:0 14px 30px rgba(0,0,0,.14);animation:nodeGlow 4.5s ease-in-out infinite}.map-node.n1{top:24px;left:50%;transform:translateX(-50%)}.map-node.n2{right:22px;top:50%;transform:translateY(-50%);animation-delay:.7s}.map-node.n3{bottom:24px;left:50%;transform:translateX(-50%);animation-delay:1.4s}.map-node.n4{left:22px;top:50%;transform:translateY(-50%);animation-delay:2.1s}.map-line{position:absolute;left:50%;top:50%;width:38%;height:1px;background:linear-gradient(90deg,rgba(14,140,165,.9),transparent);transform-origin:left center;opacity:.65;animation:lineGlow 4s ease-in-out infinite}.map-line.l1{transform:rotate(-90deg)}.map-line.l2{transform:rotate(0deg)}.map-line.l3{transform:rotate(90deg)}.map-line.l4{transform:rotate(180deg)}@keyframes mapPulse{0%,100%{transform:scale(1);opacity:.76}50%{transform:scale(1.05);opacity:.38}}@keyframes nodeGlow{0%,100%{filter:brightness(1)}50%{filter:brightness(1.08)}}@keyframes lineGlow{0%,100%{opacity:.32}50%{opacity:.9}}@media(max-width:620px){.hero-panel{min-height:360px}.map-node{min-width:92px;font-size:.72rem}.intro-card{justify-content:flex-start}}
  `;
  document.head.appendChild(style);
  const panel = document.querySelector('.page-hero .hero-panel');
  if (panel && !panel.querySelector('.convenio-map')) {
    panel.insertAdjacentHTML('beforeend', '<div class="convenio-map" aria-label="Esquema animado de convenio"><span class="map-line l1" aria-hidden="true"></span><span class="map-line l2" aria-hidden="true"></span><span class="map-line l3" aria-hidden="true"></span><span class="map-line l4" aria-hidden="true"></span><div class="map-core">GPF</div><span class="map-node n1">Entidad</span><span class="map-node n2">Convenio</span><span class="map-node n3">Trabajadores</span><span class="map-node n4">Seguimiento</span></div>');
  }
}

const mvStyle = document.createElement('style');
mvStyle.textContent = `.mv-card{display:flex;flex-direction:column}.mv-card .mv-visual{position:relative;margin-top:30px;min-height:228px;border-radius:26px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);overflow:hidden}.mission-map{display:grid;place-items:center}.mission-map:before,.mission-map:after{content:"";position:absolute;border-radius:999px;border:1px solid rgba(255,255,255,.14);inset:24px}.mission-map:after{inset:56px;border-color:rgba(14,140,165,.42)}.mv-center{position:relative;z-index:3;width:98px;height:98px;border-radius:34px;display:grid;place-items:center;background:var(--turquesa);color:#fff;font-weight:900}.mv-node{position:absolute;z-index:4;display:inline-flex;align-items:center;justify-content:center;min-width:112px;min-height:38px;padding:8px 13px;border-radius:999px;background:rgba(255,255,255,.95);color:var(--azul);font-size:.78rem;font-weight:900}.mv-node:nth-child(2){top:22px;left:50%;transform:translateX(-50%)}.mv-node:nth-child(3){right:20px;top:50%;transform:translateY(-50%)}.mv-node:nth-child(4){bottom:22px;left:50%;transform:translateX(-50%)}.mv-node:nth-child(5){left:20px;top:50%;transform:translateY(-50%)}.vision-road{display:grid;align-items:center;padding:26px 18px;min-height:228px}.vision-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.vision-step{display:grid;gap:9px;justify-items:center;text-align:center;color:var(--azul);font-size:.74rem;font-weight:900}.vision-step span{width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:#fff;border:2px solid rgba(14,140,165,.24);color:var(--turquesa)}`;
document.head.appendChild(mvStyle);
const missionCard = Array.from(document.querySelectorAll('.mv-card')).find(c => c.querySelector('h3')?.textContent.trim().toLowerCase()==='misión');
const visionCard = Array.from(document.querySelectorAll('.mv-card')).find(c => c.querySelector('h3')?.textContent.trim().toLowerCase()==='visión');
if (missionCard && !missionCard.querySelector('.mission-map')) missionCard.insertAdjacentHTML('beforeend','<div class="mv-visual mission-map"><div class="mv-center">Personas</div><span class="mv-node">Respaldo</span><span class="mv-node">Claridad</span><span class="mv-node">Confianza</span><span class="mv-node">Tranquilidad</span></div>');
if (visionCard && !visionCard.querySelector('.vision-road')) visionCard.insertAdjacentHTML('beforeend','<div class="mv-visual vision-road"><div class="vision-steps"><div class="vision-step"><span>01</span><strong>Tecnología</strong></div><div class="vision-step"><span>02</span><strong>Responsabilidad</strong></div><div class="vision-step"><span>03</span><strong>Cercanía</strong></div><div class="vision-step"><span>04</span><strong>Confianza</strong></div><div class="vision-step"><span>05</span><strong>Reconocimiento institucional</strong></div></div></div>');

if (!document.getElementById('gpf-legal-footer-script')) {const s=document.createElement('script');s.id='gpf-legal-footer-script';s.src='/assets/js/legal-footer.js';s.defer=true;document.body.appendChild(s);}
