import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import MenuPAG from "../../Components/MenuPAG";
import "./css/profile.scss";
import Info from "./Info";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div className="container-fluid fixed-top">
            <div className="container">
              <Nav></Nav>
            </div>
          </div>
        </div>
        <div className="topic">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="image-block">
                  <div className="circular--portrait ">
                    <img src="images/trang6.jpg" alt="true" />
                  </div>
                  <div className="name">
                    {this.props.location.state.referrer}
                  </div>
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
        <Info></Info>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    username: state.username
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    profileInfo: username => {
      dispatch({ type: "PROFILE_INFO" }, username);
    }
  };
};
export default Profile;
