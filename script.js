document.addEventListener('DOMContentLoaded', () => {
  
  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Reveal elements on scroll
  const reveals = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    reveals.forEach(reveal => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger once on load

  // Form Submission
  const form = document.getElementById('donation-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Collect form data (for demo purposes)
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log('Form submitted:', data);
      
      // Show success message, hide form
      form.style.display = 'none';
      successMessage.style.display = 'block';
      
      // Optional: Add a smooth animation to the success message
      successMessage.animate([
        { opacity: 0, transform: 'scale(0.9)' },
        { opacity: 1, transform: 'scale(1)' }
      ], {
        duration: 400,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        fill: 'forwards'
      });
    });
  }

  // Add subtle parallax effect to the glow orb
  const glow = document.querySelector('.bg-glow');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    if(glow) {
      glow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    }
  });
});
