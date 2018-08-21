import FriendShow from './friend_show';
import React from 'react';
import { getDMServer } from '../../reducers/selectors.jsx';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { fetchAllFriends, addNewFriend, deleteFriend } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  const currentServer = state.session.currentServer || {};
  const channels = state.entities.channels || {};
  const currentUser = state.session.currentUser || {};
  const users = state.entities.users || {};
  const currentChannel = state.entities.channels[ownProps.channelId] || {};
  const channelId = ownProps.channelId;
  const channelIds = currentServer.channel_ids || [];
  const currentUserId = currentUser.id || "";
  const currentServerId = ownProps.serverId;
  return ({
    selector: ownProps.selector,
    currentServerName: currentServer.name || "",
    currentServerOwnerId: currentServer.owner_id || "",
    currentUserId,
    currentServer,
    currentServerId,
    channelIds,
    channelId,
    channels,
    currentUser,
    users,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    handleSelect: (selector) => ownProps.handleSelect(selector),
    fetchAllFriends: () => dispatch(fetchAllFriends()),
    addNewFriend: () => dispatch(openModal('addFriend')),
    addFriend: (id) => dispatch(addNewFriend(id)),
    deleteFriend: (id) => dispatch(deleteFriend(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendShow));
