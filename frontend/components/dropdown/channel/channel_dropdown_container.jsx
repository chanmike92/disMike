import ChannelDropdown from './channel_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const server = ownProps.server || {};
  const serverId = server.id || "";
    const currentUser = state.session.user;

  // errors: state.errors.channels,

  return ({
    serverId,
    server,
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    createChannel: (e) => {
      e.stopPropagation();
      dispatch(openModal('createChannel'));
    },
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelDropdown));
