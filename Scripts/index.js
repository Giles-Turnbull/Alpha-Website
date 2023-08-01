window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.documentElement.style.setProperty('--nav-width', '6vw');
    document.documentElement.style.setProperty('--nav-font-size', '15px');
  } else {
    document.documentElement.style.setProperty('--nav-width', '12vw');
    document.documentElement.style.setProperty('--nav-font-size', '22px');
  }
}

function checkScreenWidth() {
    if (window.innerWidth <= 767) {
      window.onscroll = null;
    } else {
      window.onscroll = function() {
        scrollFunction();
      };
    }
  }
  
  // Check screen width on page load
  checkScreenWidth();
  
  // Check screen width on window resize
  window.onresize = function() {
    checkScreenWidth();
  };