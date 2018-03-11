import ChannelShow from './channel_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, deleteChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  return ({

    channels: Object.values(state.entities.channels),
    currentServer: state.session.currentServer,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    createForm: () => dispatch(openModal('createChannel')),
    updateForm: () => dispatch(openModal('updateChannel')),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
