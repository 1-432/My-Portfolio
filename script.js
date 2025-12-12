// Existing ScrollReveal & form code (if any) ...

// Hamburger menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('open');
});

// Close menu when clicking a nav link (optional but recommended)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
  });
});
