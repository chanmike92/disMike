import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Server = ({ server, deleteServer }) => {
  const rightClick = (e) => {
    e.preventDefault();
    return (
    <button className='delete-server' onClick={() => deleteServer(server.id)}>
      x
    </button>
  )}



  return (
  <li unselectable="on" className="server-icons" onContextMenu={rightClick}>
    <a>{server.name[0]}</a>
  </li>
)
}

export default withRouter(Server);
