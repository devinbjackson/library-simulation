import React, { Component } from 'react';
import router from "./router";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App maroon-bg flex-centered">
       {router}
      </div>
    );
  }
}

export default App;
