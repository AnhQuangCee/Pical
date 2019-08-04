import React, { Component } from "react";
import "../About/css/about.scss";

class Digits extends Component {
  render() {
    return (
      <div className="digits text-center" id="digits">
        <div className="container">
          <div className="row infoDigits">
            <div className="col-4">
              <h1>537+</h1>
              <p>Pioneer Breakthroughs</p>
            </div>
            <div className="col-4">
              <h1>1082+</h1>
              <p>Client Expectations</p>
            </div>
            <div className="col-4">
              <h1>981+</h1>
              <p>Delivered Promises</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Digits;
