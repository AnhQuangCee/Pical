import React, { Component } from 'react';
import '../About/css/about.scss';

class Topic extends Component {
    render() {
        return (
            <div className="topic">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav navbar-default justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">About</a>
                                </li>
                                <li className="nav-item ml-5">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item ml-5">
                                    <a className="nav-link" href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Topic;