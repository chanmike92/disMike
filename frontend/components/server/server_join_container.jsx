import ServerForm from './server_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { joinServer, receiveErrors } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  const serverErrors = state.errors.servers || {};
  const joinErrors = serverErrors.joinErrors || [];
  const currentUser = state.session.user;
  return ({
    formType: 'joinServer',
    errors: joinErrors,
    currentUserId: currentUser.id,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (userId, serverId) => dispatch(joinServer(userId, serverId)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));
