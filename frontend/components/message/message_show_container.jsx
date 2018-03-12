import MessageShow from './message_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllMessages, makeNewMessage, receiveErrors } from '../../actions/message_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAllChannels, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  return ({
    messages: Object.values(state.entities.messages),
    currentChannel: state.session.currentChannel,
    currentUser: state.session.currentUser,
    currentServer: state.session.currentServer
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: (id) => fetchAllUsers(id),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllMessages: (id) => dispatch(fetchAllMessages(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageShow));
