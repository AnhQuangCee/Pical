import React, { Component } from "react";
import "./css/blogPost.scss";
import Likes from "./Likes";
import Post from "./Post";
import TOC from "./TOC";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Nav";

class BlogPost extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="container-fluid fixed-top nav bg-light">
            <div className="container">
              <Nav></Nav>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <Likes></Likes>
              <Post></Post>
              <TOC></TOC>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default BlogPost;
