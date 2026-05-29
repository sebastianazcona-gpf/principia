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

const copyReplacements = [
  {
    from: 'GPF existe para acompañar decisiones financieras importantes sin promesas fáciles ni atajos comerciales. Su valor está en operar con claridad, ordenar procesos, cuidar la trazabilidad y construir relaciones sostenibles.',
    to: 'GPF existe para estar presente cuando las personas necesitan respaldo para avanzar. En momentos importantes, especiales o urgentes, busca ofrecer soluciones financieras claras, responsables y cercanas, acompañando cada decisión con orden, transparencia y confianza.'
  },
  {
    from: 'Lectura B2C',
    to: 'Para personas'
  },
  {
    from: 'Para personas, GPF debe sentirse como respaldo claro, serio y cercano en decisiones financieras importantes.',
    to: 'GPF busca acompañar a personas que necesitan respaldo financiero en momentos importantes, con información clara, atención cercana y procesos responsables.'
  },
  {
    from: 'Lectura B2B',
    to: 'Para instituciones, aliados y fondeadores'
  },
  {
    from: 'Para instituciones, aliados y fondeadores, GPF debe proyectar estructura, control, cumplimiento y capacidad operativa.',
    to: 'GPF proyecta una operación financiera enfocada en orden, cumplimiento, trazabilidad y administración responsable de cartera.'
  },
  {
    from: 'Administración responsable de cartera, trazabilidad e información útil.',
    to: 'Administración de cartera con seguimiento, control operativo e información útil.'
  },
  {
    from: 'GPF debe comunicar con sentido humano hacia personas y con solidez institucional hacia convenios, aliados y fondeadores.',
    to: ''
  },
  {
    from: 'Qué debe quedar claro desde el inicio',
    to: 'Construyamos un convenio con reglas claras'
  },
  {
    from: 'El convenio no implica aprobación automática ni disponibilidad para toda la plantilla. La operación depende del perfil del trabajador, capacidad de descuento, políticas del producto, documentación, validaciones y condiciones vigentes.',
    to: 'Cada convenio parte de una conversación institucional para entender el perfil de la organización, la población elegible y las necesidades de sus colaboradores. GPF puede estructurar una solución de crédito por descuento en nómina bajo criterios de elegibilidad, capacidad de pago, documentación, validaciones y condiciones vigentes.'
  },
  {
    from: 'La entidad define la población autorizada y el marco de colaboración.',
    to: 'La institución define el alcance del convenio y la población autorizada.'
  },
  {
    from: 'GPF estructura y administra la solución de crédito correspondiente.',
    to: 'GPF estructura y administra la solución financiera correspondiente.'
  },
  {
    from: 'La originación puede apoyarse en canales y aliados comerciales autorizados.',
    to: 'La operación puede apoyarse en canales autorizados para orientación, originación y seguimiento.'
  },
  {
    from: 'Antes de comunicar el producto a trabajadores, el convenio debe revisar viabilidad, reglas de descuento, documentación, tratamiento de datos y responsabilidades operativas.',
    to: ''
  },
  {
    from: 'Qué puede revisar un fondeador',
    to: 'Información para evaluar una relación de fondeo'
  },
  {
    from: 'La información para fondeo debe enfocarse en datos, operación y control, no en promesas comerciales.',
    to: 'GPF busca construir relaciones de fondeo con información clara, trazabilidad operativa y administración responsable de cartera. La revisión puede partir de datos históricos, convenios, perfil de crédito y procesos de originación, cesión, cobranza y seguimiento.'
  },
  {
    from: 'Convenios activos o potenciales y concentración geográfica.',
    to: 'Cartera histórica, monto colocado, créditos dispersados y comportamiento por convenio.'
  },
  {
    from: 'Perfil de crédito, plazos, periodicidad, tasas y CAT por convenio.',
    to: 'Concentración por entidad, tipo de dependencia, plazo, periodicidad, tasa y CAT.'
  },
  {
    from: 'Proceso de originación, validación, cesión, cobranza y seguimiento.',
    to: 'Procesos de originación, validación, formalización, cesión, cobranza y seguimiento.'
  },
  {
    from: 'Comportamiento histórico y brechas de información pendientes.',
    to: 'Información disponible, brechas de datos y próximos elementos para fortalecer el análisis.'
  }
];

copyReplacements.forEach(({ from, to }) => {
  document.querySelectorAll('p, span, li, h1, h2, h3, h4').forEach((element) => {
    if (element.textContent && element.textContent.includes(from)) {
      if (to === '' && element.textContent.trim() === from) {
        element.remove();
        return;
      }
      element.textContent = element.textContent.replace(from, to).trim();
    }
  });
});

document.querySelectorAll('.role-band, .pillars-section').forEach((section) => {
  section.remove();
});

const mvVisualStylesId = 'gpf-mission-vision-visuals';
if (!document.getElementById(mvVisualStylesId)) {
  const style = document.createElement('style');
  style.id = mvVisualStylesId;
  style.textContent = `
    .mv-card{display:flex;flex-direction:column;justify-content:flex-start;gap:0}
    .mv-card .mv-visual{position:relative;z-index:1;margin-top:30px;width:100%;min-height:228px;border-radius:26px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);overflow:hidden}
    .mv-card:nth-child(2) .mv-visual{background:rgba(255,255,255,.74);border-color:rgba(20,37,68,.08)}
    .mission-map{display:grid;place-items:center}
    .mission-map:before,.mission-map:after{content:"";position:absolute;border-radius:999px;border:1px solid rgba(255,255,255,.14);inset:24px;animation:mvPulse 5.2s ease-in-out infinite}
    .mission-map:after{inset:56px;border-color:rgba(14,140,165,.42);animation-delay:1.1s}
    .mv-center{position:relative;z-index:3;width:98px;height:98px;border-radius:34px;display:grid;place-items:center;background:var(--turquesa);color:#fff;font-weight:900;box-shadow:0 22px 42px rgba(14,140,165,.26);animation:mvCenterFloat 4.8s ease-in-out infinite}
    .mv-node{position:absolute;z-index:4;display:inline-flex;align-items:center;justify-content:center;min-width:112px;min-height:38px;padding:8px 13px;border-radius:999px;background:rgba(255,255,255,.95);color:var(--azul);font-size:.78rem;font-weight:900;box-shadow:0 14px 30px rgba(0,0,0,.14);animation:mvNodeFloat 5.4s ease-in-out infinite}
    .mv-node:nth-child(2){top:22px;left:50%;transform:translateX(-50%);animation-delay:.1s}.mv-node:nth-child(3){right:20px;top:50%;transform:translateY(-50%);animation-delay:.6s}.mv-node:nth-child(4){bottom:22px;left:50%;transform:translateX(-50%);animation-delay:1.1s}.mv-node:nth-child(5){left:20px;top:50%;transform:translateY(-50%);animation-delay:1.6s}
    .mission-line{position:absolute;z-index:2;left:50%;top:50%;width:40%;height:1px;background:linear-gradient(90deg,rgba(14,140,165,.85),transparent);transform-origin:left center;opacity:.65;animation:mvLineGlow 4s ease-in-out infinite}.mission-line.line-1{transform:rotate(-90deg)}.mission-line.line-2{transform:rotate(0deg)}.mission-line.line-3{transform:rotate(90deg)}.mission-line.line-4{transform:rotate(180deg)}
    .vision-road{display:grid;align-items:center;padding:26px 18px;min-height:228px}
    .vision-road:before{content:"";position:absolute;left:32px;right:32px;top:50%;height:3px;border-radius:999px;background:rgba(20,37,68,.12)}
    .vision-road:after{content:"";position:absolute;left:32px;top:50%;height:3px;width:calc(100% - 64px);border-radius:999px;background:linear-gradient(90deg,var(--turquesa),rgba(20,37,68,.86));transform-origin:left center;animation:mvProgress 6.5s ease-in-out infinite}
    .vision-steps{position:relative;z-index:3;display:grid;grid-template-columns:repeat(5,1fr);gap:10px;width:100%}
    .vision-step{display:grid;gap:9px;justify-items:center;text-align:center;color:var(--azul);font-size:.74rem;font-weight:900;line-height:1.18;animation:mvStepRise 6.5s ease-in-out infinite}.vision-step span{width:34px;height:34px;border-radius:999px;display:grid;place-items:center;background:#fff;border:2px solid rgba(14,140,165,.24);box-shadow:0 10px 24px rgba(20,37,68,.1);color:var(--turquesa)}
    .vision-step:nth-child(1){animation-delay:.1s}.vision-step:nth-child(2){animation-delay:.35s}.vision-step:nth-child(3){animation-delay:.6s}.vision-step:nth-child(4){animation-delay:.85s}.vision-step:nth-child(5){animation-delay:1.1s}
    @keyframes mvPulse{0%,100%{transform:scale(1);opacity:.75}50%{transform:scale(1.05);opacity:.38}}
    @keyframes mvCenterFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
    @keyframes mvNodeFloat{0%,100%{filter:brightness(1)}50%{filter:brightness(1.08)}}
    @keyframes mvLineGlow{0%,100%{opacity:.35}50%{opacity:.92}}
    @keyframes mvProgress{0%{transform:scaleX(.08);opacity:.54}55%,100%{transform:scaleX(1);opacity:.92}}
    @keyframes mvStepRise{0%,20%{transform:translateY(8px);opacity:.62}45%,100%{transform:translateY(0);opacity:1}}
    @media(max-width:720px){.mv-card .mv-visual{min-height:250px}.mv-node{min-width:98px;font-size:.72rem}.vision-steps{grid-template-columns:1fr;gap:8px}.vision-road:before,.vision-road:after{display:none}.vision-step{grid-template-columns:34px 1fr;justify-items:start;text-align:left;align-items:center}.vision-road{padding:22px}}
    @media(prefers-reduced-motion:reduce){.mission-map:before,.mission-map:after,.mv-center,.mv-node,.mission-line,.vision-road:after,.vision-step{animation:none!important}}
  `;
  document.head.appendChild(style);
}

const missionCard = Array.from(document.querySelectorAll('.mv-card')).find((card) => card.querySelector('h3')?.textContent.trim().toLowerCase() === 'misión');
const visionCard = Array.from(document.querySelectorAll('.mv-card')).find((card) => card.querySelector('h3')?.textContent.trim().toLowerCase() === 'visión');

if (missionCard && !missionCard.querySelector('.mission-map')) {
  missionCard.insertAdjacentHTML('beforeend', `
    <div class="mv-visual mission-map" aria-label="Esquema de misión: personas al centro con respaldo, claridad, confianza y tranquilidad">
      <span class="mission-line line-1" aria-hidden="true"></span><span class="mission-line line-2" aria-hidden="true"></span><span class="mission-line line-3" aria-hidden="true"></span><span class="mission-line line-4" aria-hidden="true"></span>
      <div class="mv-center">Personas</div>
      <span class="mv-node">Respaldo</span>
      <span class="mv-node">Claridad</span>
      <span class="mv-node">Confianza</span>
      <span class="mv-node">Tranquilidad</span>
    </div>
  `);
}

if (visionCard && !visionCard.querySelector('.vision-road')) {
  visionCard.insertAdjacentHTML('beforeend', `
    <div class="mv-visual vision-road" aria-label="Esquema de visión: tecnología, responsabilidad, cercanía, confianza y reconocimiento institucional">
      <div class="vision-steps">
        <div class="vision-step"><span>01</span><strong>Tecnología</strong></div>
        <div class="vision-step"><span>02</span><strong>Responsabilidad</strong></div>
        <div class="vision-step"><span>03</span><strong>Cercanía</strong></div>
        <div class="vision-step"><span>04</span><strong>Confianza</strong></div>
        <div class="vision-step"><span>05</span><strong>Reconocimiento institucional</strong></div>
      </div>
    </div>
  `);
}

const legalFooterScriptId = 'gpf-legal-footer-script';
if (!document.getElementById(legalFooterScriptId)) {
  const legalFooterScript = document.createElement('script');
  legalFooterScript.id = legalFooterScriptId;
  legalFooterScript.src = '/assets/js/legal-footer.js';
  legalFooterScript.defer = true;
  document.body.appendChild(legalFooterScript);
}
