import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-5 logo-info">
                            <h2>Pical</h2>
                            <p>@ 2019 All Rights Reserved.</p>
                            <div className="input-group mb-2">
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Give me feedback" />
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-2" />
                        <div className="col-md-4 col-sm-5 contact-info text-right">
                            <p>Phone number: 037 562 4006</p>
                            <p>Email: pical@gmail.com</p>
                            <p>Address: 36 Best Lane, New York</p>
                            <div className="social-icon">
                                <span><i className="fab fa-facebook-f" /></span>
                                <span><i className="fab fa-twitter" /></span>
                                <span><i className="fab fa-flickr" /></span>
                                <span><i className="fab fa-twitter" /></span>
                                <span><i className="fab fa-flickr" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;