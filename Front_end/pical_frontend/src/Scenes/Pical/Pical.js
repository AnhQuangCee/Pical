import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import "./css/pical.scss";
import * as picalActions from "../../actions/pical";
import Nav from "../../Components/Nav";
import TopicPical from "./TopicPical";
import ImagesCol1 from "./ImagesCol1";
import ImagesCol2 from "./ImagesCol2";
import ImagesCol3 from "./ImagesCol3";

class Pical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // getData: []
    };
  }

  componentDidMount() {
    // this.setState({
    //   getData: this.props
    // });
    const { picalActionCreators } = this.props;
    const { fetchPical } = picalActionCreators;
    fetchPical();
  }

  printImageDataCol1 = () => {
    if (this.props.getData !== null) {
      return this.props.getData.map((value, key) => {
        return <ImagesCol1 key={key} link={value.link} />;
      });
    }
  };

  printImageDataCol2 = () => {
    if (this.props.getData !== null) {
      return this.props.getData.map((value, key) => {
        return <ImagesCol2 key={key} link={value.link} />;
      });
    }
  };

  printImageDataCol3 = () => {
    if (this.props.getData !== null) {
      return this.props.getData.map((value, key) => {
        return <ImagesCol3 key={key} link={value.link} />;
      });
    }
  };

  render() {
    const { getData } = this.props;
    // console.log(getData);
    return (
      <div>
        <div className="menu">
          <div className="container-fluid fixed-top">
            <div className="container">
              <Nav />
            </div>
          </div>
          <div className="container">
            <div className="row search-box">
              <div className="col-12 text-center">
                <h3>The whole world in a photo</h3>
                <form>
                  <div className="row">
                    <div className="col-2" />
                    <div className="col-md-8 col-12">
                      <label className="sr-only" htmlFor="inlineFormInputGroup">
                        Search free photos
                      </label>
                      <div className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="inlineFormInputGroup"
                          placeholder="Search free photos"
                        />
                      </div>
                      <p className="text-left suggested">
                        Suggested: technology, engineering, desk, programming,
                        more
                      </p>
                    </div>
                    <div className="col-2" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end menu */}
        <TopicPical />
        {/* end topic */}
        <div className="container-fluid images">
          <div className="row">
            <div className="column">{this.printImageDataCol1()}</div>
            <div className="column">{this.printImageDataCol2()}</div>
            <div className="column">{this.printImageDataCol3()}</div>
          </div>
        </div>
      </div>
    );
  }
}

Pical.propTypes = {
  picalActionCreators: PropTypes.shape({
    fetchPical: PropTypes.func
  }),
  getData: PropTypes.array
};
const mapStateToProps = state => {
  return {
    getData: state.picalReducers.pical
  };
};

const mapDispatchToProps = dispatch => {
  return {
    picalActionCreators: bindActionCreators(picalActions, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pical);
