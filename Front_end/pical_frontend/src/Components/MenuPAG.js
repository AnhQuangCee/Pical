import React, { Component } from "react";
import "../Scenes/Profile/css/profile.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class MenuPAG extends Component {
  render() {
    return (
      <div className="topic">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="image-block">
                <div className="circular--portrait ">
                  <img src="images/trang6.jpg" alt="true" />
                </div>
                <div className="name">Cathy Kane</div>
              </div>
            </div>
            <div className="col-md-8 col-12 navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarShow"
                aria-controls="navbarShow"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-caret-down" />
              </button>
              <div className="collapse navbar-collapse" id="navbarShow">
                <ul className="nav navbar-default justify-content-center">
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                      <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item ml-5">
                    <Link className="nav-link" to="/albums">
                      Albums
                    </Link>
                  </li>
                  <li className="nav-item ml-5">
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-item ml-5">
                    <Link className="nav-link" to="/blogs">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default MenuPAG;
