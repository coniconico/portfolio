/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Stop href="#hashtarget" links jumping around the page
var hashLinks = document.querySelectorAll("a[href^='#projet']");
[].forEach.call(hashLinks, function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, "", link.href);
    history.pushState({}, "", link.href);
    history.back();
  });
});