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
    return channel.server_id === serverId;
  });
  const currentUser = state.session.user || {};
  const channelIds = currentServer.channel_ids || [];
  const channelId = parseInt(ownProps.channelId);
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
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(closeDropdown());
    },
    openDropdown: (payload) => dispatch(openDropdown(payload)),
    clearState: () => dispatch(clearState()),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    deleteChannel: (id) => dispatch(openModal('deleteChannel', id)),
    deleteServer: (id) => dispatch(openModal('deleteServer', id)),
    createForm: (id) => dispatch(openModal('createChannel', id)),
    updateForm: (id) => dispatch(openModal('updateChannel', id)),
    addFriend: (id) => dispatch(openModal('addFriend', id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
