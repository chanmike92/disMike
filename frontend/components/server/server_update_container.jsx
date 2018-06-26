import ServerUpdate from './server_update';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const server = ownProps.server || {};
  const serverId = server.id || "";

  // errors: state.errors.servers,

  return ({
    server,
    serverId,
    formType: 'updateserver',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    processForm: (formData, id) => dispatch(updateServer(formData, id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerUpdate));
