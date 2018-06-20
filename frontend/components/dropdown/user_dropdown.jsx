import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserDropdown = (props) => {

  return (
    <div className='user-dropdown-container'>
        <div className='user-dropdown-index-item' onClick={ props.updateUser }>
          <div className='user-dropdown-icon'>Edit Profile</div>
          <label className='user-dropdown-index-title'>Edit Profile</label>
        </div>
        <div className='user-dropdown-index-item' onClick={ props.logout }>
          <div className='user-dropdown-icon'>Logout</div>
          <label className='user-dropdown-index-title'>Logout</label>
        </div>

    </div>
  );
};

export default withRouter(UserDropdown);
