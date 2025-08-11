(function(){
  const pageKey = document.documentElement.getAttribute('data-page') || 'home';
  const links = document.querySelectorAll('.nav-link');
  for (const a of links){
    const key = a.getAttribute('data-key');
    if (key === pageKey) a.classList.add('active');
  }

  // Help panel toggles + keyboard shortcuts
  const helpPanel = document.getElementById('helpPanel');
  const helpToggle = document.getElementById('helpToggle');
  const helpClose = document.getElementById('helpClose');

  function openHelp(){
    helpPanel.classList.add('open');
    helpToggle?.setAttribute('aria-expanded', 'true');
    helpPanel?.setAttribute('aria-hidden', 'false');
  }
  function closeHelp(){
    helpPanel.classList.remove('open');
    helpToggle?.setAttribute('aria-expanded', 'false');
    helpPanel?.setAttribute('aria-hidden', 'true');
  }

  helpToggle?.addEventListener('click', () => {
    const isOpen = helpPanel.classList.contains('open');
    isOpen ? closeHelp() : openHelp();
  });
  helpClose?.addEventListener('click', closeHelp);

  // Keyboard: ? toggles help, G then key for quick nav
  let chord = false;
  window.addEventListener('keydown', (e) => {
    if (e.key === '?'){ e.preventDefault(); (helpPanel.classList.contains('open') ? closeHelp() : openHelp()); }
    if (e.key.toLowerCase() === 'g'){ chord = true; setTimeout(() => chord=false, 800); return; }
    if (chord){
      const k = e.key.toLowerCase();
      const map = { h:'index.html', m:'modules.html', r:'research.html', a:'about.html', s:'stacks.html', c:'contact.html' };
      if (map[k]) { window.location.href = map[k]; }
    }
  }, false);
})();
