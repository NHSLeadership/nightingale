// Eww, eww, eww, ewwww! Forcing a repaint to get around a really, really odd
// Safari bug: https://twitter.com/csswizardry/status/897110955448029184
function ready() {
  var page = document.getElementById('jsPage');
  page.style.color = '#231f21';
};
document.addEventListener("DOMContentLoaded", ready);