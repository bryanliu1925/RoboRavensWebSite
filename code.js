const headerplaceholder = document.getElementById('header-placeholder');

headerplaceholder.innerHTML = `
<header>
  <nav class="topnav">
    <ul>
  <li><a href="index.html"><img class="logo" src="images/download.png" alt="Logo"></a></li>
      <li class="dropdown">
        <a>Departments</a>
        <ul class="dropdown-menu">
            <li><a href="strategy.html">Strategy</a></li>
            <li><a href="outreach.html">Outreach</a></li>
            <li><a href="mechanical.html">Mechanical</a></li>
            <li><a href="controls.html">Controls</a></li>
        </ul>
      </li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="portfolio.html">Portfolio</a></li>
      <li><a href="blog.html">Blog</a></li>
    </ul>
  </nav>
</header>
`;

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, 
};

//ChatGPTed part for typing effect since idk how to do that but it looks cool
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      observer.unobserve(entry.target);      
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
document.addEventListener("DOMContentLoaded", () => {
  const typingElements = document.querySelectorAll(".typing-js, .typing-text");

  typingElements.forEach((el) => {
    const text = el.textContent.trim();
    el.textContent = "";
    const speed = el.dataset.speed ? parseInt(el.dataset.speed) : 10;
    let index = 0;
    let hasAnimated = false;

    function typeEffect() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            el.classList.add("typing-active");

            // Only apply fixed width for the single-line title
            if (el.classList.contains("typing-js")) {
              el.style.width = text.length + "ch";
            } else {
              el.style.width = "auto";
            }

            typeEffect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  });
});
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//End of ChatGPT part


const footerplaceholder = document.getElementById('footer-placeholder');

footerplaceholder.innerHTML = `
<footer>
  <p id="a">CCA Robo Ravens</p>
  <div class="footer-content">
  <div class="footer-links">
    <a href="mailto:7159roboravens@gmail.com" class="href">Donate to the Team</a> 
    <p>7159roboravens@gmail.com</p> 
  </div>
  <div class="other-footer-links">
    <p>5951 Village Center Loop Rd.</p>
    <p>San Diego, CA 92130</p> 
  </div>
  </div>
  <p>© 2025 by FTC Team 7159 Robo Ravens</p>
</footer>
`;

