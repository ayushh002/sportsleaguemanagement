document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-item');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      });
    });
  });