const legalFooterStyleId = 'gpf-legal-footer-styles';

if (!document.getElementById(legalFooterStyleId)) {
  const style = document.createElement('style');
  style.id = legalFooterStyleId;
  style.textContent = `
    .gpf-legal-footer{background:#f7f9fb;color:var(--azul);border-top:1px solid rgba(20,37,68,.1)}
    .gpf-legal-footer a{color:inherit;text-decoration:none}.gpf-legal-footer a:hover{text-decoration:underline}
    .gpf-legal-notice{background:#d8edf7;padding:22px 0;font-size:.83rem;line-height:1.55}.gpf-legal-notice p{margin:0}
    .gpf-legal-content{display:grid;grid-template-columns:.85fr 1.15fr 1.45fr 1.55fr;gap:30px;padding:34px 0}.gpf-legal-column h2{margin:0 0 12px;color:var(--azul);font-size:.84rem;text-transform:uppercase;letter-spacing:.04em}.gpf-legal-column p,.gpf-legal-column li,.gpf-legal-column a{font-size:.83rem;line-height:1.45}.gpf-legal-column p{margin:0 0 12px}.gpf-legal-column ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}.gpf-legal-badges{display:flex;flex-direction:column;gap:14px;align-items:flex-start}.gpf-regulatory-badge{display:inline-flex;align-items:center;justify-content:center;min-width:132px;min-height:52px;padding:10px 14px;border-radius:14px;background:#fff;border:1px solid rgba(20,37,68,.12);box-shadow:0 12px 26px rgba(20,37,68,.06);font-weight:900;line-height:1.05;text-align:center}.gpf-regulatory-badge.buro{font-size:.86rem}.gpf-regulatory-badge.condusef{color:#2f7d32;font-size:1.05rem;letter-spacing:-.03em}.gpf-risk-note{border-left:4px solid var(--turquesa);padding-left:12px}.gpf-footer-bottom{border-top:1px solid rgba(20,37,68,.1);padding:16px 0 24px;color:#607078;font-size:.78rem}.gpf-footer-bottom p{margin:0}
    @media(max-width:980px){.gpf-legal-content{grid-template-columns:1fr 1fr}.gpf-legal-badges{flex-direction:row;flex-wrap:wrap}}
    @media(max-width:640px){.gpf-legal-content{grid-template-columns:1fr}.gpf-legal-notice{font-size:.8rem}.gpf-regulatory-badge{min-width:120px}}
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
  <section class="container gpf-legal-content">
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
  </section>
  <div class="container gpf-footer-bottom">
    <p>Grupo Principia Futuro, S.A.P.I. de C.V., SOFOM, E.N.R. · Amores 28, Col. Del Valle, C.P. 03103, Ciudad de México.</p>
  </div>
`;

document.querySelectorAll('a[aria-label="Aviso de privacidad"], a[href="#"]').forEach((link) => {
  const text = (link.textContent || '').trim().toLowerCase();
  if (text.includes('aviso de privacidad')) link.href = '/aviso-de-privacidad/';
});
