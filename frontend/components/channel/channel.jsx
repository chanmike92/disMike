import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Channel = ({ channel, updateForm, deleteChannel }) => {
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
      <a className='channel-link-item'># {channel.name}</a>
    </div>
    <div className='channel-controls'>
      <button onClick={updateForm}>+</button>
      <button onClick={ () => deleteChannel(channel.id) }>-</button>
    </div>
  </li>
);
};

export default withRouter(Channel);
