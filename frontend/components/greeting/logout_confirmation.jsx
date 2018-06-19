import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal,  } from '../../actions/modal_actions';

const LogoutConfirmation = (props) => {

  const goBack = () => {
    props.closeModal();
  };

  return (
    <div className='channel-delete-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Logging Out?</label>
          <label className='channel-delete-message'>Are you sure you want to logout?</label>
        </div>
        <div className="yes-no-option">
          <button className='submit-button yes' onClick={ props.logout }>Yes</button>
          <button className='submit-button no' onClick={ goBack }>No</button>
        </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()).then(dispatch(closeModal())),
    closeModal: () => dispatch(closeModal()),
  });
};

export default connect(null, mapDispatchToProps)(LogoutConfirmation);
