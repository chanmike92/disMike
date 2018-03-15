import MessageForm from './message_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, makeNewMessage, receiveErrors } from '../../actions/message_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  const currentUser = state.session.currentUser || {};
  const currentChannel = state.session.currentChannel || {};
  const currentServer = state.session.currentServer || {};
  const currentChannelId = currentChannel.id || "";
  const currentChannelName = currentChannel.name || "";
  const currentState = {body: "", channel_id: currentChannelId} || {};
  return ({
    currentState,
    currentChannelId,
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
