import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Emoji } from 'emoji-mart';
import { emojiIndex } from 'emoji-mart';

const MessageIndex = ({author, messages, date, profilepic, dateNum }) => {



  const messagesList = messages.map((message) => {
    const colonsToUnicode = (text) => {
      const colonsRegex = new RegExp('(^|\\s)(:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?)', 'g');
      let newText = text;

      let match;
      while (match === colonsRegex.exec(text)) {
        let colons = match[2];
        let offset = match.index + match[1].length;
        let length = colons.length;

        console.log(colons, offset, length);
      }
    };
    colonsToUnicode(message.body);
      return (<h1 className='message-content' key={ message.id }>{ message.body }</h1>);
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
