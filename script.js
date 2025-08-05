// Simple JS for smooth scroll effect
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
