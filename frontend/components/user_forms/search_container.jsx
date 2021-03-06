import SearchUser from './search_users';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewDm, updateDm } from '../../actions/dm_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const channelId = ownProps.channelId;
  const currentUser = state.session.user || {};
  const currentUserId = currentUser.id;
  // const friendList = currentUser.friends_id || [];
  // const friendCount = friendList.length || "";
  const dms = state.entities.dms;
  // const dms = Object.values(state.entities.dms) || [];
  // const currentDm = state.entities.dms[channelId];
  const users = Object.values(state.entities.users).filter(user => user.id !== currentUserId) || [];
  const servers = Object.values(state.entities.servers) || [];
  const channels = Object.values(state.entities.channels) || [];

  return ({
    users,
    servers,
    channels,
    dms,
    currentUser,
    channelId,

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
    closeModal: () => {
      dispatch(closeModal());
    },
    openModal: (id) => {
      dispatch(openModal('deleteServer', id));
    },
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchUser));
