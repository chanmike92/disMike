import SessionForm from './session_form';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    formType: 'Sign up',
    link: <Link className='sessionLinks' to={'/session'}>Login</Link>,
    currentUser: {username: '', password: '', email: ''}
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
