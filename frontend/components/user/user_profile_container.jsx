import UserProfile from './user_profile';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../actions/server_actions';
import { joinServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const server = ownProps.server || {};
  const serverId = server.id || "";

  // errors: state.errors.channels,

  return ({
    server,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    inviteUser: (userId, serverId) => dispatch(joinServer(userId, serverId)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInvite));
