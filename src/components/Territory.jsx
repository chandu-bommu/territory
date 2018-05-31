import React, { Component } from 'react';
import '../style/App.css';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dropdown, IDropdown, DropdownMenuItemType, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import countryData from '../data/countrydataset.json';


class Territory extends Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: ""
    };
  }

  componentWillMount = () => {
  }

  render = () => {
    const { selectedItem, selectedItems, selectedCountry, selectedState, selectedCity } = this.state;
    return (
      <div className="App-intro">
        <div className="form">
          <table>
            <tbody>
              <tr>
                <td>
                  <Dropdown placeHolder='Select a Country' label='Select COUNTRY' id='countryDrop'
                    options={this.state.countries}
                    onChanged={ this.onChangeCountry }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a State' label='Select STATE' id='stateDrop'
                    options={ this.state.states }
                    onChanged={ this.onChangeState }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a City' label='Select CITY' id='cityDrop'
                    options={ this.state.cities }
                    onChanged={ this.onChangeCity }
                  />
                </td>
                <td>
                  <Dropdown
                    placeHolder='Select Areas'
                    label='Select AREAS'
                    selectedKeys={ selectedItems }
                    onChanged={ this.onChangeMultiSelect }
                    onFocus={ this.log('onFocus called') }
                    onBlur={ this.log('onBlur called') }
                    multiSelect
                    options={ this.state.areas }
                  />
                </td>
              </tr>
              <tr>
                <td>
                    <PrimaryButton data-automation-id='addToTableButton' text='Add to Table' onClick={this.addToTable}/>
                </td>
                <td>
                    <PrimaryButton data-automation-id='clearTableButton' text='Clear Table' onClick={this.clearTable}/>
                </td>
                <td>
                    <DefaultButton data-automation-id='resetButton' text='Reset' onClick={this.resetForm}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="countryTable">
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>State</th>
                <th>City</th>
                <th>Areas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.selectedCountry}</td>
                <td>{this.state.selectedState}</td>
                <td>{this.state.selectedCity}</td>
                <td>{this.state.selectedItems.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  onChangeCountry = (e) => {
    this.setState({states: [], cities: [], areas: []});
    if(e.key) {
      this.getStatesOfCountry(e.key);
    }
  }

  onChangeState = (e) => {
    this.setState({cities: [], areas: []});
    if(e.key) {
      this.getCitiesOfState(e.key);
    }
  }

  onChangeCity = (e) => {
    this.setState({areas: []});
    if(e.key) {
      this.getAreasOfCity(e.key);
    }
  }

  addToTable = () => {
    console.log(this.state.selectedCountry,this.state.selectedState,this.state.selectedCity,this.state.selectedItems);
  }

  clearTable = () => {
    console.log("clearTable");
  }

  resetForm = () => {
    this.setState({states: [], cities: [], areas: []});
  }

  componentDidMount = () => {
    const countries = countryData.countries.map((item) => {
      return { key: item.country, text: item.country}
    });
    this.setState({countries});
  }

  getStatesOfCountry = (country) => {
    countryData.countries.map((item) => {
      if(country === item.country) {
        const states = item.states.map((stateItem) =>
        {
            return { key: stateItem.state, text: stateItem.state};
        });
        this.setState({ states: states, selectedCountry: country });
      }
      return [];
    });
  }

  getCitiesOfState = (state) => {
    countryData.countries.map((item) => {
      if(this.state.selectedCountry === item.country) {
        item.states.map((stateItem) =>
        {
          if(state === stateItem.state) {
            const cities = stateItem.cities.map((cityItem) =>
            {
                return { key: cityItem.city, text: cityItem.city};
            });
            this.setState({ cities: cities, selectedState: state });
          }
            return [];
        });
      }
      return [];
    });
  }

  getAreasOfCity = (city) => {
    countryData.countries.map((item) => {
      if(this.state.selectedCountry === item.country) {
        item.states.map((stateItem) =>
        {
          if(this.state.selectedState === stateItem.state) {
            stateItem.cities.map((cityItem) =>
            {
              if(city === cityItem.city) {
                const areas =  cityItem.areas.map((areaItem) =>
                {
                    return { key: areaItem, text: areaItem};
                });
                this.setState({ areas: areas, selectedCity: city });
              }
                return[];
            });
          }
            return [];
        });
      }
      return [];
    });
  }

  changeState = (item: IDropdownOption): void => {
    console.log('here is the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  }

  onChangeMultiSelect = (item: IDropdownOption): void => {
    const updatedSelectedItem = this.state.selectedItems ? this.copyArray(this.state.selectedItems) : [];
    if (item.selected) {
      // add the option if it's checked
      updatedSelectedItem.push(item.key);
    } else {
      // remove the option if it's unchecked
      const currIndex = updatedSelectedItem.indexOf(item.key);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItems: updatedSelectedItem
    });
  }

  copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  }

  log(str: string): () => void {
    return (): void => {
      console.log(str);
    };
  }
}

export default Territory;
