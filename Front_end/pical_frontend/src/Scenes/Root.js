import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Pical from './Pical/Pical';
import Contact from './Contact/Contact';
import About from './About/About';
import Profile from './Profile/Profile';
import Albums from './Albums/Albums';
import Gallery from './Gallery/Gallery';
import Blogs from './Blogs/Blogs';
import Signup from './Signup/Signup';
import TrendingPical from './Pical/TrendingPical';
import Popular from './Pical/Popular';
import Creative from './Pical/Creative';
import Service from './Pical/Service';
import Editorial from './Pical/Editorial';

class Root extends Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={TrendingPical}></Route>
                <Route path='/contact' exact component={Contact}></Route>
                <Route path='/about' exact component={About}></Route>
                <Route path='/profile' exact component={Profile}></Route>
                <Route path='/albums' exact component={Albums}></Route>
                <Route path='/gallery' exact component={Gallery}></Route>
                <Route path='/blogs' exact component={Blogs}></Route>
                <Route path='/signup' exact component={Signup}></Route>
                <Route path='/trending' exact component={TrendingPical}></Route>
                <Route path='/popular' exact component={Popular}></Route>
                <Route path='/creative' exact component={Creative}></Route>
                <Route path='/editorial' exact component={Editorial}></Route>
                <Route path='/service' exact component={Service}></Route>
            </div>
        );
    }
}

export default Root;