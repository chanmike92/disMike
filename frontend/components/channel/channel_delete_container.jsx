import ChannelDelete from './channel_delete';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../actions/server_actions';
import { deleteChannel, receiveErrors, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const channel = ownProps.channel || {};
  const channelId = channel.id;
  const server = ownProps.server || {};
  const serverId = server.id;
  const channelName = channel.name || "";

  return ({
    channel,
    channelId,
    server,
    serverId,
    channelName,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAServer: (id) => dispatch(fetchAServer(id)),
    deleteChannel: (channelId, serverId) => dispatch(deleteChannel(channelId, serverId)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDelete));
