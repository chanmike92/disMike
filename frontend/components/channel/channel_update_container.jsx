import ChannelUpdate from './channel_update';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../actions/server_actions';
import { updateChannel, receiveErrors, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal, openEditModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentState = state.session.currentChannel || {};
  const currentServer = state.session.currentServer || {};
  const currentServerId = currentServer.id || "";

  // errors: state.errors.channels,

  return ({
    currentState,
    currentServerId,
    formType: 'updateChannel',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    processForm: (channel) => dispatch(updateChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelUpdate));
