const compactStyle = document.createElement('style');
compactStyle.textContent = `@media (min-width:981px){section{padding-top:64px;padding-bottom:64px}.hero{padding-top:84px;padding-bottom:56px}.page-hero{padding-top:84px;padding-bottom:52px}.section-head{margin-bottom:30px}}`;
document.head.appendChild(compactStyle);

const currentPath = window.location.pathname.replace(/\/+$/, '/') || '/';

document.querySelectorAll('header .menu a[href="/fondeadores/"]').forEach((link) => {
  if (link.textContent.trim() === 'Fondeadores') {
    link.textContent = 'Aliados financieros';
  }
});

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