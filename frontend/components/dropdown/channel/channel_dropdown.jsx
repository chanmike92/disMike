import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelDropdown = (props) => {

  const channelCreate = (props.server.owner_id === props.currentUser.id) ?
  <div className='dropdown-index-item' onClick={ (e) => props.createChannel(e, props.server.id) }>
    <label className='dropdown-index-title'>Create Channel</label>
  </div> : <div></div>;


    return (
      <div className='context-dropdown-index-container'>
        <div className='dropdown-index-item' onClick={ (e) => props.inviteUser(e, props.server.id) }>
          <label className='dropdown-index-title'>Invite Users</label>
        </div>
        { channelCreate }
      </div>
    );
};

export default withRouter(ChannelDropdown);
