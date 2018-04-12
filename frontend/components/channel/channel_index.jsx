import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {
  const iconButtons = (props.currentUserId === props.currentServerOwnerId) ?
    <div className='channel-controls'>
      <button className='fafaicons-container' onClick={() => {
          props.history.push(`/${props.currentServerId}/${props.id}`)
          props.fetchAChannel(props.id).then(() => props.updateForm())
        } }>
        <i className="fas fa-edit"></i>
      </button>
      <button className='fafaicons-container' onClick={() =>
          props.deleteChannel(props.id)
          .then(() => props.fetchAServer(props.currentServerId))
              .then(() => {
                return props.currentServer.channel_ids[0] === undefined ?
                  props.history.push(`/${props.currentServerId}`) :
                  props.history.push(`/${props.currentServerId}/${props.currentServer.channel_ids[0]}`)
            //       if (props.currentServer.channel_ids[0] === undefined) {
            //         props.history.push(`/@me/${props.currentServerId}`)
            //       } else {
            //       props.history.push(`/@me/${props.currentServerId}/${props.currentServer.channel_ids[0]}`);
            //     })
            }
          )}>
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
   :
   <div></div>;

    if (props.id) {
    return (
      <li className="channel-item-container">
        <div className='channel-name-container'>
          <Link
            to={`/${props.currentServerId}/${props.id}`}
            className='channel-link-item'>
            # {props.channel.name}
          </Link>
        </div>
        {iconButtons}
      </li>
    );
  }
};



export default withRouter(ChannelIndex);
