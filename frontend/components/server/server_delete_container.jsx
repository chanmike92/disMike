import ServerDelete from './server_delete';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { deleteServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    deleteCurrentServer: (id) => {
      dispatch(deleteServer(id)).then((payload) => {
        ownProps.history.push(`/@me/`);
        dispatch(closeModal());
      });
    },
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerDelete));
