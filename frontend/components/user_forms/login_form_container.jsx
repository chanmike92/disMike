import SessionForm from './session_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { login, receiveErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return ({
    errors: Object.values(state.errors.session),
    formType: 'Login',
    link: <Link className='sessionLinks' to={'/signup'}>Register</Link>,
    currentUser: {email: '', password: ''}
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
