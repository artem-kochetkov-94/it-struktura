import React, { Component } from "react";
import "./App.scss";
import Tasks from "../../containers/Tasks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tasks />
      </div>
    );
  }
}

export default App;
