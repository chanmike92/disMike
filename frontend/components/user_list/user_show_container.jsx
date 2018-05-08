import UserShow from './user_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users || {};
  const currentServerId = ownProps.serverId;
  const currentServer = state.entities.servers[currentServerId] || {};
  const currentUser = state.session.currentUser || {};
  const userIds = currentServer.user_ids || [];
  return ({
    users,
    currentServerOwnerId : currentServer.owner_id || "",
    currentUserId: currentUser.id || "",
    userIds,
    currentServerId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAllUsers: (id) => dispatch(fetchAllUsers(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
