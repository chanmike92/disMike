import ServerDelete from './server_delete';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { deleteServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal, openEditModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentServer = state.session.currentServer || {};
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
    deleteServer: (id) => dispatch(deleteServer(id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerDelete));
