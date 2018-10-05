import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = (props) => {


  const owner = (props.currentServerOwnerId === props.userId) ?
  <div className='owner-icon'></div>
    :
  "";


  const onlineStatus = props.user.online_status ? "online-status-icon green-back" : "online-status-icon grey-back";
  const onlineImage = props.user.online_status ? "" : "offline-grey";

  return (
    <li className="user-items" onClick={ () => props.makeNewDm(props.userId).then((payload) => {
        props.history.push(`/@me/${payload.payload.dm.id}`);
        props.closeModal();
      }) }>
      <div className='user-image-name'>
        <div className='user-image-icons'>
          <img className={`profile-picture ${onlineImage}`} src={ props.user.image_url } />
          <div className={ onlineStatus }></div>
        </div>
        <div className='user-name'>
          { props.user.username }
        </div>
        { owner }
      </div>
    </li>
);
};

export default withRouter(UserIndex);
