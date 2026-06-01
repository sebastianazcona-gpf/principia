const compactStyle = document.createElement('style');
compactStyle.textContent = `@media (min-width:981px){section{padding-top:64px;padding-bottom:64px}.hero{padding-top:84px;padding-bottom:56px}.page-hero{padding-top:84px;padding-bottom:52px}.section-head{margin-bottom:30px}}`;
document.head.appendChild(compactStyle);

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
document.querySelectorAll('.role-band,.pillars-section').forEach(section => section.remove());

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

const mvStyle = document.createElement('style');
mvStyle.textContent = `.mv-card{display:flex;flex-direction:column}.mv-card .mv-visual{position:relative;margin-top:30px;min-height:228px;border-radius:26px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);overflow:hidden}.mission-map{display:grid;place-items:center}.mission-map:before,.mission-map:after{content:"";position:absolute;border-radius:999px;border:1px solid rgba(255,255,255,.14);inset:24px}.mission-map:after{inset:56px;border-color:rgba(14,140,165,.42)}.mv-center{position:relative;z-index:3;width:98px;height:98px;border-radius:34px;display:grid;place-items:center;background:var(--turquesa);color:#fff;font-weight:900}.mv-node{position:absolute;z-index:4;display:inline-flex;align-items:center;justify-content:center;min-width:112px;min-height:38px;padding:8px 13px;border-radius:999px;background:rgba(255,255,255,.95);color:var(--azul);font-size:.78rem;font-weight:900}.mv-node:nth-child(2){top:22px;left:50%;transform:translateX(-50%)}.mv-node:nth-child(3){right:20px;top:50%;transform:translateY(-50%)}.mv-node:nth-child(4){bottom:22px;left:50%;transform:translateX(-50%)}.mv-node:nth-child(5){left:20px;top:50%;transform:translateY(-50%)}.vision-road{display:grid;align-items:center;padding:26px 18px;min-height:228px}.vision-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}.vision-step{display:grid;gap:9px;justify-items:center;text-align:center;color:var(--azul);font-size:.74rem;font-weight:900}.vision-step span{width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:#fff;border:2px solid rgba(14,140,165,.24);color:var(--turquesa)}`;
document.head.appendChild(mvStyle);

const missionCard = Array.from(document.querySelectorAll('.mv-card')).find(card => card.querySelector('h3')?.textContent.trim().toLowerCase() === 'misión');
const visionCard = Array.from(document.querySelectorAll('.mv-card')).find(card => card.querySelector('h3')?.textContent.trim().toLowerCase() === 'visión');

if (missionCard && !missionCard.querySelector('.mission-map')) {
  missionCard.insertAdjacentHTML('beforeend','<div class="mv-visual mission-map"><div class="mv-center">Personas</div><span class="mv-node">Respaldo</span><span class="mv-node">Claridad</span><span class="mv-node">Confianza</span><span class="mv-node">Tranquilidad</span></div>');
}

if (visionCard && !visionCard.querySelector('.vision-road')) {
  visionCard.insertAdjacentHTML('beforeend','<div class="mv-visual vision-road"><div class="vision-steps"><div class="vision-step"><span>01</span><strong>Tecnología</strong></div><div class="vision-step"><span>02</span><strong>Responsabilidad</strong></div><div class="vision-step"><span>03</span><strong>Cercanía</strong></div><div class="vision-step"><span>04</span><strong>Confianza</strong></div><div class="vision-step"><span>05</span><strong>Reconocimiento institucional</strong></div></div></div>');
}

if (!document.getElementById('gpf-legal-footer-script')) {
  const script = document.createElement('script');
  script.id = 'gpf-legal-footer-script';
  script.src = '/assets/js/legal-footer.js';
  script.defer = true;
  document.body.appendChild(script);
}
