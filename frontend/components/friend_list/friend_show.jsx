import React from 'react';
import { withRouter, Link, Redirect, NavLink } from 'react-router-dom';

const FriendShow = (props) => {

  let statusClassName = "online-status offline";
  let renderStatus = props.user.online_status ? "Online" : "Offline";
  switch (props.user.friendship_status) {
    case ("ACCEPTED"):
      if (props.user.online_status) {
        statusClassName = "online-status online";
        renderStatus = "Online";
      } else {
        statusClassName = "online-status offline";
        renderStatus = "Offline";
      }
    break;
    case ("PENDING RECEIVE"):
      renderStatus = "Incoming Friend Request";
      break;
    case ("PENDING ACCEPT"):
      renderStatus = "Outgoing Friend Request";
    break;
  }
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
          <div className={ statusClassName }></div>
          <div className="status-name">{ renderStatus }</div>
        </div>
        <div className='friend-controls-container'>
          <div></div>
        </div>
      </Link>
    </li>
  );
};

export default withRouter(FriendShow);
