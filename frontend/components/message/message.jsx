import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Message = ({ message }) => {
  return (
    <li unselectable="on" className="message-item-container" onContextMenu={rightClick}>
      <div className='message-name-container'>
        <h1>{message.body}</h1>
      </div>
    </li>
  );
};

export default withRouter(Message);
