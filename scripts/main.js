


// for color change animation on scroll.
(function()  {
  var isClassSet = false;
  window.onscroll = function() {
    if(!isClassSet) {
      document.body.className = "nightHawk";
      isClassSet = true;
    }

  }
})();
