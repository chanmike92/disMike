import ChannelShow from './channel_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, fetchAChannel, deleteChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAllServers, fetchAServer, deleteServer } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal, openEditModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {

  return ({

    channels: Object.values(state.entities.channels),
    currentServer: state.session.currentServer,
    currentUser: state.session.currentUser,
    currentChannel: state.session.currentChannel
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    fetchAllChannels: (id) => dispatch(fetchAllChannels(id)),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    deleteServer: (id) => dispatch(deleteServer(id)),
    createForm: () => dispatch(openModal('createChannel')),
    updateForm: (channel) => dispatch(openEditModal(channel)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
