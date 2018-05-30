import React, { Component } from 'react';
import logo from './assets/India_territory_map.png';
import './style/App.css';
import Territory from './components/Territory.jsx';
import UserDetails from './components/UserDetails.jsx';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Territories</h1>
        </header>
        <Territory />
        <UserDetails />
      </div>
    );
  }
}

export default App;
