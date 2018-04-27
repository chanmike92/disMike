import ChannelDelete from './channel_delete';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../actions/server_actions';
import { deleteChannel, receiveErrors, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal, openEditModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentChannel = state.session.currentChannel || {};
  const currentChannelId = currentChannel.id;
  const currentServer = state.session.currentServer || {};
  const currentServerId = currentServer.id;
  const channelName = currentChannel.name || "";

  // errors: state.errors.channels,

  return ({
    currentChannel,
    currentChannelId,
    currentServer,
    currentServerId,
    channelName,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDelete));
