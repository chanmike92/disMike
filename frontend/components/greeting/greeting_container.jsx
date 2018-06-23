import Greeting from './greeting';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    dropdown: state.ui.dropdown,
    users: state.entities.users,
    currentUser: state.session.user
  });
};

const mapDispatchToProps = dispatch => {


  return ({
    logout: () => dispatch(openModal('logout')),
    openDropdown: (e) => {
      e.stopPropagation();
      dispatch(openDropdown("user"));
    },
    closeDropdown: (e) => {
    e.stopPropagation();
    dispatch(closeDropdown()); },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
