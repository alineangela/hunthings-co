// Shared layout templates for all pages

export const HEADER_NAV_HTML = `
  <!-- NAV -->
  <header ref="{{ headerRef }}" style="position: sticky; top: 0; z-index: 50; background: #F9F9F7F0; backdrop-filter: blur(10px); border-bottom: 1px solid oklch(88% 0.01 70);">
    <div style="max-width: 1240px; margin: 0 auto; padding: 20px 32px; display: flex; align-items: center; justify-content: center; gap: 56px; position: relative;">
      <a href="Home.dc.html" style="position: absolute; left: 32px; display: block; height: 24px; width: 200px; overflow: hidden;"><img src="assets/logo-novo.webp" alt="hunthings.co" style="height: 156px; width: 156px; display: block; position: relative; top: -66px; left: 4px;" /></a>
      <button onClick="{{ toggleExplore }}" style="font-size: 15px; font-weight: 600; cursor: pointer; padding: 8px 0; background: none; border: none; color: {{ exploreLabelColor }}; font-family: 'Inter', sans-serif;">Explore</button>
      <button onClick="{{ toggleProducts }}" style="font-size: 15px; font-weight: 600; cursor: pointer; padding: 8px 0; background: none; border: none; color: {{ productsLabelColor }}; font-family: 'Inter', sans-serif;">Products</button>
      <button onClick="{{ toggleTools }}" style="font-size: 15px; font-weight: 600; cursor: pointer; padding: 8px 0; background: none; border: none; color: {{ toolsLabelColor }}; font-family: 'Inter', sans-serif;">Tools</button>
    </div>
    <div style="display: {{ megaDisplay }}; border-top: 1px solid oklch(88% 0.01 70); background: white;">
      <div style="max-width: 1240px; margin: 0 auto; padding: 36px 32px 44px;">
        <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 40px;">
          <div>
            <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: {{ exploreLabelColor }}; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">What are you into?</div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 8px 20px;">
              <a href="Base de categoria principal do site..dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Style</a>
              <a href="Base de Categoria - Beauty.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Beauty</a>
              <a href="Base de Categoria - Home.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Home</a>
              <a href="Base de Categoria - Lifestyle.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Lifestyle</a>
              <a href="Base de Categoria - Tech.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Tech</a>
              <a href="Base de Categoria - Health.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Health</a>
              <a href="Base de Categoria - Hobbies.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Hobbies</a>
              <a href="Base de Categoria - Aesthetics.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Aesthetics</a>
            </div>
          </div>
          <div style="width: 1px; background: oklch(88% 0.01 70); align-self: stretch;"></div>
          <div>
            <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: {{ productsLabelColor }}; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Produtos</div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <a href="Base de Produtos - Bestsellers.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Bestsellers</a>
              <a href="Base de Produtos - Novo.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Novo</a>
              <a href="Base de Produtos - Editors Pick.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Editor's Pick</a>
              <a href="Base de Produtos - Tendencia.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Tendência</a>
              <a href="Base de Produtos - Essencial.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Essencial</a>
            </div>
          </div>
          <div style="width: 1px; background: oklch(88% 0.01 70); align-self: stretch;"></div>
          <div>
            <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: {{ toolsLabelColor }}; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Routine tools</div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
              <a href="Tools.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Patient Manager</a>
              <a href="Tools.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Life Planner</a>
              <a href="Tools.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Skincare Organizer</a>
              <a href="Tools.dc.html" style="text-decoration: none; color: oklch(18% 0.01 60); font-size: 16px; padding: 8px 0; font-weight: 500; transition: color .15s ease, text-decoration-color .15s ease; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 4px;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Content Hub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
`;

export const FOOTER_HTML = `
  <!-- FOOTER -->
  <footer style="border-top: 1px solid oklch(88% 0.01 70); padding: 56px 32px 32px;">
    <div style="max-width: 1240px; margin: 0 auto;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 32px; margin-bottom: 40px;">
        <div>
          <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: oklch(46% 0.01 60); margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Explore</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="Base de categoria principal do site..dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Style</a>
            <a href="Base de Categoria - Beauty.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Beauty</a>
            <a href="Base de Categoria - Home.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Home</a>
            <a href="Base de Categoria - Lifestyle.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Lifestyle</a>
            <a href="Base de Categoria - Tech.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Tech</a>
            <a href="Base de Categoria - Health.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Health</a>
            <a href="Base de Categoria - Hobbies.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Hobbies</a>
            <a href="Base de Categoria - Aesthetics.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Aesthetics</a>
          </div>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: oklch(46% 0.01 60); margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Tools</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="Tools.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Patient Manager</a>
            <a href="Tools.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Life Planner</a>
            <a href="Tools.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Skincare Organizer</a>
            <a href="Tools.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Content Hub</a>
          </div>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: oklch(46% 0.01 60); margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Products</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="Base de Produtos - Bestsellers.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Bestsellers</a>
            <a href="Base de Produtos - Novo.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Novo</a>
            <a href="Base de Produtos - Editors Pick.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Editor's Pick</a>
            <a href="Base de Produtos - Tendencia.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Tendência</a>
            <a href="Base de Produtos - Essencial.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Essencial</a>
          </div>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: oklch(46% 0.01 60); margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Site</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="Sobre.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Sobre</a>
            <a href="Contato.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Contato</a>
            <a href="Busca.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Buscar</a>
          </div>
        </div>
        <div>
          <div style="font-size: 12px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.05em; color: oklch(46% 0.01 60); margin-bottom: 14px; padding-bottom: 12px; border-bottom: 1px solid oklch(90% 0.008 70);">Legal</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <a href="Politica de Privacidade.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Política de Privacidade</a>
            <a href="Termos de Uso.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Termos de Uso</a>
            <a href="Disclosure de Afiliado.dc.html" style="color: oklch(18% 0.01 60); font-size: 14px; text-decoration: underline; text-decoration-color: transparent; text-underline-offset: 3px; transition: color .15s ease, text-decoration-color .15s ease;" style-hover="color: oklch(68% 0.012 60); text-decoration-color: oklch(68% 0.012 60);">Disclosure de Afiliado</a>
          </div>
        </div>
      </div>
      <div style="border-top: 1px solid oklch(88% 0.01 70); padding-top: 24px; display: flex; align-items: center; gap: 14px;"><img src="assets/logo-completo.webp" alt="hunthings" style="height: 56px; width: 56px; display: block;" /><span style="font-size: 13px; color: oklch(46% 0.01 60);">© 2025 Hunthings.Co. Todos os direitos reservados.</span></div>
    </div>
  </footer>
`;

export const NAV_LOGIC = `
  toggleMenu(name) {
    this.setState((s) => ({ menuOpen: s.activeMenu === name ? !s.menuOpen : true, activeMenu: name }));
  }
`;
