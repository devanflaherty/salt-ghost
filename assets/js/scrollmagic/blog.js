var tween_share = new TimelineMax()
.staggerFromTo('#share-links div', 2, {
  transform: 'translate(0px, 100px)'
}, {
  transform: 'translate(0px, 0px)'
}, 0.33)
;

var scene = new ScrollMagic.Scene({
  triggerElement: "#share-links",
  triggerHook: "onEnter",
  duration: "50%"
})
.setTween(tween_share)
// .addIndicators({name: "instagram"})
.addTo(controller);
