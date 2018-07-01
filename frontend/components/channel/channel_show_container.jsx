import ChannelShow from './channel_show';
import React from 'react';
import { getDMServer } from '../../reducers/selectors.jsx';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, fetchAChannel, deleteChannel, receiveErrors, clearState } from '../../actions/channel_actions';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const serverId = parseInt(ownProps.serverId);
  const currentServer = state.entities.servers[serverId] || {};
  const channels = Object.values(state.entities.channels).filter(channel => {
    return channel.serverId === serverId;
  });
  const currentUser = state.session.user || {};
  const channelIds = currentServer.channel_ids || [];
  let propsChannelId = channelIds.includes(parseInt(ownProps.channelId)) ? ownProps.channelId : channelIds[0];
  let channelId = undefined ? "" : propsChannelId;
  const currentUserId = currentUser.id || "";
  const channel = state.entities.channels[channelId];
  const dropdown = state.ui.dropdown.dropdownType;

  return ({
    dropdown,
    currentServerName: currentServer.name || "",
    currentServerOwnerId: currentServer.owner_id || "",
    currentUserId,
    currentServer,
    serverId,
    channel,
    channelIds,
    channelId,
    channels,
    currentUser,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openServerDropdown: (e) => {
      e.stopPropagation();
      dispatch(openDropdown({dropdownType: "server"}));
    },
    openChannelDropdown: (payload) => dispatch(openDropdown(payload)),
    closeDropdown: (e) => {
    e.stopPropagation();
    dispatch(closeDropdown()); },
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
