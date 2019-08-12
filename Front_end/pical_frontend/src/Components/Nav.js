import React, { Component } from "react";
import "./css/nav.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
  componentDidMount() {
    this.nav();
  }
  nav = () => {
    var navColor = document.querySelector(".fixed-top");
    var scrollStatus = "down100";

    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        if (scrollStatus == "down100") {
          navColor.classList.add("nav-color");
          scrollStatus = "up100";
        }
      } else {
        if (scrollStatus == "up100") {
          navColor.classList.remove("nav-color");
          scrollStatus = "down100";
        }
      }
    });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          Pical
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mr-5">
              <Link className="nav-link" to="/">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to="/">
                License
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to="/upload">
                Upload
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
