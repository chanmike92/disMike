import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = (props) => {


  const owner = (props.currentServerOwnerId === props.userId) ?
  <div className='owner-icon'></div>
    :
  "";

  const online = props.user.online_status ? "online-status-icon green-back" : "online-status-icon grey-back";

  return (
    <li className="user-items">
      <div className='user-image-name'>
        <div className='user-image-icons'>
          <img className='profile-picture' src={ props.user.image_url } />
          <div className={ online }></div>
        </div>
        <div className='user-name'>
          { props.user.username }
        </div>
        { owner }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
