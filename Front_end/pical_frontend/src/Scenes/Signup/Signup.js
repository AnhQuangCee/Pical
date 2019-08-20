import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import anime from "animejs";
import "./css/signup.scss";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import * as accountActions from "../../actions/account";
import GlobalLoading from "../Loading/GlobalLoading";
import Profile from "../Profile/Profile";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      status: false
    };
  }
  componentDidMount() {
    this.anime();
  }
  anime = () => {
    var signIn = document.querySelector(".sign-in");
    var hello = document.querySelector(".hello");
    var loginTitle = document.querySelector(".login-title");
    var status = "signIn";

    signIn.addEventListener("click", function() {
      if (status === "signIn") {
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
          targets: ".picture",
          translateX: "200%",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 0,
          easing: "easeOutQuad",
          update: function() {
            hello.innerHTML = "Hello, Friend";
            signIn.innerHTML = "Sign up";
            loginTitle.innerHTML = "Login";
          }
        });
        var y = anime({
          targets: ".signupForm",
          translateX: "-48%",
          easing: "easeOutQuad",
          delay: 500,
          duration: 1000,
          delay: function(el, i) {
            return i * 500;
          }
        });
        status = "signUp";
      } else if (status == "signUp") {
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
          targets: ".picture",
          translateX: "0%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 10,
          easing: "easeOutQuad",
          update: function() {
            hello.innerHTML = "Welcome Back!";
            signIn.innerHTML = "Sign in";
            loginTitle.innerHTML = "Create Account";
          }
        });
        var y = anime({
          targets: ".signupForm",
          translateX: "0%",
          easing: "easeOutQuad"
        });
        status = "signIn";
      }
    });
  };

  accountClick = () => {
    const { accountActionCreatos } = this.props;
    const { fetchAccount } = accountActionCreatos;
    fetchAccount();
  };
  isChange = event => {
    // console.log(event.target.value);
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value
    });
    // var itemAccountLogin = {};
    // itemAccountLogin.username = this.state.username;
    // itemAccountLogin.password = this.state.password;
  };
  // Sign up
  handleSubmitForm = data => {
    // console.log(data);
    const { addUserActionCreator } = this.props;
    const { addUser } = addUserActionCreator;
    const { username, email, password } = data;
    addUser(username, email, password);
  };

  // Sign in
  // handleSubmitFormSignin = data => {
  //   // console.log("hello");
  //   const { addUserActionCreator } = this.props;
  //   const { addUser } = addUserActionCreator;
  //   const { username1, password1 } = data;
  //   addUser(username1, password1);
  // };

  render() {
    const { getAccount, handleSubmit } = this.props;
    // console.log(this.props);
    // console.log(getAccount);
    var kq = [];
    getAccount.forEach(item => {
      if (
        item.username === this.state.username &&
        item.password === this.state.password
      ) {
        kq.push(item);
        this.setState({
          status: true
        });
      }
    });
    console.log(kq);
    if (this.state.status === true) {
      // return <Redirect to="/profile" />;
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: {
              referrer: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
              }
            }
          }}
        />
      );
    }
    return (
      <div>
        <GlobalLoading></GlobalLoading>
        <div className="signup">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-12 picture">
                <h3 className="hello">Welcome Back!</h3>
                <p>Corem ipsum dolor sit amet, consectetur adipisic</p>
                <div className="btn btn-info sign-in">Sign in</div>
              </div>
              <div className="col-md-8 col-12 signupForm">
                <h1 className="text-center login-title">Create Account</h1>
                <form
                  className="signupForm1 form-signin"
                  onSubmit={handleSubmit(this.handleSubmitForm)}
                >
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-user" />
                      </span>
                      <Field
                        type="text"
                        name="username"
                        component="input"
                        className="form-control"
                        id="recipient-name"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-envelope" />
                      </span>
                      <Field
                        type="email"
                        name="email"
                        component="input"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-unlock-alt" />
                      </span>
                      <Field
                        type="password"
                        name="password"
                        component="input"
                        className="form-control"
                        id="message-text"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 iconbox">
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
                    </div>
                  </div>
                  {/* <Link
                    className="submit btn btn-primary btn-block text-center"
                    to="/profile"
                    onClick={() => this.accountClick()}
                  >
                    Sign up
                  </Link> */}
                  <button
                    className="submit btn btn-primary btn-block text-center"
                    type="submit"
                  >
                    Sign up
                  </button>
                </form>
                {/* end form-sign */}

                <form
                  className="signupForm1 form-signup"
                  // onSubmit={handleSubmit(this.handleSubmitFormSignin)}
                >
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-user" />
                      </span>
                      <input
                        onChange={event => this.isChange(event)}
                        type="text"
                        name="username"
                        // component="input"
                        className="form-control"
                        // id="recipient-name"
                        placeholder="Username1"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-lg">
                      <span className="input-group-addon">
                        <i className="fas fa-unlock-alt" />
                      </span>
                      <input
                        onChange={event => this.isChange(event)}
                        type="password"
                        name="password"
                        // component="input"
                        className="form-control"
                        // id="message-text"
                        placeholder="Password1"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 iconbox">
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
                    </div>
                  </div>
                  {/* <Link
                    className="submit btn btn-primary btn-block text-center"
                    to="/profile"
                    onClick={() => this.accountClick()}
                  >
                    Sign up
                  </Link> */}
                  <div
                    className="submit btn btn-primary btn-block text-center"
                    onClick={() => this.accountClick()}
                  >
                    Sign in
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  accountActionCreatos: PropTypes.shape({
    fetchAccount: PropTypes.func
  }),
  addUserActionCreator: PropTypes.shape({
    addUser: PropTypes.func
  }),
  getAccount: PropTypes.array,
  handleSubmit: PropTypes.func
};

const mapStateToProps = state => {
  return {
    getAccount: state.accountReducers.account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    accountActionCreatos: bindActionCreators(accountActions, dispatch),
    addUserActionCreator: bindActionCreators(accountActions, dispatch)
  };
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);
const FORM_NAME = "SIGN_IN";
const withReduxForm = reduxForm({
  form: FORM_NAME
});
export default compose(
  withConnect,
  withReduxForm
)(Signup);
