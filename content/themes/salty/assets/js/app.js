function isiPhone(){
  return (
    (navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1)
  );
}
function isiPad(){
  return (
    (navigator.platform.indexOf("iPad") != -1)
  );
}
if(isiPhone()){
  $('body').addClass('iphone');
}
if(isiPad()){
  $('body').addClass('ipad');
}

if(isiPad() || isiPhone()){
  $("#showcaseList li").bind("touchstart click", function(){
    $(this).toggleClass("hover");
  });
  $("#showcaseList li").bind("touchend click", function(){
    $(this).removeClass("hover");
  });
}

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
$( ".toggleConnect" ).click(function() {
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
  if($('body').hasClass('home-template')) {
    $('#header').css({'height': vph});
  }
}

$( ".parallax" ).waitForImages(function() {
  $( this ).addClass('fade');
});

// Mobile Nav
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

var rowWrap = '<div class="row align-center content"><div class="small-11 medium-10 large-9 columns content-col"></div></div>';
var firstChild = $('#contentBody').children().first();

firstChild.not(".flex-wrap").nextUntil('.flex-wrap').andSelf().wrapAll(rowWrap);

$(".flex-wrap").each(function(i) {
  $(this).nextUntil('.flex-wrap').wrapAll(rowWrap);
  $(this).has( "a" ).find("a").wrap( "<div class='columns'></div>" );
  $(this).has( "img" ).find("img").wrap( "<div class='columns'></div>" );
  $(this).has( "a" ).find("a .columns").contents().unwrap();
});
$(".youtube-video").addClass("flex-video widescreen");

// IMG Captions
$(".columns img").each(function() {
  var imageCaption = $(this).attr("title");
  if (imageCaption) {
    $("<h6>" + imageCaption + "</h6>").insertBefore(this);
  }
});

var controller = new ScrollMagic.Controller();

$('.statement-pop').each(function(){
  var currentStatement = this;
  var trigger = currentStatement.closest('section');

  var tween_statement = TweenMax
  .fromTo(currentStatement, 1, {
    transform: 'translate(0px, 60px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_statement)
  // .addIndicators({name: "Pop"})
  .addTo(controller);
});

$('.hint').each(function(){
  var currentHint = this;
  var trigger = currentHint.closest('section');

  var tween_hint = TweenMax
  .fromTo(currentHint, 1, {
    transform: 'translate(0px, -60px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_hint)
  // .addIndicators({name: "Hint", indent: 120})
  .addTo(controller);
});

$('.talk h2').each(function(){
  var currentTalkHead = this;
  var trigger = currentTalkHead.closest('section');

  var tween_talk = TweenMax
  .fromTo(currentTalkHead, 1, {
    transform: 'translate(-60px, 0px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "500"
  })
  .setTween(tween_talk)
  // .addIndicators({name: "talk"})
  .addTo(controller);
});

$('.para-parent .parallax').each(function(){
  var currentParallax = this;
  var trigger = currentParallax.closest('section');

  var tween_parallax = TweenMax
  .fromTo(currentParallax, 1, {
    transform: 'translate(0px, -75px) scale(1.5)'
  }, {
    transform: 'translate(0px, 75px) scale(1.5)', ease: Linear.easeNone
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: trigger,
    triggerHook: "onEnter",
    duration: "200%"
  })
  .setTween(tween_parallax)
  // .addIndicators({name: "parallax"})
  .addTo(controller);
});

//Tweens
var tween_header = new TimelineMax()
  .fromTo('#header .overlay', 1, {
    opacity: 0
  }, {
    opacity: 1
  })
  .fromTo('.page-links', 1, {
    transform: 'translate(0px, 0px)'
  }, {
    transform: 'translate(0px, -240px)'
  }, 0)
  .fromTo('.subheader', 1, {
    transform: 'translate(0px, 0px)'
  }, {
    transform: 'translate(0px, 100px)'
  }, 0)
  .fromTo('.go-down', 1, {
    opacity: 1
  }, {
    opacity: 0
  }, 0)
;

var tween_header_parallax = TweenMax
.fromTo('header .parallax', 1, {
  transform: 'translate(0px, -50px) scale(1.5)'
}, {
  transform: 'translate(0px, 150px) scale(1.5)', ease: Linear.easeNone
});

var header = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: "onLeave",
  duration: "200%"
})
.setTween(tween_header)
// .addIndicators({name: "overlay"})
.addTo(controller);

var header_parallax = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: "onEnter",
  duration: "200%"
})
.setTween(tween_header_parallax)
// .addIndicators({name: "overlay"})
.addTo(controller);

// Tweens
//heart
if($("body").hasClass("Process")) {
  var tween_heart = TweenMax
  .staggerFromTo('#heart .columns', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#heart",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_heart)
  // .addIndicators({name: "heart"})
  .addTo(controller);

  //services
  var tween_services = new TimelineMax()
  .staggerFromTo('.Process #services li:nth-child(odd)', 2, {
    transform: 'translate(-50px, 0px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".Process #services",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_services)
  // .addIndicators({name: "services"})
  .addTo(controller);

  var tween_services = new TimelineMax()
  .staggerFromTo('.Process #services li:nth-child(even)', 2, {
    transform: 'translate(50px, 0px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: ".Process #services",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_services)
  // .addIndicators({name: "services"})
  .addTo(controller);

  // location
  var tween_location = TweenMax
  .staggerFromTo('#location .columns', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)', ease: Back.easeOut
  }, 0.5);

  var scene = new ScrollMagic.Scene({
    triggerElement: "#location",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_location)
  // .addIndicators({name: "Northwest"})
  .addTo(controller);

  //bio pic
  var tween_bio = TweenMax
  .fromTo('.bio', 1, {
    transform: 'translate(60px, 0px)'
  }, {
    transform: 'translate(0px, 0px)'
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: "#whois",
    triggerHook: "onEnter",
    duration: "150%"
  })
  .setTween(tween_bio)
  // .addIndicators({name: "bio"})
  .addTo(controller);

  // Instagram
  var tween_instagram = new TimelineMax()
  .staggerFromTo('.social-list div', 2, {
    transform: 'translate(0px, 100px)'
  }, {
    transform: 'translate(0px, 0px)'
  }, 0.33)
;

  var scene = new ScrollMagic.Scene({
    triggerElement: "#instagram",
    triggerHook: "onEnter",
    duration: "100%"
  })
  .setTween(tween_instagram)
  // .addIndicators({name: "instagram"})
  .addTo(controller);

}

if($("body").hasClass("Showcase")) {

  $('.type-row').each(function(){
    var currentHint = this;
    var trigger = currentHint.closest('article');

    var tween_pull = TweenMax
    .fromTo(currentHint, 1, {
      transform: 'translate(0px, 100px)'
    }, {
      transform: 'translate(0px, 0px)'
    });

    var scene = new ScrollMagic.Scene({
      triggerElement: trigger,
      triggerHook: "onEnter",
      duration: "100%"
    })
    .setTween(tween_pull)
    // .addIndicators({name: "Pull", indent: 120})
    .addTo(controller);
  });

  // var tween_case = new TimelineMax()
  // .to('#caseContainer', 0.5, {
  //   z: -150
  // })
  // .to("#caseContainer", 1,   {x: "-33.33%"})	// move in to first panel
  // .to("#caseContainer", 0.5, {z: 0})				// move back to origin in 3D space
  // // animate to third panel
  // .to("#caseContainer", 0.5, {z: -150, delay: 1})
  // .to("#caseContainer", 1,   {x: "-66.66%"})
  // .to("#caseContainer", 0.5, {z: 0});
  //
  // var scene = new ScrollMagic.Scene({
  //   triggerElement: "#pinContainer",
  //   triggerHook: "onLeave",
  //   duration: "500%"
  // })
  // .setPin("#pinContainer")
  // .setTween(tween_case)
  // // .addIndicators({name: "swipe", indent: 120})
  // .addTo(controller);
}
