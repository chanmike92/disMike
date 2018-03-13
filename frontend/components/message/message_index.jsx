import React from 'react';
// import { withRouter, Link, Redirect } from 'react-router-dom';

const MessageIndex = ({ message }) => {
  return (
    <li className="message-item-container">
      <div className='message-name-container'>
        <div className='message-header'>
          <div>
            <img className='profile-picture' src={ message.profilepic } />
          </div>
        </div>
        <div>
          <div>
            <div className='message-name'>
              { message.author }
            </div>
            <div className='message-date'>
              { message.created_at }
            </div>
          </div>
          <div>
            <h1 className='message-content'>{ message.body }</h1>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MessageIndex;
