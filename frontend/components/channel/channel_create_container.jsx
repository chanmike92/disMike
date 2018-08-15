import ChannelCreate from './channel_create';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  const server = ownProps.server || {};
  const serverId = server.id;
  const currentState = {name: ""};
  
  return ({
    currentState,
    serverId,
    server,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (channel, id) => dispatch(makeNewChannel(channel, id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelCreate));
