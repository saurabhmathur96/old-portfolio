(function()  {
  var isClassSet = false;
  document.body.onscroll = function() {
    if(!isClassSet) {
      document.body.className = "nightHawk";
      isClassSet = true;
    }

  }
})();
