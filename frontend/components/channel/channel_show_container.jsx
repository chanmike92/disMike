import ChannelShow from './channel_show';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAllChannels, deleteChannel, receiveErrors } from '../../actions/channel_actions';
import { fetchAllServers } from '../../actions/server_actions';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';



const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    currentServerId: ownProps.match.params.serverId,
    channels: Object.values(state.entities.channels)
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    deleteChannel: (id) => dispatch(deleteChannel(id)),
    createForm: () => dispatch(openModal('createChannel'))
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelShow));
