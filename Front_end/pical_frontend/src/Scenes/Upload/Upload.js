import React, { Component } from "react";
import "./css/upload.scss";
import dropzone from "dropzone";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Upload extends Component {
  componentWillMount() {
    this.dropzone();
  }
  dropzone = () => {};
  render() {
    return (
      <div className="upload">
        <div className="container">
          <div className="card">
            <i className="card-header text-right fas fa-times" />
            <div className="card-body text-center">
              <h5 className="card-title">Upload your images</h5>
              <form action="/file-upload" className="dropzone">
                <div className="fallback">
                  <input name="file" type="file" multiple />
                </div>
              </form>
              <Link className="btn" to="/upload/uploadInfo">
                Next <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
