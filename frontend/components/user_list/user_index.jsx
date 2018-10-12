import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndex = (props) => {


  const owner = (props.currentServerOwnerId === props.userId) ?
  <div className='owner-icon'></div>
    :
  "";

  let makeDm;
  if (props.user.id === props.currentUserId) {

    makeDm = () => false;
  }
  else if (props.user.dmId && props.user.subscription) {
    makeDm = () => props.history.push(`/@me/${props.user.dmId}`);
  }
  else if (props.user.dmId) {
    makeDm = (e) => {
      e.stopPropagation();
      e.preventDefault();
      props.updateDm(props.user.dmId);
    };
  }
  else {
    makeDm = (e) => {
      e.stopPropagation();
      e.preventDefault();
      props.createDm(props.user.id);
    };
  }

  const onlineStatus = props.user.online_status ? "online-status-icon green-back" : "online-status-icon grey-back";
  const onlineImage = props.user.online_status ? "" : "offline-grey";
  return (
    <li className="user-items" onClick={ makeDm }
      onContextMenu={ (e) => props.handleIndexContextClick(props.user.id, e) }>
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
