import ChannelShow from './channel_show';
import React from 'react';
import { getDMServer } from '../../reducers/selectors.jsx';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, fetchAChannel, deleteChannel, receiveErrors, clearState } from '../../actions/channel_actions';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';

import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  const currentServer = state.session.currentServer || {};
  const channels = state.entities.channels || {};
  const currentUser = state.session.currentUser || {};

  const currentChannel = state.entities.channels[ownProps.channelId] || {};
  const channelId = ownProps.channelId;
  const channelIds = currentServer.channel_ids || [];
  const currentUserId = currentUser.id || "";
  const currentServerId = ownProps.serverId;

  return ({

    currentServerName: currentServer.name || "",
    currentServerOwnerId: currentServer.owner_id || "",
    currentUserId,
    currentServer,
    currentServerId,
    channelIds,
    channelId,
    channels,
    currentUser,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    clearState: () => dispatch(clearState()),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    deleteChannel: () => dispatch(openModal('deleteChannel')),
    deleteServer: () => dispatch(openModal('deleteServer')),
    createForm: () => dispatch(openModal('createChannel')),
    updateForm: () => dispatch(openModal('updateChannel')),
    addFriend: () => dispatch(openModal('addFriend'))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
