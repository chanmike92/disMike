import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { emojiIndex } from 'emoji-mart';
import Twemoji from 'react-twemoji';
import emoji from 'react-easy-emoji';
import Emojify from 'react-emojione';

const MessageIndex = ({author, messages, date, profilepic, dateNum }) => {

  const messagesList = messages.map((message) => {

      return (<h1 className='message-content' key={ message.id }><Emojify>{ message.body }</Emojify></h1>);
      // return (<h1 className='message-content' key={ message.id }>{ emoji(message.body) }</h1>);
      // return (<h1 className='message-content' key={ message.id }>{ twemoji.parse(message.body) }</h1>);
      // return (<h1 className='message-content' key={ message.id }>{ message.body }</h1>);
      // return (<Emoji tag="div" className='message-content' key={ message.id } size={16}>{ message.body }</Emoji>);
    });
  const time = moment(dateNum).format('hh:mm A');
  const dateShown = date === ('Today' || 'Yesterday') ? `${date} at ${time}` : moment(dateNum).format("MM/DD/YYYY");
  return (
      <li className="message-item-container">
        <div className='user-image-icons'>
          <img className='profile-picture' src={ profilepic } />
        </div>
        <div className="message-content-body">
          <div className='message-header'>
            <div className='message-user-name'>{ author }</div>
            <div className='message-timestamp'>{ dateShown }</div>
          </div>
            { messagesList }

        </div>
      </li>
    );
};
export default withRouter(MessageIndex);
