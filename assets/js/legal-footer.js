const styleId = 'gpf-legal-footer-styles';

if (!document.getElementById(styleId)) {
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    footer.gpf-legal-footer{position:relative;margin:0!important;padding:0!important;overflow:hidden;background:radial-gradient(circle at 90% 10%,rgba(14,140,165,.16),transparent 28%),linear-gradient(135deg,#142544 0%,#101f3a 100%)!important;color:#fff!important;border-top:1px solid rgba(14,140,165,.22)!important;line-height:1.45!important}
    footer.gpf-legal-footer:before{content:"";position:absolute;top:0;left:0;width:22%;height:6px;background:var(--turquesa)}
    footer.gpf-legal-footer:after{content:"";position:absolute;right:-120px;bottom:-160px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(14,140,165,.13),transparent 62%);pointer-events:none}
    .gpf-legal-footer *{box-sizing:border-box}.gpf-legal-footer a{text-decoration:none!important;color:inherit!important}.gpf-legal-footer a:hover{color:#d7f7fb!important}.gpf-legal-footer strong{color:#fff!important;font-weight:900!important}
    .gpf-legal-notice{position:relative;z-index:2;margin:0!important;padding:18px 0!important;background:rgba(255,255,255,.045)!important;border-bottom:1px solid rgba(255,255,255,.08)!important}.gpf-legal-notice p{margin:0!important;color:rgba(255,255,255,.76)!important;font-size:.78rem!important;line-height:1.55!important}
    .gpf-legal-content{position:relative;z-index:2;display:grid!important;grid-template-columns:1.55fr 1.1fr 1.25fr!important;gap:42px!important;align-items:start!important;padding:38px 0 34px!important}.gpf-legal-column h2{margin:0 0 14px!important;color:#fff!important;font-size:.78rem!important;line-height:1.2!important;text-transform:uppercase!important;letter-spacing:.12em!important;font-weight:900!important}.gpf-legal-column h2:after{content:"";display:block;width:32px;height:2px;margin-top:10px;background:var(--turquesa)}.gpf-legal-column p,.gpf-legal-column a{font-size:.83rem!important;line-height:1.46!important;color:rgba(255,255,255,.76)!important}.gpf-legal-column p{margin:0 0 12px!important}.gpf-legal-brand-name{display:block!important;margin:0 0 10px!important;color:#fff!important;font-size:1rem!important;font-weight:900!important}.gpf-legal-links{display:flex!important;flex-wrap:wrap!important;gap:10px 16px!important;margin-top:8px!important}.gpf-legal-links a{font-weight:750!important}.gpf-footer-bottom{position:relative;z-index:2;border-top:1px solid rgba(255,255,255,.1)!important;padding:16px 0 24px!important}.gpf-footer-bottom p{margin:0!important;color:rgba(255,255,255,.52)!important;font-size:.76rem!important}
    @media(max-width:1040px){.gpf-legal-content{grid-template-columns:1fr 1fr!important}.gpf-legal-brand{grid-column:1/-1!important}}
    @media(max-width:640px){footer.gpf-legal-footer:before{width:36%}.gpf-legal-content{grid-template-columns:1fr!important;gap:24px!important;padding:32px 0!important}.gpf-legal-links{display:grid!important;gap:8px!important}.gpf-legal-brand{grid-column:auto!important}}
  `;
  document.head.appendChild(style);
}

const footer = document.querySelector('footer') || document.body.appendChild(document.createElement('footer'));
footer.className = 'gpf-legal-footer';
footer.setAttribute('aria-label', 'Informaci&oacute;n legal y atenci&oacute;n a usuarios');
footer.innerHTML = `
  <div class="gpf-legal-notice"><div class="container"><p>Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R., para su constituci&oacute;n y operaci&oacute;n con tal car&aacute;cter no requiere autorizaci&oacute;n de la Secretar&iacute;a de Hacienda y Cr&eacute;dito P&uacute;blico, y est&aacute; sujeta a la supervisi&oacute;n de la Comisi&oacute;n Nacional Bancaria y de Valores &uacute;nicamente para efectos de lo dispuesto por el art&iacute;culo 56 de la Ley General de Organizaciones y Actividades Auxiliares del Cr&eacute;dito.</p></div></div>
  <div class="container gpf-legal-content">
    <div class="gpf-legal-column gpf-legal-brand"><strong class="gpf-legal-brand-name">Grupo Principia Futuro</strong><p>Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R.</p><p>Amores 28, Col. Del Valle, C.P. 03103, Ciudad de M&eacute;xico.</p><div class="gpf-legal-links"><a href="/aviso-de-privacidad/">Aviso de Privacidad</a><a href="/une/">UNE</a><a href="/buro-de-entidades-financieras/">Bur&oacute; de Entidades Financieras</a><a href="/informacion-legal/">Informaci&oacute;n legal</a></div></div>
    <div class="gpf-legal-column"><h2>Atenci&oacute;n a usuarios</h2><p><strong>UNE</strong><br>Tel. <a href="tel:+52555876399">(55) 5876-399</a><br><a href="mailto:une@principiafuturo.com.mx">une@principiafuturo.com.mx</a></p></div>
    <div class="gpf-legal-column"><h2>Contacto</h2><p><strong>Atenci&oacute;n a clientes</strong><br>Tel. <a href="tel:+52558175693">(55) 8175-693</a><br><a href="mailto:atencionclientes@principiafuturo.com.mx">atencionclientes@principiafuturo.com.mx</a></p><p><a href="https://www.condusef.gob.mx/" target="_blank" rel="noopener noreferrer">CONDUSEF</a></p></div>
  </div>
  <div class="container gpf-footer-bottom"><p>La contrataci&oacute;n de productos financieros est&aacute; sujeta a requisitos, validaci&oacute;n de informaci&oacute;n, capacidad de pago, convenio aplicable y condiciones vigentes.</p></div>
`;

document.querySelectorAll('a[aria-label="Aviso de privacidad"], a[href="#"]').forEach((link) => {
  const text = (link.textContent || '').trim().toLowerCase();
  if (text.includes('aviso de privacidad')) link.href = '/aviso-de-privacidad/';
});

document.querySelectorAll('a[href="/fondeadores/"]').forEach((link) => {
  if (link.textContent.trim() === 'Fondeadores') {
    link.textContent = 'Aliados financieros';
  }
});

if (window.location.pathname.replace(/\/$/, '') === '/convenios') {
  const cleanup = document.createElement('style');
  cleanup.textContent = '.convenio-map{display:none!important}';
  document.head.appendChild(cleanup);
}

if (window.location.pathname.replace(/\/$/, '') === '/contacto') {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', 'Contacta a Grupo Principia Futuro para información sobre crédito de nómina, convenios institucionales, alianzas financieras o colaboración con GPF.');

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', 'Canaliza tu solicitud con GPF: orientación sobre crédito de nómina, convenios, alianzas financieras o colaboración institucional.');

  const lead = document.querySelector('.page-hero .lead');
  if (lead) lead.textContent = 'Utiliza esta página para solicitar información general sobre crédito de nómina, convenios institucionales, alianzas financieras o colaboración con GPF.';

  const fundingOption = document.querySelector('#interes option[value="Fondeo"]');
  if (fundingOption) {
    fundingOption.value = 'Alianza financiera';
    fundingOption.textContent = 'Alianza financiera';
  }

  document.querySelectorAll('.contact-side li').forEach((item) => {
    if (item.textContent.trim().startsWith('Fondeo:')) {
      item.textContent = 'Alianzas financieras: instituciones o aliados interesados en explorar una posible colaboración financiera con GPF.';
    }
  });
}