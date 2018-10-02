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

  return ({
    serverId,
    server,
    currentUser,
    currentUserId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({

    leaveServer: (id) => dispatch(openModal('leaveServer', id)),
    updateServer: (id) => dispatch(openModal('updateServer', id)),
    deleteServer: (id) => dispatch(openModal('deleteServer', id)),
    createChannel: (id) => dispatch(openModal('createChannel', id)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerIndexDropdown));
