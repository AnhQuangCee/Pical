import React, { Component } from "react";
import "../About/css/about.scss";

class Founder extends Component {
  render() {
    return (
      <div className="founder">
        <div className="container">
          <h2 className="wow bounceInDown">About us</h2>
          <div className="row">
            <div className="col-4">
              <p className="wow fadeIn">Pical</p>
              <h4 className="wow fadeInLeft">Founder</h4>
              <hr />
              <br></br>
              <img src="images/trang6.jpg" style={{ width: "100%" }} alt="" />
            </div>
            <div className="col-8">
              <h4>
                Pical is fully focused on high-end programs and functional apps.
              </h4>
              <hr></hr>
              <br></br>
              <p>
                Corem ipsum dolor sit amet, consectetur adipisicing elit ased
                tempor eiusmod tempor incididunts uet labore moslet dolore magna
                aliqua.
              </p>
              <p className="hidden-smart">
                Duis aute irure dolor in reprehenderit in casd voluptate velit
                esed cillum dolore fugiat nulla pariatury. Excepteur sint uat
                occaecat cupidatat non proident sunt in culpa qui officia
                deserunt mollit anim est.
              </p>
              <p className="hidden-smart2">
                Corem ipsum dolor sit amet, consectetur adipisicing elit ased
                tempor eiusmod tempor incididunts uet labore moslet dolore magna
                aliqua uat enim ad minim veniam quis nostrud exercitation
                ullamco laboris tem nisil dolorut aliquip ex ea commodo
                consequat.{" "}
              </p>
              <div className="btn btn-outline-info">Read more</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Founder;
