import React from 'react';

const MessageIndexBeginning = ({channelName, messageType}) => {

  let name = messageType === 'Channel' ? `#${channelName}` : `@${channelName}`;
  let renderMessage = messageType === 'Channel' ?
  <div className='message-beginning-text'>
    Welcome to the beginning of the <strong>{ name }</strong> channel.
  </div> :
  <div className='message-beginning-text'>
    This is the beginning of your direct message history with <strong>{ name }</strong>.
  </div>;
  return(
    <div className='message-beginning-container'>
      { renderMessage }
    </div>
  );
};

export default MessageIndexBeginning;
