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
      selectedAreas: [],
      countries: [],
      states: [],
      cities: [],
      selectedCountry: "",
      selectedState: "",
      selectedCity: "",
      rows: [],
      count: 0
    };
  }

  render = () => {
    const { selectedItem, selectedAreas, selectedCountry, selectedState, selectedCity } = this.state;
    return (
      <div className="appComponent">
        <div className="countryForm">
          <table>
            <thead>
              <tr>
                <th>COUNTRY</th>
                <th>STATE</th>
                <th>CITY</th>
                <th>AREAS</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Dropdown placeHolder='Select a Country' id='countryDrop'
                    options={this.state.countries}
                    onChanged={ this.onChangeCountry }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a State' id='stateDrop'
                    options={ this.state.states }
                    onChanged={ this.onChangeState }
                  />
                </td>
                <td>
                  <Dropdown placeHolder='Select a City' id='cityDrop'
                    options={ this.state.cities }
                    onChanged={ this.onChangeCity }
                  />
                </td>
                <td>
                  <Dropdown
                    placeHolder='Select Areas'
                    onChanged={ this.onChangeMultiSelect }
                    multiSelect
                    options={ this.state.areas }
                  />
                </td>
                <td>
                    <DefaultButton data-automation-id='resetButton' text='Reset' onClick={this.resetForm}/>
                </td>
              </tr>
              <tr>
                <td colSpan="5" style={{textAlign: 'right'}}>
                    <PrimaryButton id="addButton" data-automation-id='addToTableButton' text='Add to Table' onClick={this.addToTable}/>
                    <PrimaryButton id="clearButton" data-automation-id='clearTableButton' text='Clear Table' onClick={this.clearTable}/>
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
              { this.state.rows }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  addToTable = () => {
    if(this.state.selectedAreas && this.state.selectedAreas.length > 0) {
      this.state.rows.push(
        <tr>
          <td>{this.state.selectedCountry}</td>
          <td>{this.state.selectedState}</td>
          <td>{this.state.selectedCity}</td>
          <td>{this.state.selectedAreas}</td>
        </tr>
      );
      this.setState({count: this.state.count+1});
    } else {
      alert('Please select  "Country > State > City > Areas"  to add to table');
    }
  }

  onChangeCountry = (e) => {
    this.setState({selectedState: "", selectedCity: "", selectedAreas: [], states: [], cities: [], areas: []});
    if(e.key) {
      this.getStatesOfCountry(e.key);
    }
  }

  onChangeState = (e) => {
    this.setState({selectedCity: "", selectedAreas: [], cities: [], areas: []});
    if(e.key) {
      this.getCitiesOfState(e.key);
    }
  }

  onChangeCity = (e) => {
    this.setState({selectedAreas: [], areas: []});
    if(e.key) {
      this.getAreasOfCity(e.key);
    }
  }

  clearTable = () => {
    this.setState({rows: []});
  }

  resetForm = () => {
    this.setState(
      {
        selectedCountry: "",
        selectedState: "",
        selectedCity: "",
        selectedAreas: [],
        states: [],
        cities: [],
        areas: []
      }
    );
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

  onChangeMultiSelect = (item: IDropdownOption): void => {
    const updatedSelectedItem = this.state.selectedAreas ? this.copyArray(this.state.selectedAreas) : [];
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
      selectedAreas: updatedSelectedItem
    });
  }

  copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  }

}

export default Territory;
