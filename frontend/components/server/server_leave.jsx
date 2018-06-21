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
    <div className='channel-update-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Update Channel</label>
          <label className='server-label'>Are you sure you want to leave {props.serverName}?</label>
        </div>
        <div className="yes-no-option">
          <button className='submit-button yes' onClick={ leaveServer }>Yes</button>
          <button className='submit-button no' onClick={ goBack }>No</button>
        </div>
    </div>
  );
};

export default ServerLeave;
