import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndexDropdown = (props) => {

    const channelOptions = props.server.owner_id === props.currentUser.id ?
    <div>
      <div className='dropdown-index-item' onClick={() => {
          props.cloneChannel(props.channel, props.serverId);}}>
        <label className='dropdown-index-title'>Clone Channel</label>
      </div>
      <div className='dropdown-index-item' onClick={() => {
          props.updateChannel(props.channel.id);} }>
        <label className='dropdown-index-title'>Edit Channel</label>
      </div>
      <div className='dropdown-divider'></div>
      <div className='dropdown-index-item' onClick={() => {
          props.deleteChannel(props.channel.id);} }>
        <label className='dropdown-index-title'>Delete Channel</label>
      </div>
    </div> : <div></div>;

    return (
      <div className='server-index-dropdown-container'>
        <div className='dropdown-index-item'>
          <label className='dropdown-index-title'>Instant Invite</label>
        </div>
        <div className='dropdown-divider'></div>
        { channelOptions }
      </div>
    );
};

export default withRouter(UserIndexDropdown);
