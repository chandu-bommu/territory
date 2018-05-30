import React, { Component } from 'react';
import '../style/App.css';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';


class Territory extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: []
    };
  }

  render() {
    return (
      <div className="App-intro">
        <div className="form">
          <table>
              <tr>
                <td>
                  <Dropdown placeHolder='Select a Country' label='COUNTRY' id='countryDrop'
                    ariaLabel='Basic dropdown example'
                    options={
                      [
                        { key: 'A', text: 'Option a' }
                      ]
                    }
                    componentRef={ this._basicDropdown }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a State' label='STATE' id='stateDrop'
                    ariaLabel='Basic dropdown example'
                    options={
                      [
                        { key: 'A', text: 'Option a' }
                      ]
                    }
                    componentRef={ this._basicDropdown }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a City' label='CITY' id='cityDrop'
                    ariaLabel='Basic dropdown example'
                    options={
                      [
                        { key: 'A', text: 'Option a' }
                      ]
                    }
                    componentRef={ this._basicDropdown }
                  />
                </td>
                <td>
                <Dropdown placeHolder='Select Areas' label='AREAS' selectedKeys={ this.state.selectedItems }
                  onChanged={ this.onChangeMultiSelect }
                  multiSelect
                  options={
                    [
                      { key: 'Header4', text: 'Colors', itemType: DropdownMenuItemType.Header },
                      { key: 'red', text: 'Red' },
                      { key: 'green', text: 'Green' },
                      { key: 'blue', text: 'Blue' },
                      { key: 'yellow', text: 'Yellow' },
                      { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
                      { key: 'Header5', text: 'Flower', itemType: DropdownMenuItemType.Header },
                      { key: 'rose', text: 'Rose' },
                      { key: 'lily', text: 'Lily' },
                      { key: 'sunflower', text: 'Sunflower' },
                    ]
                  }
                />
                </td>
              </tr>
              <tr>
                <td>
                    <PrimaryButton data-automation-id='addToTableButton' text='Add to Table' />
                </td>
                <td>
                    <PrimaryButton data-automation-id='clearTableButton' text='Clear Table' />
                </td>
                <td>
                    <DefaultButton data-automation-id='resetButton' text='Reset'/>
                </td>
              </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Territory;
