import ChannelCreate from './channel_create';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentServer = state.session.currentServer || {};
  const currentServerId = currentServer.id || "";
  const currentState = {name: '', server_id: currentServerId};
  return ({
    currentState,
    currentServerId,
    currentServer,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (channel) => dispatch(makeNewChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
