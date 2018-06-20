import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerDropdown = (props) => {
  const channelCreate = props.server.owner_id === props.currentUserId ?
  <div className='server-dropdown-index-item'>
    <div className='server-dropdown-icon'>Create Channel</div>
    <label className='server-dropdown-index-title'>Create Channel</label>
  </div>
  :
  "";

  const deleteServer = props.server.owner_id === props.currentUserId ?
  <div className='server-dropdown-index-item'>
    <div className='server-dropdown-icon'>Delete Server</div>
    <label className='server-dropdown-index-title'>Delete Server</label>
  </div>
  :
  "";


  return (
    <div className='server-dropdown-container'>
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Invite People</div>
          <label className='server-dropdown-index-title'>Invite People</label>
        </div>
        { channelCreate }
        <div className='server-dropdown-index-item'>
          <div className='server-dropdown-icon'>Leave Server</div>
          <label className='server-dropdown-index-title'>Leave Server</label>
        </div>
        { deleteServer }
    </div>
  );
};

export default withRouter(ServerDropdown);
