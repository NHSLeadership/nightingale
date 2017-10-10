// Cookies Ribbon
(function(){

  var cookieRibbon = document.getElementById('jsCookieRibbon');
  var cookieBtn = document.getElementById('jsCookieBtn');

  cookieBtn.addEventListener('click', function () {
    cookieRibbon.parentNode.removeChild(cookieRibbon);
  });

}());