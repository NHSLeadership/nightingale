// Cookies Ribbon
(function(){

  // Check jsCookieRibbon exists before using it
  if (document.getElementById('jsCookieRibbon')) {
    var cookieRibbon = document.getElementById('jsCookieRibbon');

    // Check jsCookieBtn exists before using it
    if (document.getElementById('jsCookieBtn')) {
      var cookieBtn = document.getElementById('jsCookieBtn');

      // Don't show ribbon if cookie permission granted
      if(localStorage.getItem("cookie-enable")=="1"){
        cookieRibbon.parentNode.removeChild(cookieRibbon);
      }

      // Close cookie ribbon and store decision in local storage
      cookieBtn.addEventListener('click', function () {
        cookieRibbon.parentNode.removeChild(cookieRibbon);
        // Store cookie permission
        localStorage.setItem("cookie-enable", "1");
      });
    }
  }

}());