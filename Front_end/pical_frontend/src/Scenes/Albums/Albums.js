import React, { Component } from 'react';
import Nav from '../../Components/Nav';
import WOW from 'wowjs';
import Footer from '../../Components/Footer';
import MenuPAG from '../../Components/MenuPAG';
import './css/albums.scss';
import ImageA from './ImageA';

class Albums extends Component {
    render() {
        return (
            <div>
                <div className="menu">
                    <div className="container-fluid fixed-top">
                        <div className="container">
                            <Nav></Nav>
                        </div>
                    </div>
                </div>
                <MenuPAG></MenuPAG>
                <ImageA></ImageA>
                <Footer></Footer>
            </div>
        );
    }
}

export default Albums;