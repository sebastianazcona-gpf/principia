const spacingOverrideId = 'gpf-compact-section-spacing';

if (!document.getElementById(spacingOverrideId)) {
  const compactSpacing = document.createElement('style');
  compactSpacing.id = spacingOverrideId;
  compactSpacing.textContent = `
    @media (min-width: 981px) {
      section { padding-top: 64px; padding-bottom: 64px; }
      .hero { padding-top: 84px; padding-bottom: 56px; }
      .page-hero { padding-top: 84px; padding-bottom: 52px; }
      .section-head { margin-bottom: 30px; }
    }
  `;
  document.head.appendChild(compactSpacing);
}

const siteHeader = document.querySelector('header');
const siteNav = document.querySelector('header .nav');
const mainMenu = document.querySelector('header .menu');

if (siteHeader && siteNav && mainMenu && !document.querySelector('.menu-toggle')) {
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.type = 'button';
  menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-controls', 'menuPrincipal');
  mainMenu.id = mainMenu.id || 'menuPrincipal';
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  siteNav.appendChild(menuToggle);

  const closeMenu = () => {
    mainMenu.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    menuToggle.classList.remove('is-active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');
  };

  const openMenu = () => {
    mainMenu.classList.add('is-open');
    document.body.classList.add('nav-open');
    menuToggle.classList.add('is-active');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
  };

  menuToggle.addEventListener('click', () => {
    if (mainMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mainMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!mainMenu.classList.contains('is-open')) return;
    if (siteHeader.contains(event.target)) return;
    closeMenu();
  });
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));

  const ambientEls = document.querySelectorAll('.ambient');
  const moveAmbient = () => {
    const y = window.scrollY || 0;
    ambientEls.forEach((el, index) => {
      const depth = Number(el.dataset.depth || 0.08);
      const direction = index % 2 === 0 ? 1 : -1;
      el.style.transform = `translate3d(${direction * y * depth * 0.28}px, ${y * depth}px, 0)`;
    });
  };

  if (ambientEls.length) {
    moveAmbient();
    window.addEventListener('scroll', moveAmbient, { passive: true });
  }

  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 4;
      const rotateX = ((y / rect.height) - 0.5) * -4;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

const interes = document.getElementById('interes');
const tipoCliente = document.getElementById('tipoCliente');
const tipoConvenio = document.getElementById('tipoConvenio');
const clienteField = document.getElementById('clienteField');
const convenioField = document.getElementById('convenioField');
const leadForm = document.getElementById('leadForm');
const formStatus = document.getElementById('formStatus');

function resetConditionalFields() {
  if (!clienteField || !convenioField || !tipoCliente || !tipoConvenio) return;

  clienteField.classList.remove('active');
  convenioField.classList.remove('active');
  tipoCliente.required = false;
  tipoConvenio.required = false;
  tipoCliente.value = '';
  tipoConvenio.value = '';
}

function updateConditionalFields() {
  if (!interes || !clienteField || !convenioField || !tipoCliente || !tipoConvenio) return;

  resetConditionalFields();

  if (interes.value === 'Ser cliente') {
    clienteField.classList.add('active');
    tipoCliente.required = true;
  }

  if (interes.value === 'Convenio') {
    convenioField.classList.add('active');
    tipoConvenio.required = true;
  }
}

if (interes) {
  interes.addEventListener('change', updateConditionalFields);
}

document.querySelectorAll('[data-interest]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!interes) return;

    const value = button.getAttribute('data-interest');
    window.setTimeout(() => {
      interes.value = value;
      updateConditionalFields();
      interes.focus({ preventScroll: true });
    }, 350);
  });
});

if (leadForm) {
  leadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateConditionalFields();

    if (!leadForm.checkValidity()) {
      leadForm.reportValidity();
      return;
    }

    if (formStatus) {
      formStatus.classList.add('active');
    }
  });
}
