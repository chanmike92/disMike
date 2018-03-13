import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = ({ currentServer, user }) => {

  const owner = (currentServer.owner_id === user.id) ?
  <div className='owner-icon'>
    <i class="fal fa-chess-king"></i>
  </div>
    :
  <div className='not-owner-icon'></div>;


  return (
    <li className="user-item">
      <div className='user-icons'>
        <div>
          <img className='profile-picture' src={user.image_url} />
        </div>
        <div>
        { user.username }
        </div>
        { owner }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
