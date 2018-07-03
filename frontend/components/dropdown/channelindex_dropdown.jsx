import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndexDropdown = (props) => {

    // const channelOptions = props.server.owner_id === props.currentUser.id ?
    // <div className='dropdown-index-item'>
    //   <label className='dropdown-index-title'>Clone Channel</label>
    // </div>
    // <div className='dropdown-index-item'>
    //   <label className='dropdown-index-title'>Edit Channel</label>
    // </div>
    // <div className='dropdown-divider'></div>
    // <div className='dropdown-index-item'>
    //   <label className='dropdown-index-title'>Delete Channel</label>
    // </div> : <div></div>;

    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Instant Invite</label>
        </div>
        <div className='dropdown-divider'></div>
        <div>
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
      </div>
    );
};

export default withRouter(ChannelIndexDropdown);
