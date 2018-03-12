import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = ({ currentServer, user }) => {

  return (
    <li className="user-icons">
      <div>
        { user.username }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
