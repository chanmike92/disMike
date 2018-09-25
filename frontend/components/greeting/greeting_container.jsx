import Greeting from './greeting';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    dropdown: state.ui.dropdown.dropdownType,
    users: state.entities.users,
    currentUser: state.session.user
  });
};

const mapDispatchToProps = dispatch => {


  return ({
    logout: (e) => {
      e.stopPropagation();
      dispatch(openModal('logout'));
    },
    openDropdown: (e) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(openDropdown({dropdownType: "user"}));
    },
    closeDropdown: (e) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(closeDropdown()); },
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
