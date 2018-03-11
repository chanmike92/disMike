import MessageShow from './message_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, deleteMessage, receiveErrors } from '../../actions/message_actions';
import { fetchAllChannels, fetchAChannel, deleteChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  return ({
    messages: Object.values(state.entities.messages),
    currentChannel: state.session.currentChannel
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllMessages: (id) => dispatch(fetchAllMessages(id)),
    makeNewMessage: (message) => dispatch(makeNewMessage(message)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageShow));
