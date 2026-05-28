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

      moveAmbient();
      window.addEventListener('scroll', moveAmbient, { passive: true });

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
      clienteField.classList.remove('active');
      convenioField.classList.remove('active');
      tipoCliente.required = false;
      tipoConvenio.required = false;
      tipoCliente.value = '';
      tipoConvenio.value = '';
    }

    function updateConditionalFields() {
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

    interes.addEventListener('change', updateConditionalFields);

    document.querySelectorAll('[data-interest]').forEach((button) => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-interest');
        window.setTimeout(() => {
          interes.value = value;
          updateConditionalFields();
          interes.focus({ preventScroll: true });
        }, 350);
      });
    });

    leadForm.addEventListener('submit', (event) => {
      event.preventDefault();
      updateConditionalFields();

      if (!leadForm.checkValidity()) {
        leadForm.reportValidity();
        return;
      }

      formStatus.classList.add('active');
    });
