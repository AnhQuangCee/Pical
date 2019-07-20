import React, { Component } from 'react';

class Tutorials extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="row trending-title">
                        <div className="col-md-1">
                            <h4 className="wow fadeInLeft">Tutorials</h4>
                        </div>
                        <div className="col-md-7">
                            <hr />
                        </div>
                        <div className="col-md-4" />
                    </div>
                    <div className="row tutorials">
                        <div className="col-md-4 col-sm-6 wow fadeInUp">
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
                        <div className="col-md-4 col-sm-6 wow fadeInUp">
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
                        <div className="col-md-4 col-sm-6 hidden-smart wow fadeInUp">
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
        );
    }
}

export default Tutorials;