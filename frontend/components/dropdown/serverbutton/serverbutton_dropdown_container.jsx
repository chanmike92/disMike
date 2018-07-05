import ServerButtonDropdown from './serverbutton_dropdown';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal, closeModal,  } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const channel = ownProps.channel || {};
  const server = ownProps.server || {};
  const serverId = server.id || "";

  // errors: state.errors.channels,

  return ({
    channel,
    serverId,
    formType: 'updateChannel',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    openCreateModal: (e) => {
      e.stopPropagation();
      dispatch(openModal('createServer'));
    },
    openJoinModal: (e) => {
      e.stopPropagation();
      dispatch(openModal('createServer'));
    },
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerButtonDropdown));
