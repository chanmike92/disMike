import ChannelForm from './channel_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeNewChannel, receiveErrors } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  debugger
  return ({
    currentServerId: ownProps.match.params.serverId,
    formType: 'createChannel',
    // errors: Object.values(state.errors.channels),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (channel) => dispatch(makeNewChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
