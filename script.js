document.addEventListener('DOMContentLoaded', () => {

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Reveal Animations on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.card, .hero-content, .section-title, .reveal');
  elementsToReveal.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Add staggered delay to grids
  document.querySelectorAll('.grid-2, .grid-3, .grid-4').forEach(grid => {
    const children = grid.children;
    Array.from(children).forEach((child, index) => {
      child.style.transitionDelay = `${index * 100}ms`;
      child.classList.add('reveal');
      observer.observe(child);
    });
  });

  // Mobile Menu Toggle (Simple implementation)
  // Future enhancement: Add a hamburger menu if requested, currently focusing on desktop experience as primary.

});
