const svgLogo = document.querySelectorAll('.global-loading .logo path');
const svgCircle = document.querySelectorAll('.global-loading polygon, circle, .path');
const svgPath = document.querySelectorAll('.global-loading .logo-title path');

const svgLogoAnimate = anime({
  targets: svgLogo,
  loop: true,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: (el, i) => { return i * 500 }
});

const svgCircleAnimate = anime({
  targets: svgCircle,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 500,
  delay: (el, i) => { return i * 500 }
});

const svgPathAnimate = anime({
  targets: svgPath,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'linear',
  duration: 500,
  delay: (el, i) => { return i * 500 },
  fill: ['rgba(0,0,0,0)', '#ffffff']
});

