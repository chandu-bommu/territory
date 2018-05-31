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
        <Territory />
        <UserDetails />
      </div>
    );
  }
}

export default App;
