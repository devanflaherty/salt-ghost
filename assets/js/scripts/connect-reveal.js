// Connect Reveal
$('#connect').hide();
$('.close').hide();
$( "#toggleConnect" ).click(function() {
  $('.close').fadeIn('slow');
  $('html').addClass( "connectFixed" );
  $('#connect').fadeIn(function() {
    $('#connect .left-panel').addClass("visible");
    $('#connect .right-panel').addClass("visible");
  });
});
$( ".close" ).click(function() {
  $('#connect .left-panel').removeClass("visible");
  $('#connect .right-panel').removeClass("visible");
  $('#connect').fadeOut(function() {
    $('html').removeClass( "connectFixed" );
  });
});
