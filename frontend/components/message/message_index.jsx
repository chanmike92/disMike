import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';


const MessageIndex = (props) => {
  const date = moment(props.message.created_at).format("MM-DD-YYYY");
  return props.message ? (
      <li className="message-item-container">
        <div className={props.message ? "null" : "hidden"}>
          <img className='profile-picture' src={ props.message.profilepic } />
        </div>
        <div>
          <div className='message-name'>
            <div className='need-space'>
            { props.message.author }
            </div>
            { date }
          </div>
          <div>
            <h1 className='message-content'>{ props.message.body }</h1>
          </div>
        </div>
      </li>
    )
  :
  null;
};
export default withRouter(MessageIndex);
