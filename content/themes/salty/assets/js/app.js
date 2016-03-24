// Connect Reveal
$('#connect').hide();
$( "#toggleConnect" ).click(function() {
  $('.close').fadeIn('slow');
  $('html').addClass( "connectFixed" );
  $('#connect .left-panel').show();
  $('#connect .right-panel').show();
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
  $('#header').css({'height': vph});
}

// Mobile Nav
// Before the page load the nav is visible and wonky this was a quick fix
$('.full-nav').hide();
$(window).load(function() {
  $(".full-nav").show();
});

// Where the magic happens
$( ".nav-toggle" ).click(function() {
  $(this).toggleClass( "active" );

  $('html').toggleClass( "navFixed" );
  $('.full-nav').toggleClass("visible");
  $('.logo').toggleClass( "black" );
});
$(window).resize(function(){
  if ($(window).width() >= 640){
    $('.nav-toggle').removeClass( "active" );
    $('html').removeClass( "navFixed" );
    $('.full-nav').removeClass("visible");
    $('.logo').removeClass( "black" );
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Some jquery to add some styling to the markdown parsed html on showcase pages
// Find imgs in a paragraph tag and wrap them in a row
$( "#contentBody p" ).has( "img" ).wrap( '<div class="row expanded collapse flex-wrap" />');
// Remove the wrapping p tag
$( ".flex-wrap p" ).has( "img" ).contents().unwrap();

var rowWrap = '<div class="row align-center content"><div class="small-11 medium-9 columns content-col"></div></div>';

$('#contentBody > h2').each(function() {
  if ($(this).parent(".content-col").length) {
  } else if ($(this).next(".content").length) {
    $(this).next(".content").find(".content-col").prepend( $( this ) );
  } else {
    $(this).nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);
  }
});
$('#contentBody > h3').each(function() {
  if ($(this).parent(".content-col").length) {
  } else if ($(this).next(".content").length) {
    $(this).next(".content").find(".content-col").prepend( $( this ) );
  } else {
    $(this).nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);
  }
});
$('#contentBody > h4').each(function() {
  if ($(this).parent(".content-col").length) {
  } else if ($(this).next(".content").length) {
    $(this).next(".content").find(".content-col").prepend( $( this ) );
  } else {
    $(this).nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);
  }
});
$('#contentBody > blockquote').each(function() {
  if ($(this).parent(".content-col").length) {
  } else if ($(this).next(".content").length) {
    $(this).next(".content").find(".content-col").prepend( $( this ) );
  } else {
    $(this).nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);
  }
});
$("#contentBody > p").each(function() {
  if ($(this).parent(".content-col").length) {
  } else if ($(this).next(".content").length) {
    $(this).next(".content").find(".content-col").prepend( $( this ) );
  } else {
    $(this).nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);
  }
});

$(".flex-wrap").each(function(i) {
  $(this).has( "a" ).find("a").wrap( "<div class='columns'></div>" );
  $(this).has( "img" ).find("img").wrap( "<div class='columns'></div>" );
  $(this).has( "a" ).find("a .columns").contents().unwrap();
});
$(".youtube-video").addClass("flex-video widescreen");
