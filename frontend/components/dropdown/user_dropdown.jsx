import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserDropdown = (props) => {

  return (
    <div className='user-dropdown-container'>
        <div className='dropdown-index-item' onClick={ props.updateUser }>
          <div className='dropdown-icon'>
            <i className="fas fa-edit"></i>
          </div>
          <label className='dropdown-index-title'>Edit Profile</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item' onClick={ props.logout }>
          <div className='dropdown-icon'>
            <i className="fas fa-sign-out-alt"></i>
          </div>
          <label className='dropdown-index-title'>Logout</label>
        </div>

    </div>
  );
};

export default withRouter(UserDropdown);
