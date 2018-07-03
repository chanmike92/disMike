import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndexDropdown = (props) => {

    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Instant Invite</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Clone Channel</label>
        </div>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Edit Channel</label>
        </div>
        <div className='dropdown-divider'></div>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Delete Channel</label>
        </div>
      </div>
    );
};

export default withRouter(ChannelIndexDropdown);
