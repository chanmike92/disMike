import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const MessageIndex = (props) => {
  return props.message ? (
      <li className="message-item-container">
        <div className='message-name-container'>
          <div className='message-header'>
            <div className={props.message ? "null" : "hidden"}>
              <img className='profile-picture' src={ props.message.profilepic } />
            </div>
          </div>
          <div>
            <div>
              <div className='message-name'>
                { props.message.author }
              </div>
              <div className='message-date'>
                { props.message.created_at }
              </div>
            </div>
            <div>
              <h1 className='message-content'>{ props.message.body }</h1>
            </div>
          </div>
        </div>
      </li>
    )
  :
  null;
};
export default withRouter(MessageIndex);
