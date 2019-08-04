import React, { Component } from "react";
import "./css/contact.scss";
class Form extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>contact us</h2>
              <p className="text-center">The whole world in a photo</p>
            </div>
          </div>
          <div className="row form">
            <div className="col-1" />
            <div className="col-10">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Messege"
                    rows={10}
                    defaultValue={""}
                  />
                </div>
                <div className="btn btn-secondary btn-block">Send</div>
              </form>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
