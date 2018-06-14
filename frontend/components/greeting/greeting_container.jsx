import Greeting from './greeting';
import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    users: state.entities.users,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  let asdf = openModal('updateUser');

  return ({
    logout: () => dispatch(logout()),
    searchUsers: () => dispatch(asdf),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
