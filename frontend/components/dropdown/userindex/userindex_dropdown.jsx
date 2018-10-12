import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndexDropdown = (props) => {

  const serverOptions = props.server.owner_id === props.currentUser.id ?
    <div className='dropdown-index-item' onClick={() => {
        props.deleteChannel(props.channel.id);} }>
      <label className='dropdown-index-title'>Kick</label>
    </div>
  :
  <div></div>;

  const friendAction = props.currentUser.friends_id.includes(props.user.id) ?
    <div className='dropdown-index-item' onClick={() => {
        props.deleteFriend(props.user.id);} }>
      <label className='dropdown-index-title'>Remove Friend</label>
    </div>
    :
    <div className='dropdown-index-item' onClick={() => {
        props.addFriend(props.user.id);} }>
      <label className='dropdown-index-title'>Add Friend</label>
    </div>;

  return (
    <div className='server-index-dropdown-container'>
      <div className='dropdown-index-item' onClick={() => {
          props.cloneChannel(props.channel, props.serverId);}}>
        <label className='dropdown-index-title'>Profile</label>
      </div>
      <div className='dropdown-index-item' onClick={() => {
          props.updateChannel(props.channel.id);} }>
        <label className='dropdown-index-title'>Message</label>
      </div>
      <div className='dropdown-divider'></div>

      { serverOptions }
    </div>
  );
};


// TODO:
// <div className='dropdown-index-item' onClick={() => {
//     props.deleteChannel(props.channel.id);} }>
//   <label className='dropdown-index-title'>Invite to Server</label>
// </div>
// <div className='dropdown-divider'></div>

export default withRouter(UserIndexDropdown);
