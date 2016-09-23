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
