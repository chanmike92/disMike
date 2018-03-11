import ChannelForm from './channel_form';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateChannel, receiveErrors } from '../../actions/channel_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  return ({
    currentState: {name: '', server_id: state.session.currentServer.id},
    currentServerId: state.session.currentServer.id,
    currentServer: state.session.currentServer,
    formType: 'updateChannel',
    // errors: Object.values(state.errors.channels),
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (channel) => dispatch(updateChannel(channel)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelForm));
