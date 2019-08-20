import React, { Component } from "react";
import Nav from "../../Components/Nav";
import Footer from "../../Components/Footer";
import MenuPAG from "../../Components/MenuPAG";
import "./css/profile.scss";
import Info from "./Info";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addData = () => {
    var InformationAccount = {};
    InformationAccount.username = this.props.location.state.referrer.username;
    InformationAccount.password = this.props.location.state.referrer.password;
    // console.log(a);
    this.props.profileInfo(InformationAccount);
  };
  render() {
    // console.log(this.props.location.state.referrer);

    return (
      <div>
        <div className="menu">
          <div className="container-fluid fixed-top">
            <div className="container">
              <Nav></Nav>
            </div>
          </div>
        </div>
        <MenuPAG></MenuPAG>
        <div className="btn btn-info" onClick={() => this.addData()}>
          Ok
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
    profileInfo: username1 => {
      dispatch({ type: "PROFILE_INFO", username1 });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
// export default Profile;
