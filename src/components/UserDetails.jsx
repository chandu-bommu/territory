import React, { Component } from 'react';
import '../style/App.css';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';


class UserDetails extends Component{

  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      imgSrc: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", //A blank image in case of no image
      display: "none",
      userName: "",
      userIdNumber: "",
      infoStatus: ""
    };
  }

  render = () => {
    return (
      <div className="appComponent">
        <div className="userDetails">
          <div className="header">User Details</div>
          <table>
            <tbody>
              <tr>
                <td style={{width: '360px'}}>
                  <TextField id="userId" label='User ID'
                        value={ this.state.value }  onChanged={ this._onChanged } placeholder='Enter UserID'/>    
                </td>
                <td style={{paddingTop: '30px'}}>
                  <PrimaryButton data-automation-id='getDetailsButton' text='Get Details' onClick={ this.getUserDetails }/>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="userCard" style={{display: this.state.display}}>
            <div className="userImage">
              <img src={this.state.imgSrc} width="190" alt="avtar" />
            </div>
            <div className="userInfo">
              <span id="idSpan">ID: {this.state.userIdNumber}</span>
              <span id="nameSpan">Name: {this.state.userName}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _onChanged = (value) => {
    this.setState({
      value
    });
  }

  getUserDetails = () => {
    if(this.state.value && !isNaN(this.state.value)) {

      fetch(`https://reqres.in/api/users/${this.state.value}`)
          .then( (response) => {
            return response;
          })
          .then( (response) => {
            setTimeout( () => {
              this.setState({
              infoStatus: 'loaded'
            });
            }, 300);
            return response.json();
          })
          .then( (resdata) => {
            this.setState({
              userIdNumber: resdata.data.id,
              userName: `${resdata.data.first_name} ${resdata.data.last_name}`,
              imgSrc: resdata.data.avatar,
              display: "block"         
            });
          })
          .catch( () => {
            alert(`No user exists with UserID: ${this.state.value}`);
            this.setState({display: "none"});
          });

    } else {
      alert("Please enter a valid UserID in a number format");
    }
  }
}

export default UserDetails;
