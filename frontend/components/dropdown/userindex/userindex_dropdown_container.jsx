import UserIndexDropdown from './userindex_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateChannel, receiveErrors, makeNewChannel } from '../../../actions/channel_actions';
import { makeNewDm, updateDm } from '../../../actions/dm_actions';
import { fetchAllFriends, addNewFriend, deleteFriend, acceptFriend } from '../../../actions/friend_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const servers = state.entities.servers;
  const serverId = ownProps.serverId;
  const server = servers[serverId];
  const channels = state.entities.channels;
  const channelId = ownProps.channelId;
  const channel = channels[channelId];
  const currentUser = state.session.user;

  // errors: state.errors.channels,
  return ({
    server,
    channel,
    serverId,
    channelId,
    currentUser
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createDm: (id) => {
      dispatch(makeNewDm(id)).then((payload) => {
        ownProps.history.push(`/@me/${payload.payload.dm.id}`);
        dispatch(closeModal());
      });
    },
    updateDm: (id) => {
      dispatch(updateDm(id)).then((payload) => {
        ownProps.history.push(`/@me/${payload.payload.dm.id}`);
        dispatch(closeModal());
      });
    },
    deleteFriend: (e, id) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(deleteFriend(id));
    },
    addFriend: (e, id) => {
      e.stopPropagation();
      e.preventDefault();
       dispatch(addNewFriend(id));
     },
    cloneChannel: (channel, id) => dispatch(makeNewChannel(channel, id)),
    updateChannel: (id) => dispatch(openModal('updateChannel', id)),
    deleteChannel: (id) => dispatch(openModal('deleteChannel', id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserIndexDropdown));
