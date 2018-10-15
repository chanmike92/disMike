import UserShow from './user_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllUsers } from '../../actions/user_actions';
import { fetchAServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { makeNewDm, updateDm } from '../../actions/dm_actions';
import { openDropdown, closeDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {
  const users = state.entities.users || {};
  // const users = Object.values(state.entities.users).filter(user => {
  //   return user.serverId === serverId;
  const currentServerId = ownProps.serverId;
  const currentServer = ownProps.messageType === "Channel" ?
    state.entities.servers[currentServerId] :
    state.entities.dms[ownProps.channelId];
  const currentUser = state.session.user || {};
  const userIds = currentServer.user_ids || [];
  return ({
    users,
    currentServerOwnerId : currentServer.owner_id || "",
    currentUserId: currentUser.id || "",
    userIds,
    currentServerId,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAllUsers: (id) => dispatch(fetchAllUsers(id)),
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
    closeModal: () => {
      dispatch(closeModal());
    },
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(closeDropdown());
    },
    openDropdown: (payload) => dispatch(openDropdown(payload)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
