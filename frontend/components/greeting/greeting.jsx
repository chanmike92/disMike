import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropdownContainer from '../dropdown/user/user_dropdown_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    const dropdownActive = this.props.dropdown === "user" ? "active-spin" : "";
    const online = this.props.currentUser.online_status ? "online-status-icon green-back" : "online-status-icon grey-back";
      return (
        <div className='greeting-container' onContextMenu={ this.props.handleNoContextClick }>
          <UserDropdownContainer
            currentUser={ this.props.currentUser }
            active={ this.props.dropdown }
          />
          <div className='user-image-name'>
            <div className='user-image-icons'>
              <img className='profile-picture' src={ this.props.currentUser.image_url } />
              <div className={ online }></div>
            </div>
            <div className='user-info-container'>
              <div className='user-info-username'>{ this.props.currentUser.username }</div>
              <div className='user-info-id'>#{ this.props.currentUser.id }</div>
            </div>
          </div>
          <button className={`fafaicons-container ${dropdownActive}`}
            onClick={ this.props.dropdown === 'user' ? this.props.closeDropdown : this.props.openDropdown }
            onContextMenu={ this.props.dropdown === 'user' ? this.props.closeDropdown : this.props.openDropdown }
          >

            <i className="fas fa-cog"></i>
          </button>
        </div>
      );
  }
}

export default Greeting;
