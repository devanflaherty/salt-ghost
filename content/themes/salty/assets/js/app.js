/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

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
var firstChild = $('#contentBody').children().first();

firstChild.not(".flex-wrap").nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);

$(".flex-wrap").each(function(i) {
  $(this).nextUntil('.flex-wrap').wrapAll(rowWrap);
  $(this).has( "a" ).find("a").wrap( "<div class='columns'></div>" );
  $(this).has( "img" ).find("img").wrap( "<div class='columns'></div>" );
  $(this).has( "a" ).find("a .columns").contents().unwrap();
});
$(".youtube-video").addClass("flex-video widescreen");
