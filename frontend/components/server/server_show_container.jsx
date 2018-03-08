import ServerShow from './server_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllServers, deleteServer, receiveErrors } from '../../actions/server_actions';
import { connect } from 'react-redux';



const mapStateToProps = state => {

  const servers = Object.values(state.entities.servers).filter(server => { return (server.owner_id === state.session.currentUser.id);});
  return ({
    servers
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllServers: () => dispatch(fetchAllServers()),
    deleteServer: (id) => dispatch(deleteServer(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
