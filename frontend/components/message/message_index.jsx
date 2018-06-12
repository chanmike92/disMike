import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';


const MessageIndex = ({author, messages, date, profilepic }) => {
  const messagesList = messages.map((message) => {
      return (<h1 className='message-content' key={ message.id }>{ message.body }</h1>);
    });

  return (
      <li className="message-item-container">
        <div>
          <img className='profile-picture' src={ profilepic } />
        </div>
        <div>
          <div className='message-name'>
            <div className='need-space'>
            { author }
            </div>
            { moment(date).format("MM-DD-YYYY") }
          </div>
          <div>
            { messagesList }
          </div>
        </div>
      </li>
    );
};
export default withRouter(MessageIndex);
