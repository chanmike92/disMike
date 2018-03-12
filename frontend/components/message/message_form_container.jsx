import MessageForm from './message_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    currentUser: state.session.currentUser,
    currentChannel: state.session.currentChannel
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (message) => dispatch(makeNewMessage(message)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
