import UserUpdate from './user_update';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { updateAUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUser = ownProps.currentUser;
  const imageUrl = currentUser.image_url;
  return ({
    currentUser,
    imageUrl,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    updateUser: (formData, id) => dispatch(updateAUser(formData, id)),
    closeModal: () => dispatch(closeModal())
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserUpdate));
