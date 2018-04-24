import MessageShow from './message_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, receiveAMessage, makeNewMessage, receiveErrors, clearMessages } from '../../actions/message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  const messages = state.entities.messages || {};
  const currentChannel = state.session.currentChannel || {};
  const currentChannelId = ownProps.channelId;
  const currentChannelName = currentChannel.name || "";
  const channels = state.entities.channels || {};
  const relevantChannel = channels[currentChannelId] || {};
  const messageIds = relevantChannel.message_ids || [];
  const currentUser = state.session.currentUser || {};
  const currentServerId = ownProps.serverId;

  return ({
    messages,
    currentChannelName,
    messageIds,
    currentServerId,
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
