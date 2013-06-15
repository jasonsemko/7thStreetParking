/**
 * Parking Class
 * @param  {Array} a [Array of anchor links within nav element]
 */
var Parking = function(a) {
  this.NavA = a;
}



/**
 * Turns links blue
 */
Parking.prototype.scrollin = function(){

  var topH = document.querySelector("header").offsetHeight + 30;

  this.NavA.on("click", function(e){

    e.preventDefault();

    var scrollTo = ($(this.hash).position().top - topH) + "px";

    $("html, body").animate({ scrollTop: scrollTo });

  });
}



/**
 * On document ready create an instance of the Parking class and change links.
 */
$(document).ready(function() {
  
  var p = new Parking(
    $("a", "nav")
    );

  p.scrollin();

});