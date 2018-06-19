import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerDropdown = (props) => {

  return (
    <div className='server-dropdown-container'>
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Invite People</div>
          <label className='server-dropdown-index-title'>Invite People</label>
        </div>
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Create Channel</div>
          <label className='server-dropdown-index-title'>Create Channel</label>
        </div>
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Leave Server</div>
          <label className='server-dropdown-index-title'>Leave Server</label>
        </div>
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Delete Server</div>
          <label className='server-dropdown-index-title'>Delete Server</label>
        </div>
    </div>
  );
};

export default withRouter(ServerDropdown);
