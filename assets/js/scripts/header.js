// FULL HEIGHT HEADER & PARALLAX FADE
$(function() {
  resizeDiv();
  $('.parallax').removeClass("invisible");
});
window.onresize = function(event) {
  resizeDiv();
};

function resizeDiv() {
  vph = $(window).height();
  if($('body').hasClass('home-template')) {
    $('#header').css({'height': vph});
  }
}

$( ".parallax" ).waitForImages(function() {
  $( this ).addClass('fade');
});
