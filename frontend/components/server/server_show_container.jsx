import ServerShow from './server_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchCurrentUserSession } from '../../actions/user_actions';
import { fetchAllServers, deleteServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { fetchAllChannels } from '../../actions/channel_actions';
import { fetchAllFriends } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { closeDropdown } from '../../actions/dropdown_actions';



const mapStateToProps = (state, ownProps) => {
  debugger
  const servers =  state.entities.servers || {};
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const dropdown = state.ui.dropdown;

  return ({
    dropdown,
    currentUser: state.session.user || {},
    serverIds: Object.keys(servers),
    servers,
    errors: state.errors.server || [],
    channelId,
    serverId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(closeDropdown());
    },
    fetchCurrentUser: (id) => dispatch(fetchCurrentUserSession(id)),
    fetchAllFriends: () => dispatch(fetchAllFriends()),
    fetchAllServers: () => dispatch(fetchAllServers()),
    deleteServer: (id) => dispatch(deleteServer(id)),
    createForm: () => dispatch(openModal('createServer')),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
