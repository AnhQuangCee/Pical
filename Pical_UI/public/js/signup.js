
var signIn = document.querySelector('.sign-in');
var hello = document.querySelector('.hello');
var email =  document.querySelector('.email');
var loginTitle =  document.querySelector('.login-title');
var submit =  document.querySelector('.submit');
var status = "signIn";

signIn.addEventListener('click', function(){
	if(status == "signIn"){
		var usernameHideSignin = anime({
			begin: function() {
				document.querySelector(".form-signin").style.display = "none";
			}
		});
		var usernameHideSignup = anime({
			begin: function() {
				document.querySelector(".form-signup").style.display = "block";
			}
		});
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
		status = "signUp";
	}
	else if(status == "signUp"){
		var usernameHideSignin = anime({
			begin: function() {
				document.querySelector(".form-signin").style.display = "block";
			}
		});
		var usernameHideSignup = anime({
			begin: function() {
				document.querySelector(".form-signup").style.display = "none";
			}
		});
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
			}
		});
		var y = anime({
			targets: '.signupForm',
			translateX: '0%',
			easing: 'easeOutQuad'
		});
		status = "signIn";
	}
});

