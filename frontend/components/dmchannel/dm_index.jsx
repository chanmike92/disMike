import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const DmIndex = (props) => {



    const channelClass = Number(props.channelId) === Number(props.id) ? "channel-item-container active-channel" : "channel-item-container";
    const channelNameClass = Number(props.channelId) === Number(props.id) ? "active-name-channel channel-name-item" : "channel-name-item";
    // let iconButtons;
    // if (props.currentUserId === props.currentServerOwnerId) {
    //   iconButtons = <div className='channel-controls'>
    //     <button className='fafaicons-container channel-edit' onClick={() => {
    //         props.history.push(`/${props.serverId}/${props.id}`);
    //         props.updateForm();} }>
    //       <i className="fas fa-edit"></i>
    //     </button>
    //     <button className='fafaicons-container channel-delete' onClick={() => {
    //         props.history.push(`/${props.serverId}/${props.id}`);
    //         props.deleteChannel();} }>
    //       <i className="far fa-trash-alt"></i>
    //     </button>
    //   </div>;
    // }
    if (props.dmreceivers.length === 1) {
      return (
          <Link
            to={`/@me/${props.id}`}
            className={ channelClass }>
            <div className={ channelNameClass }>{ props.dm.name }</div>
          </Link>
      );
    } else {
      return (
          <Link
            to={`/@me/${props.id}`}
            className='channel-link-item'>
            <div className={ channelNameClass }>{ props.dm.name }</div>
          </Link>
      );
    }
};



export default withRouter(DmIndex);
