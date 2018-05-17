import MessageShow from './message_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, receiveAMessage, makeNewMessage, receiveErrors, clearMessages } from '../../actions/message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const messageType = ownProps.messageType || "";
  const messages = state.entities.messages || {};
  const currentChannel = state.session.currentChannel || {};
  const channelId = ownProps.channelId;
  const currentChannelName = currentChannel.name || "";
  const channels = state.entities.channels || {};
  const relevantChannel = channels[channelId] || {};
  const messageIds = relevantChannel.message_ids || [];
  const currentUser = state.session.currentUser || {};
  const currentServerId = ownProps.serverId;

  return ({
    messageType,
    messages,
    currentChannel,
    currentChannelName,
    messageIds,
    currentServerId,
    channelId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: (id) => fetchAllUsers(id),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllMessages: (id) => dispatch(fetchAllMessages(id)),
    receiveAMessage: (message) => dispatch(receiveAMessage(message)),
    clearMessages: () => dispatch(clearMessages()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageShow));
