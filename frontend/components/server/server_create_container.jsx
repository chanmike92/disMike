import ServerForm from './server_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewServer } from '../../actions/server_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {
  return ({
    formType: 'create',
    errors: Object.values(state.errors.server),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (server) => dispatch(makeNewServer(server)),
    clearErrors: () => dispatch(receiveErrors([]))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
