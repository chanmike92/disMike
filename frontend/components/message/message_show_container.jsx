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
  const channelId = parseInt(ownProps.channelId);
  const channel = state.entities.channels[channelId] || {};
  const currentChannelName = channel.name || "";
  const currentUser = state.session.currentUser || {};
  const currentServerId = ownProps.serverId;
  const messages = Object.values(state.entities.messages).filter(message => {
    return message.messagable_id === channelId;
  });
  // const currentChannel = state.session.currentChannel || {};
  debugger

  return ({
    messageType,
    channel,
    messages,
    // currentChannel,
    currentChannelName,
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
