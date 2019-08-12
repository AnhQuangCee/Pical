import React, { Component } from "react";
import "./css/uploadInfo.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class UploadInfo extends Component {
  render() {
    return (
      <div className="upload">
        <div className="container">
          <div className="card">
            <i className="card-header text-right fas fa-times" />
            <div className="card-body text-center">
              <h5 className="card-title">Create infomation</h5>
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="../images/background (2).png"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="col-md-6">
                  <form className="upload-form">
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon">
                          <i className="fas fa-tag" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="recipient-name"
                          placeholder="Tags"
                        />
                      </div>
                    </div>
                    <div className="form-group email">
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon">
                          <i className="fas fa-map-marker-alt" />
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="message-text"
                          placeholder="Location"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <span className="input-group-addon">
                          <i className="fas fa-clock" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="message-text"
                          placeholder="Time"
                        />
                      </div>
                    </div>
                    <a href="#" className="submit btn btn-block text-center">
                      Confirm
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadInfo;
