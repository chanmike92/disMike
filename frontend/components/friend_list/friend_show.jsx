import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const FriendShow = (props) => {

  debugger
  // const iconPic = () =>
    return (
    <li className="">
      <Link className=''
        to={`/@me/`}>
        { props.user.username }
      </Link>
    </li>
  );
};

export default withRouter(FriendShow);
