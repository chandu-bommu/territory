import React, { Component } from 'react';
import '../style/App.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


class UserDetails extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="userForm">
          <TextField label='Required' required={ true } />
          <PrimaryButton data-automation-id='getDetailsButton' text='Get Details' />
        </div>
        <div className="userCard">
          <div className="userImage">
          </div>
          <div className="userInfo">
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
