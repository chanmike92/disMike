import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {

    return (
      <li className="channel-item-container">
        <div className='channel-name-container'>
          <Link
            to={`/${props.currentUserId}/server/${props.currentServerId}/channel/${props.channelId}`}
            className='channel-link-item'>
            # {props.channel.name}
          </Link>
        </div>
        <div className='channel-controls'>
          <button className='fafaicons-container' onClick={() => props.updateForm(channel)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className='fafaicons-container' onClick={() => props.deleteChannel(props.channelId) }>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    )
}



export default withRouter(ChannelIndex);
