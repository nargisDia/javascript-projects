// import LocomotiveScroll from 'locomotive-scroll';
// smooth moving
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

//Animation page
function firstPageAnim() {
  let tl = gsap.timeline();

  tl.from('#nav', {
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to('.boundinglem', {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from('#herofooter', {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

// mouse skew maimum & minimum
var timeout;
function circleChaptaKaro() {
  // define default sacale value
  let xscale = 1;
  let yscale = 1;
  // global x and y value
  var xprev = 0;
  var yprev = 0;
  window.addEventListener('mousemove', function (details) {
    clearTimeout(timeout);

    (xscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev)),
      (yscale = gsap.utils.clamp(0.8, 1.2, details.clientX - xprev));

    xprev = details.clientX;
    yprev = details.clientY;

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function () {
      document.querySelector(
        '#mini-circle'
      ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

// mouse follower
function circleMouseFollower(xscale, yscale) {
  window.addEventListener('mousemove', function (details) {
    // console.log(details.clientX, details.clientY);

    document.querySelector(
      '#mini-circle'
    ).style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

// 3ta element selet koro, tader upr mousemove add koro,jokhn mousemove hoi tokhen khujo mouse kothai, mouse er x and y er position ber koro. akhn ay mouse er x and y position badole oder image show koro and image move koro| move korte korte rotate koro, and jekhane jehane mouse cole sekhane sekhane rotation koro mouse

document.querySelectorAll('.element').forEach(function (element) {
  var rotate = 0;
  var diffrot = 0;

  element.addEventListener('mouseleave', function (details) {
    gsap.to(element.querySelector('img'), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  element.addEventListener('mousemove', function (details) {
    var diff = details.clientY - element.getBoundingClientRect().top;
    diffrot = details.clientX - rotate;
    rotate = details.clientX;
    gsap.to(element.querySelector('img'), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: details.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
