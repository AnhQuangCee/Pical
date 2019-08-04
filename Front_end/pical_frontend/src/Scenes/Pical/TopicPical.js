import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TopicPical extends Component {
  // test = () => {
  //     this.props.testData();
  // }
  render() {
    return (
      <div className="topic">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <ul className="nav navbar-default justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" to="/trending">
                    Trending
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link className="nav-link" to="/popular">
                    Popular
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link className="nav-link" to="/creative">
                    Creative
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link className="nav-link" to="/editorial">
                    Editorial
                  </Link>
                </li>
                <li className="nav-item ml-5">
                  <Link className="nav-link" to="/service">
                    Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    test: state.testConnect
  };
};
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         testData: () => {
//             dispatch({ type: "ADD_DATA" })
//         }
//     }
// }
export default connect(mapStateToProps)(TopicPical);
