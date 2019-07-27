import React, { Component } from 'react';
import '../Scenes/About/css/about.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Topic extends Component {
    render() {
        return (
            <div className="topic">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav navbar-default justify-content-center">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item ml-5">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item ml-5">
                                    <Link className="nav-link" to="/">Support</Link>
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