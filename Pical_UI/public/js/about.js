var art1 = document.querySelector('rect.cls-1');
var art2 = document.querySelector('line.cls-1');
var art3 = document.querySelector('line.short');
var text1 = document.querySelectorAll('path');
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
