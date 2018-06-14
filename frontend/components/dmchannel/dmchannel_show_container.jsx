import DmChannelShow from './dmchannel_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllFriends } from '../../actions/friend_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser || {};
  const friendList = currentUser.friends_id || [];
  const friendCount = friendList.length || "";
  return ({
    currentUser,
    friendList,
    friendCount,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllFriends: () => dispatch(fetchAllFriends()),
    addFriend: () => dispatch(openModal('addFriend')),
    searchUsers: () => dispatch(openModal('searchUsers')),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DmChannelShow));
