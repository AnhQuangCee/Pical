import React, { Component } from "react";
import "./css/nav.scss";
import anime from "animejs";

class MenuAC extends Component {
  componentDidMount() {
    this.anime();
  }

  componentDidUpdate() {
    this.anime();
  }
  anime = () => {
    var art1 = document.querySelector("rect.cls-1");
    var art2 = document.querySelector("line.cls-1");
    var art3 = document.querySelector("line.short");
    var text1 = document.querySelectorAll("path");
    var text2 = document.querySelectorAll(".g3 path");
    // var cdtimeline = anime.timeline();

    anime({
      targets: text1,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function(el, i) {
        return i * 250;
      }
      // direction: 'alternate',
    });
    anime({
      targets: art1,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 3000,
      delay: function(el, i) {
        return i * 250;
      },
      easing: "easeOutSine"
      // direction:'alternate',
    });
    anime({
      targets: art2,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 3000,
      delay: function(el, i) {
        return i * 250;
      },
      easing: "easeOutSine"
      // direction:'alternate',
    });
    anime({
      targets: art3,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 3000,
      delay: function(el, i) {
        return i * 250;
      },
      easing: "easeOutSine"
      // direction:'alternate',
    });
    anime({
      targets: text2,
      opacity: 0,
      duration: 3000,
      delay: function(el, i) {
        return i * 250;
      },
      opacity: 1
      // direction:'alternate',
    });
  };
  render() {
    return (
      <div className="container svg">
        <div className="row">
          <div className="col-12">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              width={990}
              height={500}
              viewBox="50 -220 1000 600"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t\t\t\t\t\t\t.cls-1 {\n\t\t\t\t\t\t\t\tfill: none;\n\t\t\t\t\t\t\t\tstroke-width: 3px;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.cls-1, .cls-2 {\n\t\t\t\t\t\t\t\tstroke: #000;\n\t\t\t\t\t\t\t\tstroke-miterlimit: 10;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.cls-2 {\n\t\t\t\t\t\t\t\tfill: #fff;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t"
                  }}
                />
              </defs>
              <rect
                className="cls-1"
                x={114}
                y="1.5"
                width={429}
                height={207}
                rx={5}
              />
              <line className="cls-1" y1="178.5" x2={1039} y2="178.5" />
              <line
                className="cls-1 short"
                x1="543.5"
                y1="60.5"
                x2="824.5"
                y2="60.5"
              />
              <g>
                <path
                  className="cls-2"
                  d="M159.74,61.37H146.3V53.45h36.6v7.92H169.46V95.45h-9.72Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M226.64,53.45v42h-9.72V78.23H197.84V95.45h-9.72v-42h9.72V70h19.08V53.45Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M269.12,87.65v7.8H236.6v-42h31.74v7.8H246.26v9.12h19.5v7.56h-19.5v9.72Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M357.32,53.45l-13.74,42H333.14L323.9,67l-9.54,28.44H304l-13.8-42h10.08L309.74,83l9.9-29.52h9l9.6,29.76L348,53.45Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M401.24,53.45v42h-9.72V78.23H372.44V95.45h-9.72v-42h9.72V70h19.08V53.45Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M419.75,93.35a20.93,20.93,0,0,1-8.22-7.77,22.34,22.34,0,0,1,0-22.26,20.93,20.93,0,0,1,8.22-7.77,26,26,0,0,1,23.55,0,21.42,21.42,0,0,1,0,37.8,26,26,0,0,1-23.55,0Zm18.51-7.17A12.27,12.27,0,0,0,443,81.41a15,15,0,0,0,0-13.92,12.27,12.27,0,0,0-4.71-4.77,14.06,14.06,0,0,0-13.44,0,12.27,12.27,0,0,0-4.71,4.77,15,15,0,0,0,0,13.92,12.27,12.27,0,0,0,4.71,4.77,14.06,14.06,0,0,0,13.44,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M461.84,53.45h9.72V87.53h21.06v7.92H461.84Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M530.6,87.65v7.8H498.08v-42h31.74v7.8H507.74v9.12h19.5v7.56h-19.5v9.72Z"
                  transform="translate(-0.5 -4)"
                />
              </g>
              <g>
                <path
                  className="cls-2"
                  d="M214.52,126.45l-13.74,42H190.34L181.1,140l-9.54,28.44H161.18l-13.8-42h10.08L166.94,156l9.9-29.52h9l9.6,29.76,9.78-29.76Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M228,166.35a20.93,20.93,0,0,1-8.22-7.77,22.34,22.34,0,0,1,0-22.26,20.93,20.93,0,0,1,8.22-7.77,26,26,0,0,1,23.55,0,21.42,21.42,0,0,1,0,37.8,26,26,0,0,1-23.55,0Zm18.51-7.17a12.27,12.27,0,0,0,4.71-4.77,15,15,0,0,0,0-13.92,12.27,12.27,0,0,0-4.71-4.77,14.06,14.06,0,0,0-13.44,0,12.27,12.27,0,0,0-4.71,4.77,15,15,0,0,0,0,13.92,12.27,12.27,0,0,0,4.71,4.77,14.06,14.06,0,0,0,13.44,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M296.84,168.45l-8.1-11.7H279.8v11.7h-9.72v-42h18.18a23.33,23.33,0,0,1,9.69,1.86,14.4,14.4,0,0,1,6.33,5.28,14.55,14.55,0,0,1,2.22,8.1A13.68,13.68,0,0,1,297.86,155l9.42,13.5Zm-2.46-32.19q-2.28-1.89-6.66-1.89H279.8V149h7.92q4.38,0,6.66-1.92a7.57,7.57,0,0,0,0-10.83Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M314.18,126.45h9.72v34.08H345v7.92H314.18Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  className="cls-2"
                  d="M350.42,126.45H369.5a26.82,26.82,0,0,1,12.09,2.61,19.54,19.54,0,0,1,8.16,7.35,22.4,22.4,0,0,1,0,22.08,19.54,19.54,0,0,1-8.16,7.35,26.82,26.82,0,0,1-12.09,2.61H350.42Zm18.6,34q6.3,0,10.05-3.51a13.93,13.93,0,0,0,0-19q-3.75-3.51-10.05-3.51h-8.88v26Z"
                  transform="translate(-0.5 -4)"
                />
              </g>
              <g className="g3">
                <path
                  d="M584.94,124.09a3,3,0,0,1-.9-2.16,2.88,2.88,0,0,1,.9-2.1,3,3,0,0,1,2.22-.9,3.07,3.07,0,0,1,2.22.87,2.78,2.78,0,0,1,.9,2.07,3.14,3.14,0,0,1-5.34,2.22Zm.06,7.8h4.26v31.56H585Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M626.67,135.1q3.51,3.45,3.51,10.05v18.3h-4.26V145.57q0-4.92-2.46-7.5t-7-2.58a10.78,10.78,0,0,0-8.07,3q-3,3-3,8.37v16.56h-4.26V131.89h4.08v5.82a11.85,11.85,0,0,1,4.83-4.47,15.46,15.46,0,0,1,7.17-1.59Q623.16,131.65,626.67,135.1Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M674.1,161.53a8.07,8.07,0,0,1-3,1.65,12,12,0,0,1-3.69.57q-4.44,0-6.84-2.4a9.17,9.17,0,0,1-2.4-6.78V135.49h-5.64v-3.6h5.64V125h4.26v6.9h9.6v3.6h-9.6v18.84a6,6,0,0,0,1.41,4.29,5.35,5.35,0,0,0,4,1.47,7.84,7.84,0,0,0,2.55-.42,6.34,6.34,0,0,0,2.13-1.2Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M707.37,135.1q3.51,3.45,3.51,10.05v18.3h-4.26V145.57q0-4.92-2.46-7.5t-7-2.58a10.78,10.78,0,0,0-8.07,3q-3,3-3,8.37v16.56h-4.26V118.93h4.26v18.48a11.55,11.55,0,0,1,4.8-4.26,15.75,15.75,0,0,1,7-1.5Q703.86,131.65,707.37,135.1Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M750.06,149h-26.4a11.28,11.28,0,0,0,3.78,7.95,12.55,12.55,0,0,0,8.64,3,13.61,13.61,0,0,0,5.4-1.05,11.8,11.8,0,0,0,4.26-3.09l2.4,2.76a13.51,13.51,0,0,1-5.25,3.84,17.76,17.76,0,0,1-6.93,1.32,17.52,17.52,0,0,1-8.61-2.07A14.92,14.92,0,0,1,721.5,156a16.34,16.34,0,0,1-2.1-8.28,16.91,16.91,0,0,1,2-8.28,14.55,14.55,0,0,1,5.52-5.7,15.41,15.41,0,0,1,7.89-2,15.25,15.25,0,0,1,7.86,2,14.46,14.46,0,0,1,5.46,5.67,17.07,17.07,0,0,1,2,8.31Zm-22.89-10.77a11.43,11.43,0,0,0-3.51,7.59H746a11.43,11.43,0,0,0-3.51-7.59,11.59,11.59,0,0,0-15.36,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M798.84,133.66a14.37,14.37,0,0,1,5.64,5.67,18.19,18.19,0,0,1,0,16.74,14.43,14.43,0,0,1-5.61,5.67,16.16,16.16,0,0,1-8.07,2,14.92,14.92,0,0,1-6.93-1.59,13.13,13.13,0,0,1-5.07-4.65v17.58h-4.26v-43.2h4.08v6.24a13.12,13.12,0,0,1,5.07-4.8,14.87,14.87,0,0,1,7.11-1.68A16.21,16.21,0,0,1,798.84,133.66Zm-2.34,24.78a10.81,10.81,0,0,0,4.23-4.35,13.24,13.24,0,0,0,1.53-6.42,13.07,13.07,0,0,0-1.53-6.39,11.06,11.06,0,0,0-4.23-4.35,12.38,12.38,0,0,0-12,0,11.13,11.13,0,0,0-4.2,4.35,13.07,13.07,0,0,0-1.53,6.39,13.24,13.24,0,0,0,1.53,6.42,10.87,10.87,0,0,0,4.2,4.35,12.59,12.59,0,0,0,12,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M840.75,135.1q3.51,3.45,3.51,10.05v18.3H840V145.57q0-4.92-2.46-7.5t-7-2.58a10.78,10.78,0,0,0-8.07,3q-3,3-3,8.37v16.56h-4.26V118.93h4.26v18.48a11.55,11.55,0,0,1,4.8-4.26,15.75,15.75,0,0,1,7-1.5Q837.24,131.65,840.75,135.1Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M860.64,161.68a15.1,15.1,0,0,1-5.76-5.73,17.37,17.37,0,0,1,0-16.56,14.88,14.88,0,0,1,5.76-5.7,17.58,17.58,0,0,1,16.44,0,14.67,14.67,0,0,1,5.73,5.7,17.59,17.59,0,0,1,0,16.56,14.88,14.88,0,0,1-5.73,5.73,17.36,17.36,0,0,1-16.44,0Zm14.25-3.24a10.67,10.67,0,0,0,4.17-4.35,14.49,14.49,0,0,0,0-12.84,10.67,10.67,0,0,0-4.17-4.35,12.65,12.65,0,0,0-12.06,0,10.87,10.87,0,0,0-4.2,4.35,14.23,14.23,0,0,0,0,12.84,10.87,10.87,0,0,0,4.2,4.35,12.65,12.65,0,0,0,12.06,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M910.2,161.53a8.07,8.07,0,0,1-3,1.65,12,12,0,0,1-3.69.57q-4.44,0-6.84-2.4a9.17,9.17,0,0,1-2.4-6.78V135.49h-5.64v-3.6h5.64V125h4.26v6.9h9.6v3.6h-9.6v18.84a6,6,0,0,0,1.41,4.29,5.35,5.35,0,0,0,4,1.47,7.84,7.84,0,0,0,2.55-.42,6.34,6.34,0,0,0,2.13-1.2Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M921.48,161.68a15.1,15.1,0,0,1-5.76-5.73,17.37,17.37,0,0,1,0-16.56,14.88,14.88,0,0,1,5.76-5.7,17.58,17.58,0,0,1,16.44,0,14.67,14.67,0,0,1,5.73,5.7,17.59,17.59,0,0,1,0,16.56,14.88,14.88,0,0,1-5.73,5.73,17.36,17.36,0,0,1-16.44,0Zm14.25-3.24a10.67,10.67,0,0,0,4.17-4.35,14.49,14.49,0,0,0,0-12.84,10.67,10.67,0,0,0-4.17-4.35,12.65,12.65,0,0,0-12.06,0,10.87,10.87,0,0,0-4.2,4.35,14.23,14.23,0,0,0,0,12.84,10.87,10.87,0,0,0,4.2,4.35,12.65,12.65,0,0,0,12.06,0Z"
                  transform="translate(-0.5 -4)"
                />
                <path
                  d="M955.53,162.64a15.81,15.81,0,0,1-5.49-2.79l1.92-3.36a16.17,16.17,0,0,0,5,2.55,19.78,19.78,0,0,0,6.24,1q4.32,0,6.39-1.35a4.3,4.3,0,0,0,2.07-3.81,3.43,3.43,0,0,0-1.14-2.73,7.57,7.57,0,0,0-2.88-1.5,41.08,41.08,0,0,0-4.62-1,53,53,0,0,1-6.18-1.47,9.08,9.08,0,0,1-4-2.55,7.09,7.09,0,0,1-1.65-5,7.8,7.8,0,0,1,3.3-6.48q3.3-2.52,9.18-2.52a23.83,23.83,0,0,1,6.12.81,16.84,16.84,0,0,1,5,2.13L973,138a15.93,15.93,0,0,0-9.3-2.7,10.78,10.78,0,0,0-6.15,1.44,4.41,4.41,0,0,0-2.07,3.78,3.73,3.73,0,0,0,1.17,2.88,7.2,7.2,0,0,0,2.91,1.59,47,47,0,0,0,4.8,1.05,55.22,55.22,0,0,1,6.06,1.44,8.9,8.9,0,0,1,3.9,2.46,6.77,6.77,0,0,1,1.62,4.8,7.63,7.63,0,0,1-3.45,6.57q-3.45,2.43-9.57,2.43A24.23,24.23,0,0,1,955.53,162.64Z"
                  transform="translate(-0.5 -4)"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default MenuAC;
