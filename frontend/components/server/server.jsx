import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const Server = ({ server, currentUser, fetchAServer, deleteServer }) => {
  const rightClick = (e) => {
    e.preventDefault();
    return (
    <button className='delete-server' onClick={() => deleteServer(server.id)}>
      x
    </button>
  )}



  return (
  <li unselectable="on" className="server-icons" onContextMenu={rightClick}>
    <Link className='server-links' to={`/${currentUser.id}/server/${server.id}/channel`}>{server.name[0]}</Link>
  </li>
)
}

export default withRouter(Server);
