import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {

    if (props.id) {
    const channelClass = Number(props.channelId) === Number(props.id) ? "channel-item-container active-channel channel-link-item" : "channel-item-container channel-link-item";
    const channelNameClass = Number(props.channelId) === Number(props.id) ? "active-name-channel channel-name-item" : "channel-name-item";

    let iconButtons;
    if (props.currentUserId === props.currentServerOwnerId) {
      iconButtons = <div className='channel-controls'>
        <button className='fafaicons-container channel-edit' onClick={() => {
            props.history.push(`/${props.serverId}/${props.id}`);
            props.updateForm();} }>
          <i className="fas fa-edit"></i>
        </button>
        <button className='fafaicons-container channel-delete' onClick={() => {
            props.history.push(`/${props.serverId}/${props.id}`);
            props.deleteChannel();} }>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>;
    }

    return (
        <Link
          to={`/${props.serverId}/${props.id}`}
          onContextMenu={ (e) => props.handleIndexContextClick(props.id, e) }
          className={ channelClass }>
          # <div className={ channelNameClass }>{ props.channel.name }</div>
        {iconButtons}
        </Link>
    );
  }
};



export default withRouter(ChannelIndex);
