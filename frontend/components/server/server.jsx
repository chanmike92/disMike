import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Server = ({ server, deleteServer }) => (

  <li className="server">
    <a href>{server.name}</a>
    <button onClick={() => deleteServer(server.id)}>
      x
    </button>
  </li>
)

export default withRouter(Server);
