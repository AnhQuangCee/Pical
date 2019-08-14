import React, { Component } from "react";
import WOW from "wowjs";
import Nav from "../../Components/Nav";
import MenuAC from "../../Components/MenuAC";
import News from "./News";
import Trending from "./Trending";
import Tutorials from "./Tutorials";
import Footer from "../../Components/Footer";
import "./css/blog.scss";

class Blogs extends Component {
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
        <div className="blog">
          <div className="container">
            <News></News>
            <Trending></Trending>
            <Tutorials></Tutorials>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Blogs;
