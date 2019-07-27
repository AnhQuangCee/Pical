import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class TrendingPical extends Component {
    render() {
        return (
            <div>
            <div className="menu">
                    <div className="container-fluid fixed-top">
                        <div className="container">
                            <Nav></Nav>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row search-box">
                            <div className="col-12 text-center">
                                <h3>The whole world in a photo</h3>
                                <form >
                                    <div className="row">
                                        <div className="col-2" />
                                        <div className="col-md-8 col-12">
                                            <label className="sr-only" htmlFor="inlineFormInputGroup">Search free photos</label>
                                            <div className="input-group mb-2">
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search free photos" />
                                            </div>
                                            <p className="text-left suggested">Suggested: technology, engineering, desk, programming, more</p>
                                        </div>
                                        <div className="col-2" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end menu */}
                <div className="topic">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <ul className="nav navbar-default justify-content-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/trending">Trending</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="nav-link" to="/popular">Popular</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="nav-link" to="/creative">Creative</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="nav-link" to="/editorial">Editorial</Link>
                                    </li>
                                    <li className="nav-item ml-5">
                                        <Link className="nav-link" to="/service">Service</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="picture-group">
            <div className="container-fluid">
                <div className="row">
                    <div className="column">
                        <img src="images/background (2).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (4).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (3).png" style={{ width: '100%' }} alt="" />
                        <img src="images/girl1.jpg" style={{ width: '100%' }} alt="" />
                        <img src="images/trang1.png" style={{ width: '100%' }} />
                        <img src="images/background (4).png" style={{ width: '100%' }} alt="" />
                        <img src="images/trang6.jpg" style={{ width: '100%' }} />
                        <img src="images/background (5).png" style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="column">
                        <img src="images/background (3).png" style={{ width: '100%' }} alt="" />
                        <img src="images/trang1.png" style={{ width: '100%' }} />
                        <img src="images/background (6).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (4).png" style={{ width: '100%' }} alt="" />
                        <img src="images/girl1.jpg" style={{ width: '100%' }} />
                        <img src="images/trang6.jpg" style={{ width: '100%' }} />
                        <img src="images/background (7).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (8).png" style={{ width: '100%' }} alt="" />
                    </div>
                    <div className="column">
                        <img src="images/background (7).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (9).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (4).png" style={{ width: '100%' }} alt="" />
                        <img src="images/girl1.jpg" style={{ width: '100%' }} />
                        <img src="images/trang1.png" style={{ width: '100%' }} />
                        <img src="images/background (8).png" style={{ width: '100%' }} alt="" />
                        <img src="images/background (5).png" style={{ width: '100%' }} alt="" />
                        <img src="images/trang6.jpg" style={{ width: '100%' }} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default TrendingPical;