import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';


const MessageIndex = ({author, messages, date, profilepic }) => {
  debugger
  const messagesList = messages.map((message) => {
      return (<h1 className='message-content' key={ message.id }>{ message.body }</h1>);
    });

  return (
      <li className="message-item-container">
        <img className='profile-picture' src={ profilepic } />
        <div className="message-content-body">
          <div className='message-header'>
            <div className='message-user-name'>
              { author }
            </div>
            { moment(date).format("MM-DD-YYYY") }
          </div>
            { messagesList }

        </div>
      </li>
    );
};
export default withRouter(MessageIndex);
