import React, { Component } from "react";
import "./css/globalLoading.scss";
import anime from "animejs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as uiAction from "../../actions/ui";

class GlobalLoading extends Component {
  componentDidMount() {
    this.anime();
  }
  componentDidUpdate() {
    this.anime();
  }

  anime = () => {
    const svgLogo = document.querySelectorAll(".global-loading .logo path");
    const svgCircle = document.querySelectorAll(
      ".global-loading polygon, circle, .path"
    );
    const svgPath = document.querySelectorAll(
      ".global-loading .logo-title path"
    );

    const svgLogoAnimate = anime({
      targets: svgLogo,
      loop: true,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 700,
      delay: (el, i) => {
        return i * 500;
      },
      fill: ["rgba(0,0,0,0)", "#ffffff"]
    });

    const svgCircleAnimate = anime({
      targets: svgCircle,
      loop: true,
      direction: "alternate",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 700,
      delay: (el, i) => {
        return i * 500;
      },
      fill: ["rgba(0,0,0,0)", "#ffffff"]
    });
  };
  render() {
    const { showLoading } = this.props;
    let xhtml = null;
    if (!showLoading) {
      xhtml = (
        <div>
          <div className="global-loading">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="logo-svg">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 152.69 152.8"
                    >
                      <defs></defs>
                      <title>Untitled-1</title>
                      <g className="logo">
                        <path
                          className="cls-1"
                          d="M115.3,13V52L45.46,12A76.52,76.52,0,0,1,115.3,13Z"
                          transform="translate(-3 -4.01)"
                        />
                        <path
                          className="cls-1"
                          d="M73.22,34.9,3.13,75.74a76.34,76.34,0,0,1,36.18-60.4Z"
                          transform="translate(-3 -4.01)"
                        />
                        <path
                          className="cls-1"
                          d="M155.69,84.4a76.4,76.4,0,0,1-38.1,62.21L83.08,126.68Z"
                          transform="translate(-3 -4.01)"
                        />
                        <path
                          className="cls-1"
                          d="M155.68,76.4,121.29,96.06l.08-79.49A76.24,76.24,0,0,1,155.68,76.4Z"
                          transform="translate(-3 -4.01)"
                        />
                        <path
                          className="cls-1"
                          d="M36.59,62.5l-.09,81.14A76.31,76.31,0,0,1,3,81.69Z"
                          transform="translate(-3 -4.01)"
                        />
                        <path
                          className="cls-1"
                          d="M111.88,149.56a76.61,76.61,0,0,1-57.7,3v-36Z"
                          transform="translate(-3 -4.01)"
                        />
                        <circle
                          className="cls-1"
                          cx="75.48"
                          cy="75.48"
                          r="26.38"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.protoTypes = {
  showLoading: PropTypes.bool,
  uiActionCreators: PropTypes.shape({
    showLoading: PropTypes.func
  })
};
const mapStateToProps = (state, ownProps) => {
  return {
    showLoading: state.ui.showLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uiActionCreators: bindActionCreators(uiAction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalLoading);
