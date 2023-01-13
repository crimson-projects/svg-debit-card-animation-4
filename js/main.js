const tl = gsap.timeline()
  .set('svg', {opacity:1})
  .from('#cardMask rect', {scale:0, rotation:20, duration:2, transformOrigin:'50% 50%', ease:'expo.inOut'}, 0)
  .from('#spiral', {scale:0.5, rotation:-30, duration:2, transformOrigin:'66% 42%', ease:'expo.inOut'}, 0)
  .from('#coil', {attr:{'stroke-dashoffset':20}, ease:'none', duration:1, repeat:-1}, 0.5)
  .from('#markerRed', {transformOrigin:'50% 50%', scale:1.15, duration:2, repeat:-1, yoyo:true, ease:'sine.inOut'}, 0.5)
  .to('.b1, .b2', {transformOrigin:'50% 50%', skewY:-4, y:-10, duration:2, repeat:-1, yoyo:true, ease:'sine.inOut'}, 0.5)
  .from('.logoPt', {x:(i)=>[18,-10][i], duration:1.2, ease:'expo.inOut'}, 0.8)
  .from('svg text', {x:-40, duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .from('.txtBox', {scaleX:0, transformOrigin:'100% 0', duration:1.1, ease:'expo.inOut', stagger:0.2}, 1)
  .from('#triangle', {
    motionPath: {
        path: "#coil",
        align: "#coil",
        alignOrigin: [0.7, 0.58],
        autoRotate: true,
        start:0.34,
        end:0.6
    },
    duration:2.5
  }, 0.5)
  .to('#triangle', {
    motionPath: {
        path: "#coil",
        align: "#coil",
        alignOrigin: [0.7, 0.58],
        autoRotate: true,
        start: 0.34,
        end:()=>gsap.utils.random(0.39,0.42),
    },
    overwrite:'auto',
    repeatRefresh:true, yoyo:true, repeat:-1, duration:3, ease:'sine.inOut'
  }, 3)
  
document.querySelectorAll('.star').forEach(function(s) {
  gsap.fromTo(s, {
    x:()=>gsap.utils.random(-95,170),
    y:()=>gsap.utils.random(-115,190),
    scale:0,
    transformOrigin:'12px 12px'
  },{
    scale:1,
    yoyo:true,
    repeat:-1,
    repeatRefresh:true,
    duration:()=>gsap.utils.random(0.4,1),
    ease:'expo',
    delay:()=>Math.random()
  });
});

window.onclick =()=> tl.play(0);