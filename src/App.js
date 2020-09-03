import React, { Component } from "react";
import logo from "./logo.svg";
import "./index.css";

import "./App.css";
import Login from "./Components/login";

class App extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "0%",
          top: "0%",
        }}
      >
        <Login />
      </div>
    );
  }
}

export default App;
