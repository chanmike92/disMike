import ServerLeave from './server_leave';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { leaveServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const server = ownProps.server || {};
  const serverId = server.id;
  const serverName = server.name || "";
  const currentServer = ownProps.currentServer;
  const currentUser = state.session.user;
  // errors: state.errors.channels,
  return ({
    currentUser,
    currentServer,
    server,
    serverId,
    serverName,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    leaveServer: (userId, serverId) => dispatch(leaveServer(userId, serverId)).then(() =>
      dispatch(closeModal())
      ),
    leaveCurrentServer: (userId, serverId) => {
      ownProps.history.replace(`/@me/`);
      dispatch(leaveServer(userId, serverId)).then(() =>
        dispatch(closeModal())
      );
    },
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerLeave));
