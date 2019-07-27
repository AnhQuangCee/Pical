import React, { Component } from 'react';
import '../About/css/about.scss';

class TeamDev extends Component {
    render() {
        return (
            <div className="team-development">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <p className="wow fadeIn" data-wow-duration="2s">Creative hub</p>
                            <h4 className="wow fadeInLeft">Team development</h4>
                            <hr />
                            <br></br>
                        </div>
                        <div className="col-8">
                            <i>"We are a hard-working team that is fully focused on high-end
          programs and functional apps for our clients."</i>
                        </div>
                    </div>
                    <div className="row team-info">
                        <div className="col-4 text-center wow bounceInLeft" data-wow-delay="0s" data-wow-duration="1.7s">
                            <div className="image-info">
                                <img src="images/profile.png" alt="true" />
                            </div>
                            <div className="info">
                                <h4>John Switch</h4>
                                <span>Designer</span>
                                <div className="social-icon">
                                    <span><i className="fab fa-facebook-f" /></span>
                                    <span><i className="fab fa-twitter" /></span>
                                    <span><i className="fab fa-flickr" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-center wow fadeIn" data-wow-delay="0s" data-wow-duration="2.5s">
                            <div className="image-info">
                                <img src="images/profile.png" alt="true" />
                            </div>
                            <div className="info">
                                <h4>Flosat</h4>
                                <span>Developer</span>
                                <div className="social-icon">
                                    <span><i className="fab fa-facebook-f" /></span>
                                    <span><i className="fab fa-twitter" /></span>
                                    <span><i className="fab fa-flickr" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 text-center wow bounceInRight" data-wow-delay="0s" data-wow-duration="1.7s">
                            <div className="image-info">
                                <img src="images/profile.png" alt="true" />
                            </div>
                            <div className="info">
                                <h4>Cathy Kate</h4>
                                <span>Analyst</span>
                                <div className="social-icon">
                                    <span><i className="fab fa-facebook-f" /></span>
                                    <span><i className="fab fa-twitter" /></span>
                                    <span><i className="fab fa-flickr" /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamDev;