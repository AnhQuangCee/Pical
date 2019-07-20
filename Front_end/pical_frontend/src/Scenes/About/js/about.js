import anime from "animejs";

var art1 = document.querySelector('rect.cls-1');
var art2 = document.querySelector('line.cls-1');
var art3 = document.querySelector('line.short');
var text1 = document.querySelectorAll('path');
var text2 = document.querySelectorAll('.g3 path');
// var cdtimeline = anime.timeline();

anime({
	targets: text1,
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeInOutSine',
	duration: 1500,
	delay: function(el, i) { return i * 250 },
	// direction: 'alternate',
	
});
anime({
	targets:art1,
	strokeDashoffset: [anime.setDashoffset,0],
	duration: 3000,
	delay: function(el, i) { return i * 250 },
	easing: 'easeOutSine',
	// direction:'alternate',
	
});
anime({
	targets:art2,
	strokeDashoffset: [anime.setDashoffset,0],
	duration: 3000,
	delay: function(el, i) { return i * 250 },
	easing: 'easeOutSine',
	// direction:'alternate',
	
});
anime({
	targets:art3,
	strokeDashoffset: [anime.setDashoffset,0],
	duration: 3000,
	delay: function(el, i) { return i * 250 },
	easing: 'easeOutSine',
	// direction:'alternate',
});
anime({
	targets:text2,
	opacity: 0,
	duration: 3000,
	delay: function(el, i) { return i * 250 },
	opacity:1
	// direction:'alternate',
});

// new WOW().init();

//Scroll navbar
document.addEventListener("DOMContentLoaded", function(){
	var navColor = document.querySelector('.fixed-top');
	var scrollStatus = 'down100';

	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 100){
			if(scrollStatus === 'down100'){
			   navColor.classList.add('nav-color');
			   scrollStatus = 'up100';
			}
		}
		else {
			if(scrollStatus === 'up100'){
				navColor.classList.remove('nav-color');
			    scrollStatus = 'down100';
			}
		}
	})
})

