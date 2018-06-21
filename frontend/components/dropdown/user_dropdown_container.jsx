import UserDropdown from './user_dropdown';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    dropdown: state.ui.dropdown,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {


  return ({
    openUserDropdown: (e) => {
      e.stopPropagation();
      dispatch(openDropdown("user"));
    },
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(openDropdown("user"));
    },
    updateUser: () => dispatch(openModal('updateUser')),

    logout: () => dispatch(logout()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
