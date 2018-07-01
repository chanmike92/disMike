import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {



    if (props.id) {
    const channelClass = Number(props.channelId) === props.id ? "channel-item-container active-channel" : "channel-item-container";
    const channelNameClass = Number(props.channelId) === props.id ? "active-name-channel channel-name-item" : "channel-name-item";
    // const activeDisplayControls = parseInt(props.channelId) === props.id ? "a"
    const iconButtons = (props.currentUserId === props.currentServerOwnerId) ?
      <div className='channel-controls'>
        <button className='fafaicons-container channel-edit' onClick={() => {
            props.history.push(`/${props.serverId}/${props.id}`);
            props.updateForm();
          } }>
          <i className="fas fa-edit"></i>
        </button>
        <button className='fafaicons-container channel-delete' onClick={() => {
            props.history.push(`/${props.serverId}/${props.id}`);
            props.deleteChannel();
          }
            // props.deleteChannel(props.id)
            // .then(() => props.fetchAServer(props.serverId))
            //     .then(() => {
            //       return props.currentServer.channel_ids[0] === undefined ?
            //         props.history.push(`/${props.serverId}/`) :
            //         props.history.push(`/${props.serverId}/${props.currentServer.channel_ids[0]}`)
              //       if (props.currentServer.channel_ids[0] === undefined) {
              //         props.history.push(`/@me/${props.serverId}`)
              //       } else {
              //       props.history.push(`/@me/${props.serverId}/${props.currentServer.channel_ids[0]}`);
              //     })
              }
            >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
     :
     <div></div>;

    return (
      <li className={ channelClass }>
        <Link
          to={`/${props.serverId}/${props.id}`}
          className='channel-link-item'>
          # <div className={ channelNameClass }>{ props.channel.name }</div>
        </Link>
        {iconButtons}
      </li>
    );
  }
};



export default withRouter(ChannelIndex);
