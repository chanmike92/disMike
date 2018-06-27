import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropdownContainer from '../dropdown/user_dropdown_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const dropdownActive = this.props.dropdown === "user" ? "active-spin" : "";
    const online = this.props.currentUser.online_status ? "online-status-icon green-back" : "online-status-icon grey-back";
      return (
        <div className='greeting-container'>
          <UserDropdownContainer
            currentUser={ this.props.currentUser }
            active={ this.props.dropdown }
          />
          <div className='user-image-name'>
            <div className='user-image-icons'>
              <img className='profile-picture' src={ this.props.currentUser.image_url } />
              <div className={ online }></div>
            </div>
            <h1>{ this.props.currentUser.username }</h1>
          </div>
          <button className={`fafaicons-container ${dropdownActive}`} onClick={ this.props.dropdown === 'user' ? this.props.closeDropdown : this.props.openDropdown }>

            <i className="fas fa-cog"></i>
          </button>
        </div>
      );
  }
}

export default Greeting;
