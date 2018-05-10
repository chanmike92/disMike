import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const FriendShow = (props) => {

  const onlineStatus = props.user.online ? "online-status online" : "online-status offline";
  const onlineStatusName = props.user.online ? "Online" : "Offline";

  // const iconPic = () =>

    return (
    <li className="friend-item-container">
      <Link className='friend-link-item'
        to={`/@me/`}>
        <div className="friend-name-container">
          <img className='profile-picture friend-pic' src={ props.user.image_url ? props.user.image_url : ""} />
          <div className='friend-name'>{ props.user.username }</div>
        </div>
        <div className='status-container'>
          <div className={ onlineStatus }></div>
          <div>{ onlineStatusName }</div>
        </div>
        <div className='friend-controls-container'>
        </div>
      </Link>
    </li>
  );
};

export default withRouter(FriendShow);
