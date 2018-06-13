import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';


const MessageIndex = ({author, messages, date, profilepic, dateNum }) => {



  const messagesList = messages.map((message) => {
      return (<h1 className='message-content' key={ message.id }>{ message.body }</h1>);
    });
  const time = moment(dateNum).format('hh:mm A');
  const dateShown = date === ('Today' || 'Yesterday') ? `${date} at ${time}` : moment(dateNum).format("MM/DD/YYYY");

  return (
      <li className="message-item-container">
        <img className='profile-picture' src={ profilepic } />
        <div className="message-content-body">
          <div className='message-header'>
            <div className='message-user-name'>
              { author }
            </div>
            { dateShown }
          </div>
            { messagesList }

        </div>
      </li>
    );
};
export default withRouter(MessageIndex);
