// FULL HEIGHT HEADER
$(function() {
  resizeDiv();
});
window.onresize = function(event) {
  resizeDiv();
};
function resizeDiv() {
  vph = $(window).height();
  $('#header').css({'height': vph});
}
