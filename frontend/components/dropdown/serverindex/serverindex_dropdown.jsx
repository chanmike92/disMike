import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerIndexDropdown = (props) => {

  const channelCreate = props.server.owner_id === props.currentUserId ?
  <div className='dropdown-index-item' onClick={ () => {
      props.createChannel(props.serverId); } }>
    <div className='dropdown-icon create-channel-icon'></div>
    <label className='dropdown-index-title'>Create Channel</label>
  </div>
  :
  "";

  const serverUpdate = props.server.owner_id === props.currentUserId ?
  <div className='dropdown-index-item' onClick={ () => {
      props.updateServer(props.serverId); } }>
    <div className='dropdown-icon edit-server-icon'></div>
    <label className='dropdown-index-title'>Edit Server</label>
  </div>
  :
  "";

  const deleteServer = props.server.owner_id === props.currentUserId ?
  <div className='dropdown-index-item' onClick={ () => {
      props.deleteServer(props.serverId);
      props.history.push('/@me');
    } }>
    <div className='dropdown-icon delete-server-icon'></div>
    <label className='dropdown-index-title'>Delete Server</label>
  </div>
  :
  <div className='dropdown-index-item' onClick={ () => props.leaveServer(props.serverId) }>
    <div className='dropdown-icon leave-server-icon'></div>
    <label className='dropdown-index-title'>Leave Server</label>
  </div>;


  return (
    <div className={ `context-dropdown-index-container` }>
        <div className='dropdown-index-item' onClick={ () => props.inviteUser(props.serverId) }>
          <div className='dropdown-icon invite-users-icon'></div>
          <label className='dropdown-index-title'>Invite People</label>
        </div>
        <div className='dropdown-divider'></div>
        { channelCreate }
        { serverUpdate }
        { deleteServer }
    </div>
  );
};

export default withRouter(ServerIndexDropdown);
