import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/assets/css/font-awesome.css';
import Main from "./components/MainComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
