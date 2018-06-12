import React from 'react';

const MessageIndexBeginning = ({channelName}) => {

  let name = `#${channelName}`;
  return(
    <div className='message-beginning-container'>
      <div className='message-beginning-text'>
        Welcome to the beginning of the <strong>{ name }</strong> channel.
      </div>
    </div>
  );
};

export default MessageIndexBeginning;
