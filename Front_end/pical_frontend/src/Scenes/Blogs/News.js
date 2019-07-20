import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
            <div className="">
                <h2 className="text-center wow bounceInDown">BLOGS</h2>
                <div className="row">
                    <div className="col-md-1 col-sm-12">
                        <h4 className="wow fadeInLeft">News</h4>
                    </div>
                    <div className="col-md-7 col-sm-12">
                        <hr />
                    </div>
                    <div className="col-md-4 col-sm-12" />
                </div>
                <div className="row news">
                    <div className="col-md-8 col-12 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <img src="images/background (5).png" style={{ width: '100%' }} />
                                <div className="row">
                                    <div className="col-md-2 col-3 text-center">
                                        <img src="images/profile.png" alt="true" style={{ width: '70%' }} />
                                    </div>
                                    <div className="col-md-10 col-9">
                                        <p className="titles">Announcing the Winners of our ‘Good Panda’</p>
                                        <p className="time">May 9, 2019</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-inline wow fadeInRight">
                        <div className="row">
                            <div className="col-md-12 col-sm-6 ">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="images/background (2).png" style={{ width: '100%' }} />
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <img src="images/profile.png" alt="true" style={{ width: '80%' }} />
                                            </div>
                                            <div className="col-9">
                                                <p className="title">Announcing the Winners of our ‘Good Panda’</p>
                                                <p className="time">May 9, 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-6 ">
                                <div className="card">
                                    <div className="card-body">
                                        <img src="images/background (2).png" style={{ width: '100%' }} />
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <img src="images/profile.png" alt="true" style={{ width: '80%' }} />
                                            </div>
                                            <div className="col-9">
                                                <p className="title">Announcing the Winners of our ‘Good Panda’</p>
                                                <p className="time">May 9, 2019</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default News;