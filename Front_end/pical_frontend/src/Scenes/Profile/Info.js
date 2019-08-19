import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as accountActions from "../../actions/account";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const { accountActionCreatos } = this.props;
    const { fetchAccount } = accountActionCreatos;
    fetchAccount();
  }

  // getAccountInfo = () => {

  // };
  render() {
    const { getAccount } = this.props;
    // console.log(getAccount);

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12"></div>
            <div className="col-md-8 col-12">
              <div className="row text-center">
                <div className="col-12">
                  <p className="title">Profile</p>
                </div>
              </div>
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Username</h5>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              {/* end username input */}
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Email</h5>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              {/* end email */}
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Password</h5>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              {/* end password */}
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Gender</h5>
                </div>
                <div className="col-md-8">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              {/* end gender */}
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Date of birth</h5>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    type="date"
                    defaultValue="2011-08-19"
                    id="example-date-input"
                  />
                </div>
              </div>
              {/* end date of birth */}
              <div className="row username">
                <div className="col-md-4 hidden-smart">
                  <h5>Title</h5>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>
              {/* title */}
              <div className="row button">
                <div className="col-md-8" />
                <div className="col-md-4 button-mobile">
                  <div className="row" />
                  <a href="account.html" className="btn btn-info cancel">
                    Cancel
                  </a>
                  <a href="chatroom.html" className="btn btn-info ok">
                    Ok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Info.protoTypes = {
  accountActionCreatos: PropTypes.shape({
    fetchAccount: PropTypes.func
  }),
  getAccount: PropTypes.array
};

const mapStateToProps = state => {
  return {
    getAccount: state.accountReducers.account
  };
};

const mapDispatchToProps = dispatch => {
  return {
    accountActionCreatos: bindActionCreators(accountActions, dispatch)
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Info);
