/* Page intro/outro micro-animations */
(function(){
  if (!window.gsap) return;

  // Intro
  gsap.from('.stage-inner', { duration:.6, y:18, opacity:0, ease:'power2.out' });
  gsap.from('.nav-link', { duration:.5, x:-12, opacity:0, stagger:.05, delay:.1, ease:'power2.out' });
  gsap.from('.brand', { duration:.5, x:-10, opacity:0, ease:'power2.out' });

  // Link transition (soft fade-out on same-site nav)
  const anchors = document.querySelectorAll('a[href$=".html"]');
  anchors.forEach(a => {
    a.addEventListener('click', (e) => {
      const url = a.getAttribute('href');
      if (!url) return;
      // Let middle/ctrl click pass through
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

      e.preventDefault();
      gsap.to('.stage-inner', { duration:.25, y:8, opacity:0.0, ease:'power1.in', onComplete:() => {
        window.location.href = url;
      }});
    });
  });
})();
