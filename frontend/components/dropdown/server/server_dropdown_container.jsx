import ServerDropdown from './server_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { leaveServer, deleteServer } from '../../../actions/server_actions';
import { openModal, closeModal } from '../../../actions/modal_actions';
import { makeNewChannel, receiveErrors, fetchAChannel } from '../../../actions/channel_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.user;
  const channel = ownProps.channel || {};
  const channelId = channel.id;
  const server = ownProps.server || {};
  const serverId = server.id;
  const channelName = channel.name || "";
  const currentUserId = currentUser.id;

  return ({
    currentUserId,
    channel,
    channelId,
    server,
    serverId,
    channelName,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    createChannel: (id) => dispatch(openModal('createChannel', id)),
    updateServer: (id) => dispatch(openModal('updateServer', id)),
    deleteServer: (id) => dispatch(openModal('deleteServer', id)),
    leaveServer: (id) => dispatch(openModal('leaveServer', id)),
    inviteUser: (id) => dispatch(openModal('userInvite', id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerDropdown));
