import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = ({ currentServer, user }) => {

  return (
    <li className="user-icons">
      <div>
        <img className='profile-picture' src={user.image_url} />
        { user.username }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
