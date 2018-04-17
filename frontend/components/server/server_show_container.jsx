import ServerShow from './server_show';
import React from 'react';
import { getServerIds } from '../../reducers/selectors.jsx';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllServers, deleteServer, receiveErrors, fetchAServer } from '../../actions/server_actions';
import { fetchAllChannels } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  const servers =  state.entities.servers || {};
  return ({
    currentUser: state.session.currentUser || {},
    serverIds: getServerIds(servers) || [],
    servers,
    errors: state.errors.server || []
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllServers: () => dispatch(fetchAllServers()),
    deleteServer: (id) => dispatch(deleteServer(id)),
    createForm: () => dispatch(openModal('createServer')),
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
