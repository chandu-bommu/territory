import React, { Component } from 'react';
import './style/App.css';
import Territory from './components/Territory.jsx';
import UserDetails from './components/UserDetails.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="contentDiv">
          <Territory />
          <UserDetails />
        </div>
      </div>
    );
  }
}

export default App;
