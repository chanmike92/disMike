import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const FriendShow = (props) => {

  const onlineStatus = props.user.online ? "online-status online" : "online-status offline";

  // const iconPic = () =>
  debugger
    return (
    <li className="">
      <Link className='friend-link-item'
        to={`/@me/`}>
        <img className='profile-picture' src={ props.user.image_url ? props.user.image_url : ""} />
        <div>{ props.user.username }</div>
        <div className={ onlineStatus }></div>
      </Link>
    </li>
  );
};

export default withRouter(FriendShow);
