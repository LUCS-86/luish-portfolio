/* ============================================
   Luish portfolio — interactions
   ============================================ */

const ICONS = [
  'burpsuite','hashcat','kali','nmap','tryhackme',
  'hackthebox','hydra','metasploit','sqlmap','wireshark'
];

/* ---------- Year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Floating icons generator ---------- */
const floatLayer = document.getElementById('floatingIcons');
const iconNodes = [];

function spawnIcons() {
  const count = Math.max(14, Math.min(22, Math.floor(window.innerWidth / 90)));
  floatLayer.innerHTML = '';
  iconNodes.length = 0;

  for (let i = 0; i < count; i++) {
    const name = ICONS[i % ICONS.length];
    const img = document.createElement('img');
    img.src = `/assets/icons/${name}.svg`;
    img.alt = '';
    img.loading = 'lazy';

    const size = 50 + Math.random() * 70;
    const x = Math.random() * 100;
    const y = Math.random() * 200; // spread over scroll height
    const dur = 14 + Math.random() * 22;
    const delay = -Math.random() * dur;
    const dir = Math.random() > 0.5 ? 1 : -1;

    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.left = `${x}%`;
    img.style.top = `${y}%`;
    img.style.animationDuration = `${dur}s`;
    img.style.animationDelay = `${delay}s`;
    img.style.animationDirection = dir > 0 ? 'normal' : 'reverse';

    floatLayer.appendChild(img);
    iconNodes.push({
      el: img,
      speed: 0.05 + Math.random() * 0.35, // parallax speed
      mx: (Math.random() - 0.5) * 30,     // mouse intensity x
      my: (Math.random() - 0.5) * 30,
      baseY: y
    });
  }
}
spawnIcons();
window.addEventListener('resize', () => {
  clearTimeout(window.__r);
  window.__r = setTimeout(spawnIcons, 200);
});

/* ---------- Scroll + mouse parallax (rAF, fps-friendly) ---------- */
let scrollY = window.scrollY;
let mouseX = 0, mouseY = 0;
let targetMX = 0, targetMY = 0;

window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });
window.addEventListener('mousemove', (e) => {
  targetMX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetMY = (e.clientY / window.innerHeight - 0.5) * 2;
}, { passive: true });

function tick() {
  // ease mouse
  mouseX += (targetMX - mouseX) * 0.06;
  mouseY += (targetMY - mouseY) * 0.06;

  for (const n of iconNodes) {
    const ty = -scrollY * n.speed;
    const tx = mouseX * n.mx;
    const my = mouseY * n.my;
    n.el.style.transform = `translate3d(${tx}px, ${ty + my}px, 0)`;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* ---------- Navbar shrink + active link ---------- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('section[id]')];

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  for (const s of sections) {
    if (s.offsetTop <= y) current = s.id;
  }
  navLinks.forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ---------- Mobile menu ---------- */
const toggle = document.getElementById('menuToggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => links.classList.toggle('open'));
navLinks.forEach(l => l.addEventListener('click', () => links.classList.remove('open')));

/* ---------- Typing animation ---------- */
const phrases = [
  'Cybersecurity Enthusiast',
  'Penetration Tester',
  'CTF Player',
  'Security Researcher'
];
const typingEl = document.getElementById('typing');
let pi = 0, ci = 0, deleting = false;

function type() {
  const word = phrases[pi];
  typingEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) {
    ci++; setTimeout(type, 80);
  } else if (deleting && ci > 0) {
    ci--; setTimeout(type, 40);
  } else {
    if (!deleting) { deleting = true; setTimeout(type, 1400); }
    else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 250); }
  }
}
type();

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
