import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserDropdown = (props) => {

  return (
    <div className='user-dropdown-container'>
        <div className='user-dropdown-index-item' onClick={ props.updateUser }>
          <div className='user-dropdown-icon'>Invite People</div>
          <label className='user-dropdown-index-title'>Invite People</label>
        </div>
        <div className='user-dropdown-index-item' onClick={ props.logout }>
          <div className='user-dropdown-icon'>Create Channel</div>
          <label className='user-dropdown-index-title'>Create Channel</label>
        </div>

    </div>
  );
};

export default withRouter(UserDropdown);
