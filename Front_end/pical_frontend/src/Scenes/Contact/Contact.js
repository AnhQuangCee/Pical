import React, { Component } from 'react';
import WOW from 'wowjs';
import Nav from '../../Components/Nav';
import MenuAC from '../../Components/MenuAC';
import Footer from '../../Components/Footer';
import Topic from '../../Components/Topic';
import Form from './Form';

class Contact extends Component {
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
                <Topic></Topic>
                <Form></Form>
                <Footer></Footer>
            </div>
        );
    }
}

export default Contact;