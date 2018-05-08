import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ServerCreateContainer from '../server/server_create_container';
import ServerDeleteContainer from '../server/server_delete_container';
import ChannelCreateContainer from '../channel/channel_create_container';
import ChannelUpdateContainer from '../channel/channel_update_container';
import ChannelDeleteContainer from '../channel/channel_delete_container';
import ServerJoinContainer from '../server/server_join_container';

const Modal = ({ modal, currentServer, closeModal }) => {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createServer':
      component =
      <div className='modal-container'>
        <div className='modal-title'>OH, ANOTHER SERVER HUH?</div>
        <div className='modal-form-container'>
          <ServerCreateContainer />
          <ServerJoinContainer />
        </div>
      </div>;
      break;
      case 'deleteServer':
        component =
        <div className='modal-container'>
          <div className='modal-title'>Delete Server</div>
          <ServerDeleteContainer />
        </div>;
      break;
      case 'createChannel':
      component =
        <div className='modal-container'>
          <div className='modal-title'>Create Channel</div>
          <ChannelCreateContainer />
        </div>;
      break;
      case 'updateChannel':
        component =
        <div className='modal-container'>
          <div className='modal-title'>Update Channel</div>
          <ChannelUpdateContainer />
        </div>;
      break;
      case 'deleteChannel':
        component =
        <div className='modal-container'>
          <div className='modal-title'>Delete Channel</div>
          <ChannelDeleteContainer />
        </div>;
      break;
      case 'addDM':
        component =
        <div className='modal-container'>
          <ChannelDeleteContainer />
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
  const modal = state.ui.modal;

  return {
    modal,
    currentServer: state.session.currentServer,
    currentChannel: state.session.currentChannel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
