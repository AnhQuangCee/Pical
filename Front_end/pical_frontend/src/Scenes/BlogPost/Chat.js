import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <div className="comment">
        <div className="form-group">
          <div className="input-group input-group-lg">
            <span className="input-group-addon">
              <i className="fas fa-comment" />
            </span>
            <input
              type="text"
              className="form-control"
              id="message-text"
              placeholder="Write your comment"
            />
          </div>
        </div>
        <div className="container-content">
          <div className="row">
            <div className="col-md-12">
              <div className="avatar-content" style={{ float: "left" }} />
              <div className="name-content" style={{ float: "left" }}>
                <p className="name-content1">David</p>
                <p className="name-content2">Developer</p>
              </div>
              <div className="time-content" style={{ float: "left" }}>
                5:00 AM
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="messenge">
                Bacon ipsum dolor amet tail drumstick short loin, boudin picanha
                cow prosciutto porchetta porker.
              </p>
            </div>
          </div>
          <div className="row repply">
            <div className="container-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="avatar-content" style={{ float: "left" }} />
                  <div className="name-content" style={{ float: "left" }}>
                    <p className="name-content1">David</p>
                    <p className="name-content2">Developer</p>
                  </div>
                  <div className="time-content" style={{ float: "left" }}>
                    5:00 AM
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="messenge">
                    Bacon ipsum dolor amet tail drumstick short loin, boudin
                    picanha cow prosciutto porchetta porker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end chat1 */}
        <div className="container-content">
          <div className="row">
            <div className="col-md-12">
              <div className="avatar-content" style={{ float: "left" }} />
              <div className="name-content" style={{ float: "left" }}>
                <p className="name-content1">David</p>
                <p className="name-content2">Developer</p>
              </div>
              <div className="time-content" style={{ float: "left" }}>
                5:00 AM
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="messenge">
                Bacon ipsum dolor amet tail drumstick short loin, boudin picanha
                cow prosciutto porchetta porker.
              </p>
            </div>
          </div>
          <div className="row repply">
            <div className="container-content">
              <div className="row">
                <div className="col-md-12">
                  <div className="avatar-content" style={{ float: "left" }} />
                  <div className="name-content" style={{ float: "left" }}>
                    <p className="name-content1">David</p>
                    <p className="name-content2">Developer</p>
                  </div>
                  <div className="time-content" style={{ float: "left" }}>
                    5:00 AM
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="messenge">
                    Bacon ipsum dolor amet tail drumstick short loin, boudin
                    picanha cow prosciutto porchetta porker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end chat1 */}
      </div>
    );
  }
}

export default Chat;
