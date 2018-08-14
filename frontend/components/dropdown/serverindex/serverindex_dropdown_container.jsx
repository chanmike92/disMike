import ServerIndexDropdown from './serverindex_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../../actions/server_actions';
import { updateChannel, receiveErrors, fetchAChannel } from '../../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const servers = state.entities.servers;
  const serverId = ownProps.serverId;
  const server = servers[serverId];
  const currentUser = state.session.user;
  const currentUserId = currentUser.id;

  // errors: state.errors.channels,
  debugger
  return ({
    serverId,
    server,
    currentUser,
    currentUserId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({

    leaveServer: () => dispatch(openModal('leaveServer')),
    updateServer: () => dispatch(openModal('updateServer')),
    deleteServer: () => dispatch(openModal('deleteServer')),
    createChannel: () => dispatch(openModal('createChannel')),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerIndexDropdown));
