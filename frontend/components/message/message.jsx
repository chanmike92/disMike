import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Message = ({ message }) => {
  return (
    <li className="message-item-container">
      <div className='message-name-container'>
        <h1>{message.body}</h1>
      </div>
    </li>
  );
};

export default withRouter(Message);
