import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const FriendShow = (props) => {


  // const iconPic = () =>

    return (
    <li className="">
      <Link className='friend-link-item'
        to={`/@me/`}>
        <img className='profile-picture' src={ props.user.img_url ? props.user.image_url : ""} />
        <div>{ props.user.username }</div>
        <div></div>
      </Link>
    </li>
  );
};

export default withRouter(FriendShow);
