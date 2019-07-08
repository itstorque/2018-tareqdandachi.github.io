var lazyloadImages = document.querySelectorAll("img.lazy");
var lazyloadphoneImages = document.querySelectorAll("img.lazy.lazy-phone");
var lazyloadThrottleTimeout;

function lazyload() {
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

function lazyload_onload() {
  if(lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }

  lazyloadThrottleTimeout = setTimeout(function() {
      var scrollTop = window.pageYOffset;
      lazyloadphoneImages.forEach(function(img) {
          if(img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            if (img.dataset.srcset){ img.srcset = img.dataset.srcset; }
            img.classList.remove('lazy');
            img.style.display = "block";
          }
      });
      if(lazyloadphoneImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
  }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);

if ($(window).height() > 630 || $(window).width() > 1000) { lazyload_onload(); }
