import React, { Component } from "react";

class Likes extends Component {
  render() {
    return (
      <div className="col-md-1 like">
        <ul className="">
          <li className="nav-item">
            <i className="fas fa-heart" />
            <p>99 Likes</p>
          </li>
          <li className="nav-item">
            <i className="fas fa-bookmark" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Likes;
