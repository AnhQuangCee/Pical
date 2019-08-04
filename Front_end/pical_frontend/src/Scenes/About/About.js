import React, { Component } from "react";
import Nav from "../../Components/Nav";
import MenuAC from "../../Components/MenuAC";
import WOW from "wowjs";
import Topic from "../../Components/Topic";
import Founder from "./Founder";
import TeamDev from "./TeamDev";
import Digits from "./Digits";
import Footer from "../../Components/Footer";
import "../About/css/about.scss";

class About extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div className="menu">
          <div className="container-fluid fixed-top">
            <div className="container">
              <Nav></Nav>
            </div>
          </div>
          <MenuAC></MenuAC>
        </div>
        <Topic></Topic>
        <Founder></Founder>
        <TeamDev></TeamDev>
        <Digits></Digits>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
