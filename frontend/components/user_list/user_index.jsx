import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = ({ currentServer, user }) => {

  const owner = (currentServer.owner_id === user.id) ?
  <div className='owner-icon'>
  </div>
    :
  <div className='not-owner-icon'></div>;


  return (
    <li className="user-items">
      <div className='user-icons'>
        <div className='user-image-name'>
          <img className='profile-picture' src={user.image_url} />
          { user.username }
        </div>
        { owner }
      </div>
    </li>
);
};

export default withRouter(UserIndex);