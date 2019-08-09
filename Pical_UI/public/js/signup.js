
var signIn = document.querySelector('.sign-in');
var hello = document.querySelector('.hello');
var email =  document.querySelector('.email');
var loginTitle =  document.querySelector('.login-title');
var submit =  document.querySelector('.submit');
var status = "signIn";

signIn.addEventListener('click', function(){
	if(status == "signIn"){
		var x = anime({
			targets: '.picture',
			translateX: '200%',
			borderTopLeftRadius: 0,
			borderTopRightRadius: 10,
			borderBottomRightRadius: 10,
			borderBottomLeftRadius: 0,
			easing: 'easeOutQuad',
			update:function(){
				hello.innerHTML = "Hello, Friend";
				signIn.innerHTML = "Sign up";
				loginTitle.innerHTML = "Login";
				submit.innerHTML = "Sign in";
			}
		});
		var y = anime({
			targets: '.signupForm',
			translateX: '-48%',
			easing: 'easeOutQuad',
			delay: 500,
			duration: 1000,
			delay: function(el, i) { return i * 500; }
		});
		var emailHidden =  anime({
			begin: function() {
				document.querySelector(".email").style.display = "none";
			}
		});
		status = "signUp";
	}
	else if(status == "signUp"){
		var x = anime({
			targets: '.picture',
			translateX: '0%',
			borderTopLeftRadius: 10,
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderBottomLeftRadius: 10,
			easing: 'easeOutQuad',
			update:function(){
				hello.innerHTML = "Welcome Back!";
				signIn.innerHTML = "Sign in";
				loginTitle.innerHTML = "Create Account";
				submit.innerHTML = "Sign up";
			}
		});
		var y = anime({
			targets: '.signupForm',
			translateX: '0%',
			easing: 'easeOutQuad'
		});
		var emailHidden =  anime({
			begin: function() {
				document.querySelector(".email").style.display = "block";
			}
		});
		status = "signIn";
	}
});

