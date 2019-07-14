//Scroll navbar
document.addEventListener("DOMContentLoaded", function(){
	var navColor = document.querySelector('.fixed-top');
	var scrollStatus = 'down100';

	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 100){
			if(scrollStatus == 'down100'){
			   navColor.classList.add('nav-color');
			   scrollStatus = 'up100';
			}
		}
		else {
			if(scrollStatus == 'up100'){
				navColor.classList.remove('nav-color');
			    scrollStatus = 'down100';
			}
		}
	})
})