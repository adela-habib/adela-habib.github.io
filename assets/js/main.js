(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // close on click (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // active section highlight
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = navAnchors
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          navAnchors.forEach(a => a.classList.remove('active'));
          const id = `#${e.target.id}`;
          const match = navAnchors.find(a => a.getAttribute('href') === id);
          if (match) match.classList.add('active');
        }
      });
    }, { root: null, threshold: 0.4 });

    sections.forEach(s => obs.observe(s));
  }
})();
