/**
 * Parking Class
 * @param  {Array} a [Array of anchor links within nav element]
 */
var Parking = function(a) {
  this.navAnchors = a;
}


/**
 * On click listener for nav links. Upon click event page scrolls to document hash location.
 */
Parking.prototype.scrollin = function(){

  var topH = document.querySelector("header").offsetHeight + 30;
  this.navAnchors.on("click", function(e){
    e.preventDefault();

    var scrollTo = ($(this.hash).position().top - topH) + "px";
    $("html, body").animate({ scrollTop: scrollTo });
  });
}


/**
 * On document ready create an instance of the Parking class and change links.
 */
$(document).ready(function() {
  new Parking($("a", "nav")).scrollin();
});