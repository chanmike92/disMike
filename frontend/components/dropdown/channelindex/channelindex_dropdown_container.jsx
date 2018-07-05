import ChannelIndexDropdown from './channelindex_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fetchAServer } from '../../actions/server_actions';
import { updateChannel, receiveErrors, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const channels = state.entities.channels;
  const channelId = ownProps.channelId;
  const channel = channels[channelId];
  const currentUser = state.session.user;

  // errors: state.errors.channels,

  return ({
    channel,
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({

    fetchAServer: (id) => dispatch(fetchAServer(id)),
    processForm: (channel) => dispatch(updateChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelUpdate));
