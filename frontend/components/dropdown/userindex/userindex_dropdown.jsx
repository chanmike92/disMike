import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const UserIndexDropdown = (props) => {
  let makeDm;
  let message = <div></div>;
  let divider = <div></div>;
  let serverOptions = <div></div>;
  let friendDelete = <div></div>;
  let friendAdd = <div></div>;
  if (props.user.id === props.currentUser.id) {
    makeDm = () => false;
  }
  else {
    if (props.user.dmId && props.user.subscription) {
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

    if (props.server && props.server.owner_id === props.currentUser.id) {
      serverOptions = <div className='dropdown-index-item' onClick={() => {
          props.kickUser(props.user.id, props.server.id);} }>
        <label className='dropdown-index-title'>Kick</label>
      </div>;
    }

    divider = <div className='dropdown-divider'></div>;

    message =  <div className='dropdown-index-item' onClick={ makeDm }>
        <label className='dropdown-index-title'>Message</label>
      </div>;

    if (props.user.friendship_status) {
      switch (props.user.friendship_status) {
        case "PENDING ACCEPT":
        friendDelete = <div className='dropdown-index-item' onClick={(e) => {
              props.deleteFriend(e, props.user.id);} }>
            <label className='dropdown-index-title'>Remove Friend</label>
          </div>;
        friendAdd = <div className='dropdown-index-item' onClick={ (e) => {
              props.acceptFriend(e, props.user.id);} }>
            <label className='dropdown-index-title'>Add Friend</label>
          </div>;
        break;

        default:
        friendDelete = <div className='dropdown-index-item' onClick={(e) => {
            props.deleteFriend(e, props.user.id);} }>
          <label className='dropdown-index-title'>Remove Friend</label>
        </div>;

          break;
      }
    } else {
      friendAdd = <div className='dropdown-index-item' onClick={ (e) => {
          props.addFriend(e, props.user.id);} }>
        <label className='dropdown-index-title'>Add Friend</label>
      </div>;
    }


  }

    // TODO: Profile
    // onClick={() => { props.cloneChannel(props.channel, props.serverId);}  }
  return (
    <div className='server-index-dropdown-container'>
      <div className='dropdown-index-item'>
        <label className='dropdown-index-title'>Profile</label>
      </div>
      { divider }
      { message }
      { serverOptions }
      { friendAdd }
      { friendDelete }
    </div>
  );
};


// TODO:
// <div className='dropdown-index-item' onClick={() => {
//     props.deleteChannel(props.channel.id);} }>
//   <label className='dropdown-index-title'>Invite to Server</label>
// </div>
// <div className='dropdown-divider'></div>

export default withRouter(UserIndexDropdown);
