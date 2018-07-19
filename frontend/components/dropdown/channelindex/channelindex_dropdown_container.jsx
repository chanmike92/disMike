import ChannelIndexDropdown from './channelindex_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateChannel, receiveErrors, makeNewChannel } from '../../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const serverId = ownProps.serverId;
  const channels = state.entities.channels;
  const channelId = ownProps.channelId;
  const channel = channels[channelId];
  const currentUser = state.session.user;
  // errors: state.errors.channels,
  return ({
    channel,
    serverId,
    channelId,
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    cloneChannel: (channel, id) => dispatch(makeNewChannel(channel, id)),
    updateChannel: () => dispatch(openModal('updateChannel')),
    deleteChannel: () => dispatch(openModal('deleteChannel')),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexDropdown));
