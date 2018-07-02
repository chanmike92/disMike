import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import { Emoji } from 'emoji-mart';
import { emojiIndex } from 'emoji-mart';

const MessageIndex = ({author, messages, date, profilepic, dateNum }) => {
  // const colonsToUnicode = (text) => {
  //   const colonsRegex = new RegExp('(^|\\s)(:[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?)', 'g');
  //   let newText = text;
  //
  //   let match = text.match(colonsRegex);
  //   // while (match === colonsRegex.exec(text)) {
  //   //   let colons = match[2];
  //   //   let offset = match.index + match[1].length;
  //   //   let length = colons.length;
  //   //
  //   //   console.log(colons, offset, length);
  //   // }
  // };
  // const regexp = new RegExp(
  // 	'[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}' +
  // 	'\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}' +
  // 	'-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}' +
  // 	'\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}' +
  // 	'\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}' +
  // 	'\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}' +
  // 	'\u{25b6}\u{23f8}-\u{23fa}]', 'gu'
  // );



  const messagesList = messages.map((message) => {
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
