import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import UserDropdownContainer from '../dropdown/user_dropdown_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {

    const userDropdown = this.props.dropdown === "user" ? <UserDropdownContainer
      currentUser={ this.props.currentUser }
      /> : "";

      return (
        <div className='greeting-container'>
          { userDropdown }
          <div className='user-image-name'>
            <img className='profile-picture' src={ this.props.currentUser.image_url } />
            <h1>{ this.props.currentUser.username }</h1>
          </div>
          <button className='fafaicons-container' onClick={ this.props.dropdown === 'user' ? this.props.closeDropdown : this.props.openDropdown }>
            <i className="fas fa-cogs"></i>
          </button>
        </div>
      );
  }
}

export default Greeting;
