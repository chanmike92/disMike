import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerLeave = (props) => {
  const leaveServer = () => {
    props.leaveServer(props.currentServerId)
    .then(() => {
        props.history.push(`/@me/`);
      })
      .then(() => {
          props.closeModal();
        });
  };

  const goBack = () => {
    props.closeModal();
  };

  return (
    <div className='channel-delete-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Update Channel</label>
          <div className='channel-delete-message'>
            <label className='server-label'>Are you sure you want to leave {props.serverName}?</label>
          </div>
        </div>
        <div className="yes-no-option channel-delete-yes-no">
          <button className='submit-button yes' onClick={ leaveServer }>Yes</button>
          <button className='submit-button no' onClick={ goBack }>No</button>
        </div>
    </div>
  );
};

export default ServerLeave;
