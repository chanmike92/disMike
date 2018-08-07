import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelDelete = (props) => {
  //DO NOT TOUCH, FETCHES AND USES RESULT FETCH AND PUSHES BASE ON THE RESULT
  const deleteChannel = () => {

    props.deleteChannel(props.channelId, props.serverId)
      .then(() => {
        props.closeModal();
      });
    // .then(() => props.fetchAServer(props.serverId))
    //     .then(({payload}) => {
    //         if (payload.server.channel_ids[0]) {
    //           props.history.push(`/${props.serverId}/${payload.server.channel_ids[0]}`)
    //         } else {
    //           props.history.push(`/${props.serverId}/`);
    //         }
    //       })

  };

  const goBack = () => {
    props.closeModal();
  };

  return (
    <div className='channel-delete-form-container'>
        <div className='display-form-message-container'>
          <label className='modal-title'>Delete Channel</label>
          <label className='channel-delete-message'>Are you sure you want to delete #{props.channelName}? This cannot be undone.</label>
        </div>
        <div className="yes-no-option channel-delete-yes-no">
          <button className='submit-button yes' onClick={ deleteChannel }>Yes</button>
          <button className='submit-button no' onClick={ goBack }>No</button>
        </div>
    </div>
  );
};

export default withRouter(ChannelDelete);
