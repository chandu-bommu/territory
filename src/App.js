import React, { Component } from 'react';
import logo from './assets/India_territory_map.png';
import './App.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Territories</h1>
        </header>
        <Dropdown
          placeHolder='Select an Option'
          label='Basic uncontrolled example:'
          id='Basicdrop1'
          ariaLabel='Basic dropdown example'
          options={
            [
              { key: 'Header', text: 'Actions', itemType: DropdownMenuItemType.Header },
              { key: 'A', text: 'Option a' },
              { key: 'B', text: 'Option b' },
              { key: 'C', text: 'Option c', disabled: true },
              { key: 'D', text: 'Option d' },
              { key: 'E', text: 'Option e' },
              { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
              { key: 'Header2', text: 'People', itemType: DropdownMenuItemType.Header },
              { key: 'F', text: 'Option f' },
              { key: 'G', text: 'Option g' },
              { key: 'H', text: 'Option h' },
              { key: 'I', text: 'Option i' },
              { key: 'J', text: 'Option j' },
            ]
          }
          componentRef={ this._basicDropdown }
        />
        <PrimaryButton
          text='Set focus'
          onClick={ this._onSetFocusButtonClicked }
        />        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
