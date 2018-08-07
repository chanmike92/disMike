import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const LogoutConfirmation = (props) => {

  return (
    <div className='channel-delete-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Logging Out?</label>
          <label className='channel-delete-message'>{`Are you sure you want to log out, ${props.currentUser.username}? We're going to miss you...`}</label>
        </div>
        <div className="yes-no-option channel-delete-yes-no">
          <button className='submit-button yes' onClick={ props.logout }>Yes</button>
          <button className='submit-button no' onClick={ props.closeModal }>No</button>
        </div>
    </div>
  );
};

export default withRouter(LogoutConfirmation);
