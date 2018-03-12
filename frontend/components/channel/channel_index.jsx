import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = ({ channel, updateForm, fetchAChannel, currentUserId,
  currentServer, currentServerId, currentUser, deleteChannel }) => {

  return (
  <li className="channel-item-container">
    <div className='channel-name-container'>
      <Link
        to={`/${currentUserId}/server/${currentServerId}/channel/${channel.id}`}
        className='channel-link-item'>
        # {channel.name}
      </Link>
    </div>
    <div className='channel-controls'>
      <button onClick={updateForm}>+</button>
      <button onClick={() => deleteChannel(channel.id) }>-</button>
    </div>
  </li>
);
};

export default withRouter(ChannelIndex);
