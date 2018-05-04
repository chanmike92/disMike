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

const pageModal = ({ pageModal, currentServer, closeModal }) => {

  if (!pageModal) {
    return null;
  }
  let component;
  switch (pageModal) {
    case 'editUser':
      component =
      <div className='pageModal-container'>
        test
      </div>;
      break;
    default:
      return null;
  }

  return (
    <div className="pageModal-background">
      <div className='pageModal-child' onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const pageModal = state.ui.pageModal;

  return {
    pageModal,
    currentServer: state.session.currentServer,
    currentChannel: state.session.currentChannel,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(pageModal));
