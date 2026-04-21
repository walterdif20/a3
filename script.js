const yearNode = document.getElementById('year');
if (yearNode) yearNode.textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const stickyCta = document.getElementById('mobileStickyCta');
const contactSection = document.getElementById('contacto');

if (stickyCta && contactSection && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      stickyCta.classList.toggle('is-hidden', entry.isIntersecting);
    },
    { threshold: 0.22 }
  );
  observer.observe(contactSection);
}
