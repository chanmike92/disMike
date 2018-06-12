import React from 'react';

const EmptyChannelMessage = () => {
    return (<div className='message-container'>
      <div className='empty-channel-container'>
        <div className='empty-channel-icon'>
        </div>
        <div className='empty-channel-text'>
          <div className='no-channel-text'>No Text Channel</div>
          <div className='empty-channel-message'>You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.</div>
        </div>
      </div>
    </div>);
};

export default EmptyChannelMessage;
