const legalFooterStyleId = 'gpf-legal-footer-styles';

if (!document.getElementById(legalFooterStyleId)) {
  const style = document.createElement('style');
  style.id = legalFooterStyleId;
  style.textContent = `
    footer.gpf-legal-footer{position:relative;margin:0!important;padding:0!important;background:radial-gradient(circle at 90% 10%,rgba(14,140,165,.16),transparent 28%),linear-gradient(135deg,#142544 0%,#101f3a 100%)!important;color:#ffffff!important;border-top:1px solid rgba(14,140,165,.22)!important;overflow:hidden;line-height:1.45!important}
    footer.gpf-legal-footer:before{content:"";position:absolute;top:0;left:0;width:22%;height:6px;background:var(--turquesa)}
    footer.gpf-legal-footer:after{content:"";position:absolute;right:-120px;bottom:-160px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(14,140,165,.13),transparent 62%);pointer-events:none}
    .gpf-legal-footer *{box-sizing:border-box}.gpf-legal-footer a{color:inherit!important;text-decoration:none!important}.gpf-legal-footer a:hover{color:#d7f7fb!important;text-decoration:none!important}.gpf-legal-footer strong{color:#ffffff!important;font-weight:900!important}
    .gpf-legal-notice{position:relative;z-index:2;display:block!important;margin:0!important;background:rgba(255,255,255,.045)!important;border-bottom:1px solid rgba(255,255,255,.08)!important;padding:20px 0!important;color:rgba(255,255,255,.78)!important;font-size:.8rem!important;line-height:1.55!important}.gpf-legal-notice p{margin:0!important;max-width:1180px!important;color:rgba(255,255,255,.78)!important}
    .gpf-legal-content{position:relative;z-index:2;display:grid!important;grid-template-columns:.78fr 1.15fr 1.45fr 1.62fr!important;gap:34px!important;align-items:start!important;margin:0 auto!important;padding:40px 0!important;background:transparent!important;color:#ffffff!important}
    .gpf-legal-column{min-width:0!important}.gpf-legal-column h2{margin:0 0 14px!important;color:#ffffff!important;font-size:.78rem!important;line-height:1.2!important;text-transform:uppercase!important;letter-spacing:.12em!important;font-weight:900!important}.gpf-legal-column h2:after{content:"";display:block;width:32px;height:2px;margin-top:10px;background:var(--turquesa);opacity:.85}.gpf-legal-column p,.gpf-legal-column li,.gpf-legal-column a{font-size:.83rem!important;line-height:1.46!important;color:rgba(255,255,255,.76)!important}.gpf-legal-column p{margin:0 0 12px!important}.gpf-legal-column ul{list-style:none!important;margin:0!important;padding:0!important;display:grid!important;gap:9px!important}.gpf-legal-column li{margin:0!important;padding:0!important}
    .gpf-legal-badges{display:flex!important;flex-direction:column!important;gap:12px!important;align-items:flex-start!important}.gpf-regulatory-badge{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-width:132px!important;min-height:52px!important;padding:10px 14px!important;border-radius:16px!important;background:rgba(255,255,255,.06)!important;border:1px solid rgba(255,255,255,.14)!important;box-shadow:none!important;font-weight:900!important;line-height:1.05!important;text-align:center!important;color:rgba(255,255,255,.82)!important;transition:transform .22s var(--ease),background .22s var(--ease),border-color .22s var(--ease),color .22s var(--ease)!important}.gpf-regulatory-badge:hover{transform:translateY(-2px)!important;background:rgba(14,140,165,.18)!important;border-color:rgba(14,140,165,.42)!important;color:#ffffff!important}.gpf-regulatory-badge.buro{font-size:.84rem!important}.gpf-regulatory-badge.condusef{color:#d7f7fb!important;font-size:1.02rem!important;letter-spacing:-.03em!important}.gpf-risk-note{border-left:3px solid var(--turquesa)!important;padding-left:16px!important;background:linear-gradient(90deg,rgba(14,140,165,.08),transparent 70%)!important}.gpf-footer-bottom{position:relative;z-index:2;display:block!important;margin:0 auto!important;border-top:1px solid rgba(255,255,255,.1)!important;padding:18px 0 26px!important;color:rgba(255,255,255,.55)!important;font-size:.76rem!important}.gpf-footer-bottom p{margin:0!important;color:rgba(255,255,255,.55)!important;font-size:.76rem!important;line-height:1.45!important}
    @media(max-width:1040px){.gpf-legal-content{grid-template-columns:1fr 1fr!important}.gpf-legal-badges{flex-direction:row!important;flex-wrap:wrap!important}}
    @media(max-width:640px){footer.gpf-legal-footer:before{width:36%}.gpf-legal-content{grid-template-columns:1fr!important;gap:24px!important;padding:32px 0!important}.gpf-legal-notice{font-size:.78rem!important;padding:18px 0!important}.gpf-regulatory-badge{min-width:120px!important}.gpf-risk-note{padding-left:12px!important}}
  `;
  document.head.appendChild(style);
}

const footer = document.querySelector('footer') || document.body.appendChild(document.createElement('footer'));
footer.className = 'gpf-legal-footer';
footer.setAttribute('aria-label', 'Información legal, transparencia y atención a usuarios');
footer.innerHTML = `
  <section class="gpf-legal-notice">
    <div class="container">
      <p>Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R., para su constitución y operación con tal carácter no requiere autorización de la Secretaría de Hacienda y Crédito Público, y está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores únicamente para efectos de lo dispuesto por el artículo 56 de la Ley General de Organizaciones y Actividades Auxiliares del Crédito.</p>
    </div>
  </section>
  <div class="container gpf-legal-content">
    <div class="gpf-legal-column gpf-legal-badges" aria-label="Referencias regulatorias">
      <a class="gpf-regulatory-badge buro" href="/buro-de-entidades-financieras/">Buró de<br>Entidades Financieras</a>
      <a class="gpf-regulatory-badge condusef" href="https://www.condusef.gob.mx/" target="_blank" rel="noopener noreferrer">CONDUSEF</a>
    </div>
    <div class="gpf-legal-column">
      <h2>Información legal</h2>
      <ul>
        <li><a href="/buro-de-entidades-financieras/">Buró de Entidades Financieras</a></li>
        <li><a href="/une/">Unidad Especializada de Atención a Usuarios (UNE)</a></li>
        <li><a href="/aviso-de-privacidad/">Aviso de Privacidad</a></li>
        <li><a href="https://webapps.condusef.gob.mx/SIPRES/jsp/pub/index.jsp" target="_blank" rel="noopener noreferrer">Consulta en SIPRES</a></li>
        <li><a href="https://registros.condusef.gob.mx/reca/reca.php" target="_blank" rel="noopener noreferrer">Consulta de contratos en RECA</a></li>
      </ul>
    </div>
    <div class="gpf-legal-column">
      <h2>Contacto</h2>
      <p><strong>Unidad Especializada de Atención a Usuarios (UNE)</strong><br>Tel. <a href="tel:+52555876399">(55) 5876-399</a><br><a href="mailto:une@principiafuturo.com.mx">une@principiafuturo.com.mx</a></p>
      <p><strong>Aclaraciones</strong><br>Tel. <a href="tel:+52558175693">(55) 8175-693</a><br><a href="mailto:aclaraciones@principiafuturo.com.mx">aclaraciones@principiafuturo.com.mx</a></p>
      <p><strong>Atención a clientes</strong><br>Tel. <a href="tel:+52558175693">(55) 8175-693</a><br><a href="mailto:atencionclientes@principiafuturo.com.mx">atencionclientes@principiafuturo.com.mx</a><br><a href="mailto:contacto@principiafuturo.com.mx">contacto@principiafuturo.com.mx</a></p>
    </div>
    <div class="gpf-legal-column gpf-risk-note">
      <h2>Información para usuarios</h2>
      <p>Incumplir tus obligaciones puede generar intereses moratorios y afectar tu historial crediticio.</p>
      <p>Contratar créditos por arriba de tu capacidad de pago puede afectar tus finanzas personales.</p>
      <p>La contratación de crédito está sujeta a requisitos, validación de información, capacidad de pago, convenio aplicable y condiciones vigentes.</p>
      <p>Las comisiones, costos y condiciones aplicables serán informadas previamente y conforme al contrato correspondiente.</p>
    </div>
  </div>
  <div class="container gpf-footer-bottom">
    <p>Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R. · Amores 28, Col. Del Valle, C.P. 03103, Ciudad de México.</p>
  </div>
`;

document.querySelectorAll('a[aria-label="Aviso de privacidad"], a[href="#"]').forEach((link) => {
  const text = (link.textContent || '').trim().toLowerCase();
  if (text.includes('aviso de privacidad')) link.href = '/aviso-de-privacidad/';
});
