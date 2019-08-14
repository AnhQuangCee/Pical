import React, { Component } from "react";

class TOC extends Component {
  render() {
    return (
      <div className="col-md-3 table-of-content">
        <div className="table">
          <h6>TABLE OF CONTENTS</h6>
          <ul className="sticky-top">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="serries-posts">
          <h6>SERRIES POSTS</h6>
          <ol className="">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default TOC;
