import LogoutConfirmation from './logout';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.user;
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutConfirmation));
