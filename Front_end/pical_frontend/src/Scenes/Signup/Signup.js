import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import anime from "animejs";
import './css/signup.scss';

class Signup extends Component {
    componentDidMount() {
        this.anime();
    }
    componentDidUpdate() {
        this.anime();
    }
    anime = () => {

        var signIn = document.querySelector('.sign-in');
        var hello = document.querySelector('.hello');
        var email = document.querySelector('.email');
        var loginTitle = document.querySelector('.login-title');
        var submit = document.querySelector('.submit');
        var status = "signIn";

        signIn.addEventListener('click', function () {
            if (status == "signIn") {
                var x = anime({
                    targets: '.picture',
                    translateX: '200%',
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 0,
                    easing: 'easeOutQuad',
                    update: function () {
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
                    delay: function (el, i) { return i * 500; }
                });
                var emailHidden = anime({
                    begin: function () {
                        document.querySelector(".email").style.display = "none";
                    }
                });
                status = "signUp";
            }
            else if (status == "signUp") {
                var x = anime({
                    targets: '.picture',
                    translateX: '0%',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 10,
                    easing: 'easeOutQuad',
                    update: function () {
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
                var emailHidden = anime({
                    begin: function () {
                        document.querySelector(".email").style.display = "block";
                    }
                });
                status = "signIn";
            }
        });
    }
    render() {
        return (
            <div className="signup">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-12 picture">
                            <h3 className="hello">Welcome Back!</h3>
                            <p>Corem ipsum dolor sit amet,
          consectetur adipisic</p>
                            <div className="btn btn-info sign-in">Sign in</div>
                        </div>
                        <div className="col-md-8 col-12 signupForm">
                            <h1 className="text-center login-title">Create Account</h1>
                            <form className="signupForm1">
                                <div className="form-group">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon"><i className="fas fa-user" /></span>
                                        <input type="text" className="form-control" id="recipient-name" placeholder="Username" />
                                    </div>
                                </div>
                                <div className="form-group email">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon"><i className="fas fa-envelope" /></span>
                                        <input type="email" className="form-control" id="message-text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group input-group-lg">
                                        <span className="input-group-addon"><i className="fas fa-unlock-alt" /></span>
                                        <input type="password" className="form-control" id="message-text" placeholder="Password" />
                                    </div>
                                </div>
                                <div className="row"><div className="col-md-12 iconbox">
                                    <div className="iconbox">
                                        <div className="icon1">
                                            <b className="fab fa-facebook-f" />
                                        </div>
                                        <div className="icon2">
                                            <b className="fab fa-twitter" />
                                        </div>
                                        <div className="icon3">
                                            <b className="fas fa-envelope" />
                                        </div>
                                    </div>
                                </div></div>
                                <Link className="submit btn btn-primary btn-block text-center" to="/profile">Sign up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;