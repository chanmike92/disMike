import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = ({ channel, updateForm, currentServer, currentUser, deleteChannel }) => {
  const rightClick = (e) => {
    e.preventDefault();
    return (
    <button className='delete-channel' onClick={() => deleteServer(channel.id)}>
      x
    </button>
  );
};



  return (
  <li unselectable="on" className="channel-item-container" onContextMenu={rightClick}>
    <div className='channel-name-container'>
      <Link to={`/${currentUser.id}/server/${currentServer.id}/channel/${channel.id}`} className='channel-link-item'># {channel.name}</Link>
    </div>
    <div className='channel-controls'>
      <button onClick={updateForm}>+</button>
      <button onClick={() => deleteChannel(channel.id) }>-</button>
    </div>
  </li>
);
};

export default withRouter(ChannelIndex);
