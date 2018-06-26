import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropdownContainer from '../dropdown/user_dropdown_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const dropdownActive = this.props.dropdown === "user" ? "active-spin" : "";

      return (
        <div className='greeting-container'>
          <UserDropdownContainer
            currentUser={ this.props.currentUser }
            active={ this.props.dropdown }
          />
          <div className='user-image-name'>
            <img className='profile-picture' src={ this.props.currentUser.image_url } />
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
