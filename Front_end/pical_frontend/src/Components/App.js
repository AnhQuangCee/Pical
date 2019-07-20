import React, { Component } from 'react';
import '.././App.css';
// import Pical from '../Scenes/Pical/Pical';
import About from '../Scenes/About/About';
import Contact from '../Scenes/Contact/Contact';
import Blogs from '../Scenes/Blogs/Blogs';
import Profile from '../Scenes/Profile/Profile';
import Albums from '../Scenes/Albums/Albums';
import Gallery from '../Scenes/Gallery/Gallery';

class App extends Component {
  render() {
    return (
      <div>
          {/* <Pical></Pical> */}
          {/* <About></About> */}
          {/* <Contact></Contact> */}
          {/* <Blogs></Blogs> */}
          {/* <Profile></Profile> */}
          {/* <Albums></Albums> */}
          <Gallery></Gallery>
      </div>
    );
  }
}

export default App;
