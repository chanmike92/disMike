import SessionForm from './session_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';



const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    formType: 'Register',
    link: <Link className='sessionLinks' to={'/session'}>Login</Link>,
    currentUser: {username: '', password: '', email: ''}
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
