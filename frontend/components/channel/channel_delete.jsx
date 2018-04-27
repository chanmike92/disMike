import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelDelete = (props) => {
  //DO NOT TOUCH, FETCHES AND USES RESULT FETCH AND PUSHES BASE ON THE RESULT
  const deleteChannel = () => {
    props.deleteChannel(props.currentChannelId)
    .then(() => props.fetchAServer(props.currentServerId))
        .then(({payload}) => {
            if (payload.server.channel_ids[0]) {
              props.history.push(`/${props.currentServerId}/${payload.server.channel_ids[0]}`)
            } else {
              props.history.push(`/${props.currentServerId}/`);
            }
          })
          .then(() => {
            props.closeModal();
          });
  };

  const goBack = () => {
    props.closeModal();
  };

  return (
    <div className='server-form-container'>
        <div className='input-container'>
          <label className='server-label'>Are you sure you want to delete {props.channelName}</label>
        </div>
        <div>
        <button className='submit-form' onClick={ deleteChannel }>Yes</button>
        <button className='submit-form' onClick={ goBack }>No</button>
        </div>
    </div>
  );
};

export default withRouter(ChannelDelete);
