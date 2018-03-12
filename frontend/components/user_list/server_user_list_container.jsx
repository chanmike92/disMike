import ServerShow from './server_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllServers, deleteServer, receiveErrors } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = state => {
  return ({
    users: Object.values(state.entities.users)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerShow));
