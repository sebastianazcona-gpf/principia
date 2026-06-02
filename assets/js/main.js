const compactStyle = document.createElement('style');
compactStyle.textContent = `@media (min-width:981px){section{padding-top:64px;padding-bottom:64px}.hero{padding-top:84px;padding-bottom:56px}.page-hero{padding-top:84px;padding-bottom:52px}.section-head{margin-bottom:30px}}`;
document.head.appendChild(compactStyle);

const currentPath = window.location.pathname.replace(/\/+$/, '/') || '/';

document.querySelectorAll('header .menu a[href="/fondeadores/"]').forEach((link) => {
  if (link.textContent.trim() === 'Fondeadores') {
    link.textContent = 'Aliados financieros';
  }
});

if (currentPath === '/fondeadores/') {
  document.title = 'Aliados financieros | Grupo Principia Futuro';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Información institucional para aliados financieros interesados en modelos de colocación vía nómina, administración de cartera, trazabilidad operativa y colaboración financiera con GPF.');
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', 'Aliados financieros | Grupo Principia Futuro');
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', 'Información institucional para aliados financieros interesados en modelos de colocación vía nómina, administración de cartera, trazabilidad operativa y colaboración financiera con GPF.');
  }

  const fundingStyle = document.createElement('style');
  fundingStyle.textContent = `.hero-grid-page{display:grid;grid-template-columns:1.02fr .98fr;gap:44px;align-items:center}.hero-panel{background:var(--azul);color:#fff;border-radius:34px;padding:34px;box-shadow:var(--sombra);position:relative;overflow:hidden}.hero-panel:before{content:"";position:absolute;right:-86px;top:-86px;width:240px;height:240px;border-radius:50%;border:38px solid rgba(14,140,165,.22);animation:rotateHalo 22s linear infinite}.hero-panel>*{position:relative;z-index:1}.funding-panel{min-height:470px;display:flex;flex-direction:column;justify-content:center}.funding-network{--node-distance:164px;--core-edge:48px;position:relative;width:min(420px,100%);aspect-ratio:1;margin:16px auto 0;border-radius:999px;isolation:isolate;background:radial-gradient(circle,rgba(14,140,165,.18) 0%,rgba(14,140,165,.08) 34%,rgba(255,255,255,.035) 62%,transparent 70%)}.funding-network:before,.funding-network:after{content:"";position:absolute;inset:8%;border-radius:999px;border:1px solid rgba(255,255,255,.1)}.funding-network:after{inset:24%;border-color:rgba(14,140,165,.24);box-shadow:0 0 50px rgba(14,140,165,.12);animation:fundingHalo 4.8s ease-in-out infinite}.funding-core{position:absolute;left:50%;top:50%;z-index:5;width:92px;height:92px;border-radius:30px;display:grid;place-items:center;transform:translate(-50%,-50%);background:linear-gradient(135deg,var(--turquesa),#0b6f86);color:#fff;font-size:1.15rem;font-weight:900;letter-spacing:.08em;box-shadow:0 0 0 10px rgba(14,140,165,.14),0 26px 56px rgba(14,140,165,.34)}.funding-pair{position:absolute;left:50%;top:50%;z-index:3;width:0;height:0;transform:rotate(var(--angle));transform-origin:center}.funding-line{position:absolute;left:var(--core-edge);top:-1px;width:calc(var(--node-distance) - 58px);height:2px;border-radius:999px;background:linear-gradient(90deg,rgba(14,140,165,.95),rgba(255,255,255,.2));opacity:0;transform:scaleX(0);transform-origin:left center;box-shadow:0 0 20px rgba(14,140,165,.5);transition:opacity .8s ease,transform 1.05s cubic-bezier(.2,.8,.2,1)}.funding-node{position:absolute;left:var(--node-distance);top:0;width:18px;height:18px;border-radius:999px;background:#e8fdff;opacity:0;transform:translate(-50%,-50%) scale(.35);transition:opacity .85s ease,transform .95s cubic-bezier(.2,.8,.2,1),box-shadow .95s ease,background .95s ease}.funding-pulse{position:absolute;left:var(--node-distance);top:0;z-index:4;width:11px;height:11px;border-radius:999px;background:#fff;opacity:0;transform:translate(-50%,-50%) scale(.45);box-shadow:0 0 12px rgba(255,255,255,.95),0 0 28px rgba(14,140,165,.95),0 0 52px rgba(14,140,165,.62)}.funding-pair.is-active .funding-line{opacity:.92;transform:scaleX(1)}.funding-pair.is-active .funding-node{opacity:1;transform:translate(-50%,-50%) scale(1);background:var(--turquesa);box-shadow:0 0 0 8px rgba(14,140,165,.16),0 0 26px rgba(14,140,165,.94),0 0 58px rgba(255,255,255,.45)}.funding-pair.is-inbound .funding-pulse{animation:fundingInbound .9s cubic-bezier(.18,.78,.22,1) forwards}.funding-pair.is-outbound .funding-pulse{animation:fundingOutbound .9s cubic-bezier(.18,.78,.22,1) forwards}.funding-network.is-resetting .funding-pair .funding-line{opacity:0;transform:scaleX(0)}.funding-network.is-resetting .funding-pair .funding-node{opacity:0;transform:translate(-50%,-50%) scale(.35)}.funding-network.is-resetting .funding-pair .funding-pulse{opacity:0;animation:none}@keyframes fundingHalo{0%,100%{transform:scale(1);opacity:.8}50%{transform:scale(1.08);opacity:.42}}@keyframes fundingInbound{0%{left:var(--node-distance);opacity:0;transform:translate(-50%,-50%) scale(.4)}12%{opacity:1}78%{opacity:1}100%{left:var(--core-edge);opacity:0;transform:translate(-50%,-50%) scale(1.18)}}@keyframes fundingOutbound{0%{left:var(--core-edge);opacity:0;transform:translate(-50%,-50%) scale(.4)}12%{opacity:1}78%{opacity:1}100%{left:var(--node-distance);opacity:0;transform:translate(-50%,-50%) scale(1.18)}}@media(max-width:980px){.hero-grid-page{grid-template-columns:1fr}.funding-panel{min-height:430px}.funding-network{--node-distance:150px;max-width:380px}}@media(max-width:620px){.funding-panel{min-height:360px;padding:26px}.funding-network{--node-distance:116px;--core-edge:40px;max-width:300px}.funding-core{width:76px;height:76px;border-radius:24px}.funding-line{width:calc(var(--node-distance) - 48px)}.funding-node{width:15px;height:15px}.funding-pulse{width:9px;height:9px}}`;
  document.head.appendChild(fundingStyle);

  const hero = document.querySelector('.page-hero');
  hero?.querySelector('.eyebrow') && (hero.querySelector('.eyebrow').textContent = 'Aliados financieros');
  hero?.querySelector('h1') && (hero.querySelector('h1').innerHTML = 'Alianzas financieras para modelos de colocación <span>respaldados por convenios.</span>');
  hero?.querySelector('.lead') && (hero.querySelector('.lead').textContent = 'GPF busca construir relaciones institucionales con aliados financieros interesados en modelos de colocación vía nómina, administración de cartera, trazabilidad operativa y estructuras de colaboración sujetas a revisión legal, financiera y contractual.');

  const primaryHeroCta = hero?.querySelector('.hero-actions a.btn-primary');
  if (primaryHeroCta) {
    primaryHeroCta.textContent = 'Explorar alianza financiera';
  }

  const heroContainer = hero?.querySelector('.container');
  if (heroContainer && !heroContainer.querySelector('.hero-panel')) {
    const contentWrap = document.createElement('div');
    contentWrap.className = 'reveal is-visible';
    Array.from(heroContainer.childNodes).forEach((node) => contentWrap.appendChild(node));
    heroContainer.classList.add('hero-grid-page');
    heroContainer.appendChild(contentWrap);

    const panel = document.createElement('aside');
    panel.className = 'hero-panel funding-panel reveal tilt-card';
    panel.setAttribute('data-delay', '1');
    panel.setAttribute('aria-label', 'Esquema animado de relación entre GPF y aliados financieros');
    panel.innerHTML = '<span class="eyebrow">Red institucional</span><div class="funding-network" data-funding-network aria-hidden="true"><div class="funding-core">GPF</div></div>';
    const network = panel.querySelector('.funding-network');
    [-90,-54,-18,18,54,90,126,162,198,234].forEach((angle) => {
      const pair = document.createElement('span');
      pair.className = 'funding-pair';
      pair.setAttribute('data-funding-pair', '');
      pair.style.setProperty('--angle', `${angle}deg`);
      pair.innerHTML = '<span class="funding-line"></span><span class="funding-node"></span><span class="funding-pulse"></span>';
      network.appendChild(pair);
    });
    heroContainer.appendChild(panel);
  }

  const heroPanel = hero?.querySelector('.hero-panel');
  heroPanel?.setAttribute('aria-label', 'Esquema animado de relación entre GPF y aliados financieros');
  heroPanel?.querySelector('.eyebrow') && (heroPanel.querySelector('.eyebrow').textContent = 'Red institucional');

  function shuffle(items){
    const array = items.slice();
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function replayPulse(pair, className, duration){
    pair.classList.remove(className);
    void pair.offsetWidth;
    pair.classList.add(className);
    window.setTimeout(() => pair.classList.remove(className), duration);
  }

  document.querySelectorAll('[data-funding-network]').forEach((network) => {
    const pairs = Array.from(network.querySelectorAll('[data-funding-pair]'));
    if(!pairs.length || network.dataset.started === 'true') return;
    network.dataset.started = 'true';
    const appearStep = 680, outboundStep = 170, pulseDuration = 900, startDelay = 320, holdBeforeOutbound = 1500, resetPause = 760;
    const cycleTime = startDelay + pairs.length * appearStep + holdBeforeOutbound + pairs.length * outboundStep + pulseDuration + resetPause;
    function clearNetwork(){
      network.classList.add('is-resetting');
      pairs.forEach(pair => pair.classList.remove('is-active','is-inbound','is-outbound'));
      window.setTimeout(() => network.classList.remove('is-resetting'), 90);
    }
    function cycle(){
      clearNetwork();
      shuffle(pairs).forEach((pair, index) => {
        window.setTimeout(() => {
          pair.classList.add('is-active');
          replayPulse(pair, 'is-inbound', pulseDuration);
        }, startDelay + index * appearStep);
      });
      window.setTimeout(() => {
        shuffle(pairs).forEach((pair, index) => {
          window.setTimeout(() => replayPulse(pair, 'is-outbound', pulseDuration), index * outboundStep);
        });
      }, startDelay + pairs.length * appearStep + holdBeforeOutbound);
      window.setTimeout(clearNetwork, startDelay + pairs.length * appearStep + holdBeforeOutbound + pairs.length * outboundStep + pulseDuration);
    }
    cycle();
    window.setInterval(cycle, cycleTime);
  });

  const firstInfoGrid = document.querySelector('main section:nth-of-type(2) .info-grid');
  const darkCard = firstInfoGrid?.querySelector('.info-card.dark');
  const lightCard = firstInfoGrid?.querySelector('.info-card:not(.dark)');

  darkCard?.querySelector('.eyebrow') && (darkCard.querySelector('.eyebrow').textContent = 'Enfoque institucional');
  darkCard?.querySelector('h2') && (darkCard.querySelector('h2').textContent = 'El fondeo debe sostener colocación responsable, cartera sana y administración disciplinada.');
  darkCard?.querySelector('p') && (darkCard.querySelector('p').textContent = 'Una relación financiera sólida requiere más que capacidad de colocación. Requiere información verificable, reglas claras de originación, estructura de cobranza, seguimiento operativo, cumplimiento y administración responsable de cartera.');

  lightCard?.querySelector('h3') && (lightCard.querySelector('h3').textContent = 'Qué evalúa un aliado financiero');
  lightCard?.querySelector('p') && (lightCard.querySelector('p').textContent = 'La revisión debe considerar producto, estructura de cobro, calidad de información, reputación, gobierno corporativo y mecanismos de respaldo disponibles.');

  const firstInfoList = lightCard?.querySelector('.bullet-list');
  if (firstInfoList) {
    firstInfoList.innerHTML = '<li>Estructura de cobranza, conciliación, seguimiento e incidencias.</li><li>Calidad de cartera, convenios vigentes, concentración, plazos y recurrencia.</li><li>Documentación, validaciones, reportes, controles y trazabilidad por operación.</li><li>Responsables, experiencia, cumplimiento, antecedentes y claridad en decisiones.</li>';
  }

  const finalCta = document.querySelector('main section.cta .cta-box');
  finalCta?.querySelector('h2') && (finalCta.querySelector('h2').textContent = 'Explora una alianza financiera con GPF.');
  finalCta?.querySelector('p') && (finalCta.querySelector('p').textContent = 'Comparte tu perfil institucional para revisar si existe una posible ruta de colaboración financiera conforme al producto, criterios de riesgo, información disponible y estructura aplicable.');

  const riskNote = document.querySelector('.risk-box p');
  if (riskNote) {
    riskNote.innerHTML = '<strong>Importante:</strong> esta página tiene fines exclusivamente informativos e institucionales. No constituye oferta pública de inversión, recomendación financiera, promesa de rendimiento ni garantía de resultado. Cualquier esquema de colaboración financiera deberá revisarse de forma privada con información legal, financiera, operativa y contractual vigente.';
  }
}

function removeParagraphByExactText(text) {
  document.querySelectorAll('p').forEach((paragraph) => {
    if (paragraph.textContent.trim() === text) {
      paragraph.remove();
    }
  });
}

if (currentPath === '/quienes-somos/') {
  removeParagraphByExactText('La identidad de GPF debe sostenerse tanto frente a personas como frente a instituciones, aliados y fondeadores.');
}

if (currentPath === '/convenios/') {
  removeParagraphByExactText('La revisión temprana permite ordenar el alcance, la operación y la comunicación con trabajadores.');
}

if (currentPath === '/solicitar-credito/') {
  document.querySelector('.hero-actions a.btn-secondary[href="/convenios/"]')?.remove();
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

  const close = () => {
    mainMenu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded','false');
  };

  toggle.addEventListener('click', () => {
    const open = !mainMenu.classList.contains('is-open');
    mainMenu.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  mainMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), {threshold:.12});

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.transform = `perspective(900px) rotateX(${((e.clientY-r.top)/r.height-.5)*-4}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*4}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

document.querySelectorAll('.privacy a').forEach(a => { a.href = '/aviso-de-privacidad/'; });

const interes = document.getElementById('interes');
const tipoCliente = document.getElementById('tipoCliente');
const tipoConvenio = document.getElementById('tipoConvenio');
const clienteField = document.getElementById('clienteField');
const convenioField = document.getElementById('convenioField');
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');

function updateConditionalFields(){
  if(!interes || !clienteField || !convenioField || !tipoCliente || !tipoConvenio) return;
  clienteField.classList.remove('active');
  convenioField.classList.remove('active');
  tipoCliente.required = false;
  tipoConvenio.required = false;

  if(interes.value === 'Ser cliente'){
    clienteField.classList.add('active');
    tipoCliente.required = true;
  }
  if(interes.value === 'Convenio'){
    convenioField.classList.add('active');
    tipoConvenio.required = true;
  }
}

interes?.addEventListener('change', updateConditionalFields);

leadForm?.addEventListener('submit', e => {
  e.preventDefault();
  updateConditionalFields();
  if(!leadForm.checkValidity()){
    leadForm.reportValidity();
    return;
  }
  if(formStatus){
    formStatus.textContent = 'Gracias. Recibimos tu información para orientar el seguimiento correspondiente. La atención no implica aprobación ni autorización de crédito.';
    formStatus.classList.add('active');
  }
});

if (!document.getElementById('gpf-legal-footer-script')) {
  const script = document.createElement('script');
  script.id = 'gpf-legal-footer-script';
  script.src = '/assets/js/legal-footer.js';
  script.defer = true;
  document.body.appendChild(script);
}