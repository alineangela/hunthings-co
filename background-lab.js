(() => {
  let initialized = false;
  let renderObserver;

  function init() {
    if (initialized) return;
    const section = document.querySelector('[data-amber-feature]');
    if (!section) return;
    initialized = true;
    renderObserver?.disconnect();

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const parallax = section.querySelector('.amber-feature__parallax');
    const turbulence = section.querySelector('#amber-feature-noise');
    const displacement = section.querySelector('#amber-feature-displacement');
    let distortionFrame = 0;
    let parallaxFrame = 0;
    let phase = 0;
    let targetX = 0;
    let targetY = 0;

    section.classList.add('amber-feature--enhanced');

    function animateDistortion() {
    if (reducedMotion.matches || section.dataset.active !== 'true' || !turbulence) {
      distortionFrame = 0;
      return;
    }
    phase += .0025;
    const x = .008 + Math.sin(phase) * .0016;
    const y = .015 + Math.cos(phase * .78) * .002;
    turbulence.setAttribute('baseFrequency', `${x.toFixed(5)} ${y.toFixed(5)}`);
    distortionFrame = requestAnimationFrame(animateDistortion);
    }

    function syncAnimationState(active) {
    section.dataset.active = String(active);
    if (displacement) displacement.setAttribute('scale', window.innerWidth <= 760 ? '5' : '10');
    if (active && !reducedMotion.matches && !distortionFrame) distortionFrame = requestAnimationFrame(animateDistortion);
    if ((!active || reducedMotion.matches) && distortionFrame) {
      cancelAnimationFrame(distortionFrame);
      distortionFrame = 0;
    }
    }

    const observer = new IntersectionObserver(([entry]) => syncAnimationState(entry.isIntersecting), {
      rootMargin: '120px 0px',
      threshold: .08,
    });
    observer.observe(section);

    function renderParallax() {
    parallaxFrame = 0;
    if (parallax) parallax.style.transform = `translate3d(${targetX * 24}px, ${targetY * 16}px, 0)`;
    }

    section.addEventListener('pointermove', (event) => {
    if (!finePointer.matches || reducedMotion.matches || !parallax) return;
    const rect = section.getBoundingClientRect();
    targetX = (event.clientX - rect.left) / rect.width - .5;
    targetY = (event.clientY - rect.top) / rect.height - .5;
    if (!parallaxFrame) parallaxFrame = requestAnimationFrame(renderParallax);
    }, { passive: true });

    section.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!parallaxFrame) parallaxFrame = requestAnimationFrame(renderParallax);
    });

    reducedMotion.addEventListener('change', () => syncAnimationState(section.dataset.active === 'true'));
    window.addEventListener('resize', () => {
      if (displacement) displacement.setAttribute('scale', window.innerWidth <= 760 ? '5' : '10');
    }, { passive: true });
  }

  renderObserver = new MutationObserver(init);
  renderObserver.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', init, { once: true });
  init();
})();
