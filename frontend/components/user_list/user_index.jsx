import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = (props) => {


  const owner = (props.currentServerOwnerId === props.userId) ?
  <div className='owner-icon'>
  </div>
    :
  <div className='not-owner-icon'></div>;


  return (
    <li className="user-items">
      <div className='user-icons'>
        <div className='user-image-name'>
          <img className='profile-picture' src={props.user.image_url ? props.user.image_url : ""} />
          {props.user.username ? props.user.username : ""}
        </div>
        { owner }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
