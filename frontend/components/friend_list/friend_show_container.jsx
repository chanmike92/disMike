import FriendShow from './friend_show';
import React from 'react';
import { getDMServer } from '../../reducers/selectors.jsx';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { fetchAllFriends, addNewFriend, deleteFriend, acceptFriend } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { makeNewDm, updateDm } from '../../actions/dm_actions';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  const servers = state.entities.servers;
  const channels = state.entities.channels || {};
  const currentUser = state.session.currentUser || {};
  const users = state.entities.users || {};
  const currentChannel = state.entities.channels[ownProps.channelId] || {};
  const channelId = ownProps.channelId;
  const currentUserId = currentUser.id || "";
  const currentServerId = ownProps.serverId;
  const dms = state.entities.dms;

  return ({
    servers,
    dms,
    selector: ownProps.selector,
    currentUserId,
    currentServerId,
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
    createDm: (id) => {
        dispatch(makeNewDm(id)).then((payload) => {
          ownProps.history.push(`/@me/${payload.payload.dm.id}`);
        });
      },
    updateDm: (id) => {
      dispatch(updateDm(id)).then((payload) => {
        ownProps.history.push(`/@me/${payload.payload.dm.id}`);
      });
    },
    addNewFriend: (id) => dispatch(openModal('addFriend', id)),
    addFriend: (e, id) => {
      e.stopPropagation();
      e.preventDefault();
       dispatch(addNewFriend(id));
     },
    acceptFriend: (e, id) => {
      e.stopPropagation();
      e.preventDefault();
       dispatch(acceptFriend(id));
     },
    deleteFriend: (e, id) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(deleteFriend(id));
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendShow));
