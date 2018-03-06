import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'signup',
    link: <Link to={'/login'}>Login</Link>,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
