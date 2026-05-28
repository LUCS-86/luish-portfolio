// ---------- Floating background icons ----------
const ICONS = [
  'nmap','burpsuite','metasploit','wireshark','hydra',
  'sqlmap','hashcat','kali','tryhackme','hackthebox'
];
(function spawnIcons(){
  const container = document.getElementById('bgIcons');
  if(!container) return;
  const count = window.innerWidth < 700 ? 12 : 20;
  for(let i=0;i<count;i++){
    const img = document.createElement('img');
    img.src = `assets/icons/${ICONS[i % ICONS.length]}.svg`;
    img.alt = '';
    const size = 40 + Math.random()*80;
    img.style.width = size + 'px';
    img.style.height = size + 'px';
    img.style.left = Math.random()*100 + 'vw';
    img.style.top  = Math.random()*100 + 'vh';
    img.style.animationDuration = (18 + Math.random()*22) + 's';
    img.style.animationDelay = (-Math.random()*20) + 's';
    img.style.opacity = (0.12 + Math.random()*0.12).toFixed(2);
    container.appendChild(img);
  }
})();

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ---------- Active nav highlighting (rAF, FPS-friendly) ----------
const sections = [...document.querySelectorAll('section[id]')];
const linkMap = new Map(
  [...document.querySelectorAll('.nav-links a')].map(a => [a.getAttribute('href').slice(1), a])
);
let ticking = false;
function onScroll(){
  if(ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY + 120;
    let current = sections[0]?.id;
    for(const s of sections){ if(s.offsetTop <= y) current = s.id; }
    linkMap.forEach((el, id) => el.classList.toggle('active', id === current));
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

// ---------- Typing animation ----------
const phrases = [
  'Aspiring Cybersecurity Analyst',
  'Red Team Learner',
  'CTF Player · TryHackMe + HTB',
  'Home Lab Builder'
];
const typed = document.getElementById('typed');
if(typed){
  let pi=0, ci=0, deleting=false;
  (function tick(){
    const word = phrases[pi];
    typed.textContent = word.slice(0, ci);
    if(!deleting && ci < word.length){ ci++; setTimeout(tick, 70); }
    else if(deleting && ci > 0){ ci--; setTimeout(tick, 35); }
    else{
      if(!deleting){ deleting = true; setTimeout(tick, 1400); }
      else { deleting = false; pi = (pi+1) % phrases.length; setTimeout(tick, 250); }
    }
  })();
}

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.12 });
document.querySelectorAll('.section, .tool, .proj, .cert, .exp, .stat-card, .info-card')
  .forEach(el => { el.classList.add('reveal'); io.observe(el); });

// ---------- Year ----------
document.getElementById('yr').textContent = new Date().getFullYear();
