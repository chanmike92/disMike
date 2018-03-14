import ChannelForm from './channel_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateChannel, receiveErrors, fetchAChannel } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal, openEditModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    currentState: ownProps.currentState,
    currentServer: state.session.currentServer,
    formType: 'updateChannel',
    // errors: Object.values(state.errors.channels),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchAChannel: (id) => dispatch(fetchAChannel(id)),
    processForm: (channel) => dispatch(updateChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
