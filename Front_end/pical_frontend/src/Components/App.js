import React, { Component } from "react";
import ".././App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Root from "../Scenes/Root";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Root></Root>
        </div>
      </Router>
    );
  }
}

export default App;
