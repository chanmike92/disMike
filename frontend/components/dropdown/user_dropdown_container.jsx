import UserDropdown from './user_dropdown';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {


  return ({
    logout: () => dispatch(logout()),
    updateUser: () => dispatch(openModal('updateUser')),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
