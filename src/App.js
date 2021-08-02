import React, { Component } from "react";
import "./App.css";
import ValidationForm from "./components/formvalidator";

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationForm />
      </div>
    );
  }
}

export default App;