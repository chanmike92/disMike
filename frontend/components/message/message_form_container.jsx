import MessageForm from './message_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, makeNewMessage, receiveErrors } from '../../actions/message_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';



const mapStateToProps = (state, ownProps) => {
  const messageType = ownProps.messageType || "";
  const currentUser = state.session.currentUser || {};
  const channelId = ownProps.channelId || "";
  const currentChannel = state.entities.channels[channelId] || {};
  const currentServer = state.session.currentServer || {};
  const currentChannelName = currentChannel.name || "";
  return ({
    messageType,
    channelId,
    currentChannelName,
    currentUser,
    currentChannel,
    currentServer,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (message) => dispatch(makeNewMessage(message)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllMessages: (id) => dispatch(fetchAllMessages(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
