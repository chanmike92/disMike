import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndexDropdown = (props) => {

    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Join a Server</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item' onClick={ props.logout }>
          <label className='dropdown-index-title'>Create a Server</label>
        </div>
      </div>
    );
};

export default withRouter(ChannelIndexDropdown);
