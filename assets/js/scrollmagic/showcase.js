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
