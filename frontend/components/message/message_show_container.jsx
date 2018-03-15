import MessageShow from './message_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, receiveAMessage, makeNewMessage, receiveErrors } from '../../actions/message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  const messages = state.entities.messages || {};
  const currentChannel = state.session.currentChannel || {};
  const currentChannelId = currentChannel.id || "";
  const currentChannelName = currentChannel.name || "";
  const channels = state.entities.channels || {};
  const relevantChannel = channels[currentChannelId] || {};
  const messageIds = relevantChannel.message_ids || [];
  const currentUser = state.session.currentUser || {};
  const currentServer = state.session.currentServer || {};

  return ({
    messages,
    currentChannelName,
    messageIds,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: (id) => fetchAllUsers(id),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllMessages: (id) => dispatch(fetchAllMessages(id)),
    receiveAMessage: (message) => dispatch(receiveAMessage(message))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageShow));
