const whatsappNumber = '5548984687329';
const whatsappMessage = 'Olá! Quero conversar sobre um projeto para o meu negócio.';
const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  link.target = '_blank';
  link.rel = 'noreferrer';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelector('#lead-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const message = `Olá! Sou ${formData.get('name')} e tenho o negócio ${formData.get('business')}. Estou buscando: ${formData.get('goal')}.`;
  window.open(`${whatsappBaseUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.desktop-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  navigation.style.cssText = !isOpen
    ? 'display:flex;position:absolute;z-index:5;top:74px;left:0;right:0;margin:0;padding:18px 22px;background:#fff;border-bottom:1px solid #d8e0eb;box-shadow:0 15px 25px rgba(23,35,58,.07);gap:22px;'
    : '';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    navigation.style.cssText = '';
  });
});
