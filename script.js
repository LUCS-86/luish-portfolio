/* =========================================================
   Luish Niraula — Portfolio JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---- Loader ----
  window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('loader').classList.add('hidden'), 600);
  });

  // ---- Year ----
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- Theme toggle ----
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ---- Nav burger ----
  const burger = document.getElementById('navBurger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // ---- Nav scrolled ----
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // ---- Cursor glow ----
  const glow = document.getElementById('cursorGlow');
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

  // ---- Typing ----
  const phrases = [
    'Aspiring Cybersecurity Analyst',
    'Ethical Hacking Enthusiast',
    'Red Teaming Learner',
    'Home Lab Practitioner',
    'TryHackMe & HTB Player'
  ];
  const target = document.getElementById('typing');
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const word = phrases[pi];
    target.textContent = word.slice(0, ci);
    if (!deleting && ci < word.length) { ci++; setTimeout(tick, 80); }
    else if (deleting && ci > 0) { ci--; setTimeout(tick, 40); }
    else {
      deleting = !deleting;
      if (!deleting) pi = (pi + 1) % phrases.length;
      setTimeout(tick, deleting ? 1500 : 400);
    }
  }
  tick();

  // ---- Reveal on scroll ----
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        if (e.target.classList.contains('lang')) e.target.classList.add('in-view');
        if (e.target.dataset.count) animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal, .lang').forEach(el => io.observe(el));
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1400; const start = performance.now();
    function step(now) {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.floor(eased * target);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // ---- Build Skills ----
  const skills = [
    { name: 'Nmap', desc: 'Network discovery and security auditing tool for reconnaissance and port scanning.', icon: 'radar' },
    { name: 'Burp Suite', desc: 'Web application security testing and interception proxy tool.', icon: 'shield' },
    { name: 'Metasploit', desc: 'Framework for penetration testing and exploit development.', icon: 'crosshair' },
    { name: 'Wireshark', desc: 'Network packet analyzer for traffic inspection and troubleshooting.', icon: 'wave' },
    { name: 'Hydra', desc: 'Fast network login cracker for brute-force testing.', icon: 'key' },
    { name: 'SQLMap', desc: 'Automated SQL injection and database takeover tool.', icon: 'database' },
    { name: 'Hashcat', desc: 'Advanced password recovery and hash cracking utility.', icon: 'hash' },
    { name: 'Kali Linux', desc: 'Linux distribution focused on penetration testing and digital forensics.', icon: 'terminal' },
    { name: 'TryHackMe', desc: 'Hands-on cybersecurity learning and lab platform.', icon: 'flag' },
    { name: 'Hack The Box', desc: 'Practical penetration testing and security challenge platform.', icon: 'box' }
  ];
  const ICONS = {
    radar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l5-5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6z"/></svg>',
    crosshair: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12h3l2-6 3 12 3-9 2 6 2-3h5"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M15 7l3 3"/></svg>',
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>',
    hash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21V4M4 4h12l-2 4 2 4H4"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4M21 7v10l-9 4"/></svg>'
  };
  const skillsGrid = document.getElementById('skillsGrid');
  skills.forEach(s => {
    const el = document.createElement('div');
    el.className = 'glass-card skill reveal';
    el.innerHTML = `<div class="skill-icon">${ICONS[s.icon]}</div><h3>${s.name}</h3><p>${s.desc}</p>`;
    skillsGrid.appendChild(el);
    io.observe(el);
  });

  // ---- Concepts ----
  const concepts = ['Enumeration','Web App Pentesting','Linux Fundamentals','Network Scanning','OSINT','Privilege Escalation','Vulnerability Assessment','Basic Exploitation','OWASP Top 10','Active Directory Basics'];
  const cg = document.getElementById('conceptsGrid');
  concepts.forEach(c => {
    const el = document.createElement('span'); el.className = 'chip'; el.textContent = c; cg.appendChild(el);
  });

  // ---- Certifications ----
  const certs = [
    { name: 'Certified Online Fraud Prevention Specialist (COFPS)', issuer: 'Hack & Fix', date: 'May 2026 · ID: 1295-2712-1401-1464' },
    { name: 'Cyber Security 101 Certificate', issuer: 'TryHackMe', date: 'May 2026 · ID: THM-7TJJSJVHO4' },
    { name: 'Verify (SaaS): User Introduction', issuer: 'IBM', date: 'March 2026' },
    { name: 'Instana Intermediate', issuer: 'IBM', date: 'January 2026' },
    { name: 'Instana Sales Foundation', issuer: 'IBM', date: 'January 2026' },
    { name: 'Verify Identity Protection Technical Sales Intermediate', issuer: 'IBM', date: 'January 2026' },
    { name: 'Verify Identity Protection Sales Foundation', issuer: 'IBM', date: 'January 2026' },
    { name: 'Certified Threat Intelligence & Governance Analyst (CTIGA)', issuer: 'Red TeamLeaders', date: 'January 2026' },
    { name: 'Cybersecurity Career Starter Certification (CCSC)', issuer: 'Hack & Fix', date: 'December 2025 · ID: 8842-2270-2153-2061' },
    { name: 'Certified Phishing Prevention Specialist (CPPS)', issuer: 'Hack & Fix', date: 'December 2025 · ID: 8743-1376-3496-3622' },
    { name: 'Certified Cybersecurity Educator Professional (CCEP)', issuer: 'Red TeamLeaders', date: 'November 2025' }
  ];
  const certBadge = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6.3L12 16.8 6.5 19.5l1-6.3L3 8.9 9 8z"/></svg>';
  const cgrid = document.getElementById('certsGrid');
  certs.forEach(c => {
    const el = document.createElement('div');
    el.className = 'glass-card cert reveal';
    el.innerHTML = `<div class="cert-badge">${certBadge}</div><div><h3>${c.name}</h3><div class="cert-issuer">${c.issuer}</div><div class="cert-date">${c.date}</div></div>`;
    cgrid.appendChild(el);
    io.observe(el);
  });

  // ---- Floating brand icons (scroll-parallax) ----
  const fi = document.getElementById('floatingIcons');
  const brandIcons = [
    'assets/icons/nmap.svg',
    'assets/icons/burpsuite.svg',
    'assets/icons/metasploit.svg',
    'assets/icons/wireshark.svg',
    'assets/icons/hydra.svg',
    'assets/icons/sqlmap.svg',
    'assets/icons/hashcat.svg',
    'assets/icons/kali.svg',
    'assets/icons/tryhackme.svg',
    'assets/icons/hackthebox.svg'
  ];
  const floatNodes = [];
  // Spread across the entire document height so they reveal as the user scrolls
  const TOTAL_BANDS = 18;
  for (let i = 0; i < TOTAL_BANDS; i++) {
    const d = document.createElement('div');
    d.className = 'f-ico';
    // Distribute vertically across full scrollable height (in vh units)
    const topVh = (i / TOTAL_BANDS) * 100 * (document.body.scrollHeight / window.innerHeight || 4);
    d.style.top = topVh + 'vh';
    d.style.left = (5 + Math.random() * 85) + '%';
    const size = 60 + Math.random() * 70;
    d.style.width = d.style.height = size + 'px';
    const img = document.createElement('img');
    img.src = brandIcons[i % brandIcons.length];
    img.alt = '';
    img.loading = 'lazy';
    d.appendChild(img);
    // Per-icon parallax speed (0.15 - 0.55)
    d._speed = 0.15 + Math.random() * 0.4;
    d._rot = (Math.random() - 0.5) * 0.05;
    d._baseX = 0;
    fi.appendChild(d);
    floatNodes.push(d);
  }
  // Scroll-driven movement
  function updateParallax() {
    const y = window.scrollY;
    floatNodes.forEach(n => {
      const ty = -y * n._speed;
      const rot = y * n._rot;
      n.style.transform = `translate3d(${n._baseX}px, ${ty}px, 0) rotate(${rot}deg)`;
    });
  }
  window.addEventListener('scroll', updateParallax, { passive: true });
  window.addEventListener('resize', updateParallax);
  // Recompute after layout settles (fonts, images)
  setTimeout(updateParallax, 200);
  window.addEventListener('load', updateParallax);

  // ---- Mouse parallax on avatar only (icons use scroll parallax) ----
  document.addEventListener('mousemove', e => {
    const stage = document.getElementById('avatarStage');
    if (stage) {
      const rx = (e.clientY / window.innerHeight - .5) * -8;
      const ry = (e.clientX / window.innerWidth - .5) * 8;
      stage.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
    // Subtle mouse-based horizontal nudge for floating icons
    const mx = (e.clientX / window.innerWidth - .5) * 30;
    floatNodes.forEach(n => { n._baseX = mx * n._speed; });
  });

  // ---- Particles ----
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize(); addEventListener('resize', resize);
  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + .4,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      h: Math.random() > .5 ? 270 : 190
    });
  }
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.h}, 80%, 65%, .6)`;
      ctx.fill();
    });
    // connect close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.strokeStyle = `hsla(260, 70%, 65%, ${(120 - d) / 600})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }
  drawParticles();

  // ---- Back to top ----
  document.getElementById('toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ---- Resume download (link to PDF in /assets) ----
  const resumeBtn = document.getElementById('downloadResume');
  if (resumeBtn) {
    resumeBtn.setAttribute('href', 'assets/resume.pdf');
    resumeBtn.setAttribute('download', 'Luish_Niraula_Resume.pdf');
    resumeBtn.setAttribute('target', '_blank');
    resumeBtn.setAttribute('rel', 'noopener');
  }
});
