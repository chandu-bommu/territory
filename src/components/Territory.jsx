import React, { Component } from 'react';
import '../style/App.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
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

  componentWillMount = () => {}

  render = () => {
    return (
      <div className="App-intro">
        <table>
            <tr>
              <td>
                <Dropdown
                  placeHolder='Select a Country'
                  label='COUNTRY'
                  id='Basicdrop1'
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
                <Dropdown
                  placeHolder='Select a State'
                  label='STATE'
                  id='Basicdrop1'
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
                <Dropdown
                  placeHolder='Select a City'
                  label='CITY'
                  id='Basicdrop1'
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
              <Dropdown
                placeHolder='Select Areas'
                selectedKeys={ this.state.selectedItems }
                onChanged={ this.onChangeMultiSelect }
                onFocus={ this._log('onFocus called') }
                onBlur={ this._log('onBlur called') }
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
              <td>
                <div>
                  <Label>Click the button to insert text.</Label>
                  <PrimaryButton
                    data-automation-id='test'
                    text='Add to Table'
                  />
                </div>
              </td>
            </tr>
        </table>
      </div>
    );
  }

  componentDidMount = () => {}

}

export default Territory;
