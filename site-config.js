/* NymphCount site config — THE ONE-CHANGE SPOT.
   The site's contact email lives on the next line only. Every contact
   point on every page (footer lines, manuscript requests) carries the
   class "contact-email" and is filled from this single value. To
   change the address, change this line and nothing else. */
var SITE_CONTACT_EMAIL = "lvw001@lvc.edu";

document.addEventListener("DOMContentLoaded", function () {
  var nodes = document.querySelectorAll(".contact-email");
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].textContent = SITE_CONTACT_EMAIL;
    nodes[i].setAttribute("href", "mailto:" + SITE_CONTACT_EMAIL);
  }
});
