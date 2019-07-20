import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import MenuAC from '../../Components/MenuAC';
import WOW from 'wowjs';
import Footer from '../../Components/Footer';
import News from './News';
import './css/blog.scss';
import Trending from './Trending';
import Tutorials from './Tutorials';

class Blogs extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div>
                <div className="menu">
                    <div className="container-fluid fixed-top">
                        <div className="container">
                            <Nav></Nav>
                        </div>
                    </div>
                    <MenuAC></MenuAC>
                </div>
                <div className="blog">
                    <div className="container">
                        <News></News>
                        <Trending></Trending>
                        <Tutorials></Tutorials>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Blogs;