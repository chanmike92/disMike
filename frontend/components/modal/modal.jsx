import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ServerCreateContainer from '../server/server_create_container';
import ServerDeleteContainer from '../server/server_delete_container';
import ServerLeaveContainer from '../server/server_leave_container';
import UserUpdateContainer from '../greeting/user_update_container';
import SearchContainer from '../user_forms/search_container';
import ServerUpdateContainer from '../server/server_update_container';
import ChannelCreateContainer from '../channel/channel_create_container';
import ChannelUpdateContainer from '../channel/channel_update_container';
import ChannelDeleteContainer from '../channel/channel_delete_container';
import ServerJoinContainer from '../server/server_join_container';
import FriendAddContainer from '../friend_list/friend_add_container';
import LogoutConfirmationContainer from '../user_forms/logout_container';

const Modal = ({ modal, serverId, server, channelId, channel, closeModal, currentUser }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createServer':
      component =
      <div className='server-modal-container'>
        <div className='server-modal-title'>OH, ANOTHER SERVER HUH?</div>
        <div className='modal-form-container'>
          <ServerCreateContainer />
          <ServerJoinContainer />
        </div>
      </div>;
      break;
      case 'deleteServer':
        component =
        <div className='modal-container'>
          <ServerDeleteContainer server={ server }/>
        </div>;
      break;
      case 'leaveServer':
        component =
        <div className='modal-container'>
          <ServerLeaveContainer server={ server }/>
        </div>;
      break;
      case 'createChannel':
      component =
        <div className='modal-container'>
          <ChannelCreateContainer server={ server }/>
        </div>;
      break;
      case 'updateChannel':
        component =
        <div className='modal-container'>
          <ChannelUpdateContainer server={ server } channel={ channel }/>
        </div>;
      break;
      case 'deleteChannel':
        component =
        <div className='modal-container'>
          <ChannelDeleteContainer server={ server } channel={ channel }/>
        </div>;
      break;
      case 'addDM':
        component =
        <div className='modal-container'>
          <ChannelDeleteContainer />
        </div>;
      break;
      case 'addFriend':
        component =
        <div className='modal-container'>
          <FriendAddContainer />
        </div>;
      break;
      case 'updateUser':
        component =
        <div className='modal-container'>
          <UserUpdateContainer currentUser={ currentUser }/>
        </div>;
      break;
      case 'updateServer':
        component =
        <div className='modal-container'>
          <div className='channel-update-form-container'>
            <ServerUpdateContainer server={ server }/>
          </div>
        </div>;
      break;
      case 'searchUsers':
        component =
        <div className='modal-container'>
            <SearchContainer currentUser={ currentUser }/>
        </div>;
      break;
      case 'logout':
        component =
        <div className='modal-container'>
          <LogoutConfirmationContainer />
        </div>;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={ closeModal }>
      <div className='modal-child' onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const modal = state.ui.modal.modalType;
  const dropdownId = state.ui.dropdown.id;
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const server = state.entities.servers[dropdownId] || state.entities.servers[serverId];
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const channel = state.entities.channels[dropdownId] || state.entities.channels[channelId];
  const currentUser = state.session.user;
  debugger
  return {
    modal,
    server,
    serverId,
    channel,
    channelId,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
