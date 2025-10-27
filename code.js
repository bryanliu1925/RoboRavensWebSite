const headerPlaceholder = document.getElementById('header-placeholder');

headerPlaceholder.innerHTML = `
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

const footerPlaceholder = document.getElementById('footer-placeholder');

footerPlaceholder.innerHTML = `
<footer>
  <p id="a">CCA Robo Ravens</p>
  <div class="footer-content">
  <div class="footer-links">
    <a href="" class="href">Donate to the Team</a> 
    <a href="#">7159roboravens@gmail.com</a> 
  </div>
  <div class="other-footer-links">
    <a href="#">5951 Village Center Loop Rd.</a>
    <a href="#">San Diego, CA 92130</a> 
  </div>
  </div>
  <p>© 2025 by FTC Team 7159 Robo Ravens</p>
</footer>
`;

