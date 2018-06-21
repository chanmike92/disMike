import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ServerDelete = (props) => {
  const deleteServer = () => {
    props.deleteServer(props.currentServerId)
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
        <label className='modal-title'>Delete Server</label>
        <div className='channel-delete-message'>
          <label className='server-label'>Are you sure you want to delete {props.serverName}?</label>
          <label className='server-label'>There is no return from this action.</label>
        </div>
      </div>
      <div className="yes-no-option channel-delete-yes-no">
        <button className='submit-button yes' onClick={ deleteServer }>Yes</button>
        <button className='submit-button no' onClick={ goBack }>No</button>
      </div>
    </div>
  );
};

export default ServerDelete;
