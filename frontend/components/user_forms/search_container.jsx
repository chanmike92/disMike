import SearchUser from './search_users';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllFriends } from '../../actions/friend_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.channelId;
  const currentUser = state.session.user || {};
  const currentUserId = currentUser.id;
  const friendList = currentUser.friends_id || [];
  const friendCount = friendList.length || "";
  const dms = Object.values(state.entities.dms) || [];
  const currentDm = state.entities.dms[channelId];
  const users = state.entities.users;

  return ({
    users,
    dms,
    currentDm,
    currentUser,
    friendList,
    friendCount,
    channelId,

  });
};

const mapDispatchToProps = dispatch => {
  return ({

  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchUser));
