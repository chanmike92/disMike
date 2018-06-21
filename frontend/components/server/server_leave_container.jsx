import ServerLeave from './server_leave';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { leaveServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentServer = ownProps.server || {};
  const currentServerId = currentServer.id;
  const serverName = currentServer.name || "";

  // errors: state.errors.channels,

  return ({
    currentServer,
    currentServerId,
    serverName,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    leaveServer: (id) => dispatch(leaveServer(id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerLeave));
