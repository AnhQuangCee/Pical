import React, { Component } from 'react';
import '../Scenes/Profile/css/profile.scss';

class MenuPAG extends Component {
    render() {
        return (
            <div className="topic">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-12">
                  <div className="image-block">
                    <div className="circular--portrait ">
                      <img src="images/trang6.jpg" alt="true" />
                    </div>
                    <div className="name">Cathy Kane</div>
                  </div>
                </div>
                <div className="col-md-8 col-12 navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarShow" aria-controls="navbarShow" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-caret-down" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarShow">
                    <ul className="nav navbar-default justify-content-center">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">Profile<span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item ml-5">
                        <a className="nav-link" href="#">Albums</a>
                      </li>
                      <li className="nav-item ml-5">
                        <a className="nav-link" href="#">Galleries</a>
                      </li>
                      <li className="nav-item ml-5">
                        <a className="nav-link" href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
    }
}

export default MenuPAG;