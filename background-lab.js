(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const attached = new WeakSet();
  let distortionFrame = null;
  let distortionPhase = 0;
  let liquidVisible = false;

  function updateDistortion() {
    if (reduceMotion.matches || !liquidVisible) {
      distortionFrame = null;
      return;
    }

    const turbulence = document.querySelector('#amber-liquid-noise');
    if (!turbulence) {
      distortionFrame = null;
      return;
    }

    distortionPhase += .002;
    const x = .008 + Math.sin(distortionPhase) * .0012;
    const y = .015 + Math.cos(distortionPhase * .8) * .0016;
    turbulence.setAttribute('baseFrequency', `${x.toFixed(5)} ${y.toFixed(5)}`);
    distortionFrame = requestAnimationFrame(updateDistortion);
  }

  function setLiquidAnimation(visible) {
    liquidVisible = visible;
    if (visible && !reduceMotion.matches && !distortionFrame) {
      distortionFrame = requestAnimationFrame(updateDistortion);
    }
    if ((!visible || reduceMotion.matches) && distortionFrame) {
      cancelAnimationFrame(distortionFrame);
      distortionFrame = null;
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const movingLayers = entry.target.querySelectorAll('.amber-test__background, .amber-test__light');
      movingLayers.forEach((layer) => {
        layer.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      });
      if (entry.target.classList.contains('amber-test--liquid')) {
        setLiquidAnimation(entry.isIntersecting);
      }
    });
  }, { threshold: .08 });

  function attach(section) {
    if (attached.has(section)) return;
    attached.add(section);
    observer.observe(section);

    const parallax = section.querySelector('.amber-test__parallax');
    if (!parallax || !finePointer.matches || reduceMotion.matches) return;

    section.addEventListener('pointermove', (event) => {
      const rect = section.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      parallax.style.transform = `translate3d(${x * 20}px, ${y * 14}px, 0)`;
    });

    section.addEventListener('pointerleave', () => {
      parallax.style.transform = 'translate3d(0, 0, 0)';
    });
  }

  function init() {
    document.querySelectorAll('[data-amber-test]').forEach(attach);
  }

  const mutationObserver = new MutationObserver(init);
  mutationObserver.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', init);
  init();

  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) setLiquidAnimation(false);
  });
}());
