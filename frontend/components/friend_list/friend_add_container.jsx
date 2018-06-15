import FriendAdd from './friend_add';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { addNewFriend, receiveErrors } from '../../actions/friend_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {

  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (id) => dispatch(addNewFriend(id)),
    clearErrors: () => dispatch(receiveErrors([])),
    closeModal: () => dispatch(closeModal()),
    addNewFriend: (id) => dispatch(addNewFriend(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendAdd));
