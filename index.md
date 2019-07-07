---
title: Home
layout: default
---

<div class="layout">

  <h1 class="huge dark"><span class="pop">Hello,</span> I am Tareq.</h1>

  <h3 class="huge title dark slideInFromLeft">I am a Full-Stack Developer, UI-Designer and a Biomechatronics Engineer. I am currently a student at MIT, majoring in Electrical Engineering, Computer Science and Mechanical Engineering with a concentration in Biomechanics and Biomedical Devices.</h3>

  <div class="right_align">
    <a target="\_blank" href="/uploads/resume.pdf" class="tight"><span class="highlight_on_hover white"><img src="/resources/images/file.svg"> Download my resume</span></a>
  </div>

</div>

<img data-src="/resources/images/portrait.jpg" class="portrait lazy" alt="Picture of Tareq El Dandachi" style="display: none;">

<noscript>
  <img src="/resources/images/portrait.jpg" class="portrait lazy" alt="Picture of Tareq El Dandachi">
</noscript>

<div class="layout">

  <h2 class="pretitle">About</h2>
  <h2 class="huge title">
    Designer, programmer and a tinkerer.
  </h2>

  <div class="separator"></div>

  <h3 class="pretitle">Life At The Institute</h3>
  <h3 class="huge photo_paragraph">
    I am a high-spirited, curious sophomore at MIT, which attracts me to not only participate in, but also organise lots of hackathons. My passion for tinkering around always leads me to foolishly try unexplored challenging ideas. It also makes me a huge proponent of using interdisciplinary approaches to solve problems, thereby my choice of majors. The idea of integrating different fields of study appeals to my curiosity and drives me to think out of the 📦.
  </h3>

  {%- include picture_lazy.html img="dome" alt="MIT Dome as seen from Killian Court." -%}

  <div class="separator"></div>

  <h2 class="pretitle">Awards</h2>

  <ul>

    <li><h3>Physics Innovation at American University of Sharjah<span class="date">2018</span></h3><h4>First Place</h4> <p>Nation-wide competition. Won for a biomedical invention. <a class="link" href="/work#aus">More Details Here</a></p></li>

    <li><h3>Program Your Idea<span class="date">2018</span></h3><h4>First Place</h4> <p>Nation-wide programming competition.</p></li>

    <li><h3>Math at American University of Sharjah<span class="date">2018</span></h3><h4>First Place</h4> <p>Nation-wide math olympiad.</p></li>

    <li><h3>Abu Dhabi Awards<span class="date">2018</span></h3><h4>Finalist</h4> <p>Nominated for the effects of my work (in biotechnology, artificial intelligence and robotics) on the UAE community.</p></li>

    <li><h3>World Robotics Olympiad<span class="date">2016</span></h3><h4>First Place - U.A.E.</h4> <p>First place on the Open Category for school students, second including all age categories.</p></li>

  </ul>

  <div class="separator"></div>

  <h2 class="pretitle">My Experience</h2>

  <div class="experience_grid">

    <div class="subject ee">Electrical Engineering</div>
    <div class="subject cs">Computer Science</div>
    <div class="subject bio">Biomechanics and Biomedical Devices</div>
    <div class="subject design">Design</div>

  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload () {
    if(lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              if (img.dataset.srcset){ img.srcset = img.dataset.srcset; }
              img.classList.remove('lazy');
              img.style.display = "block";
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});
</script>
