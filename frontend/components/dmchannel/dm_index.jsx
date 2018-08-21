import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const DmIndex = (props) => {

    const channelClass = Number(props.channelId) === Number(props.dm.id) ? "channel-item-container active-channel" : "channel-item-container";
    const channelNameClass = Number(props.channelId) === Number(props.dm.id) ? "active-name-channel channel-name-item" : "channel-name-item";
    // if (props.dmreceivers.length === 1) {
      return (
          <Link
            to={`/@me/${props.dm.id}`}
            className={ channelClass }>
            <div className={ channelNameClass }>{ props.dm.name }</div>
          </Link>
      );
    // }
    // else {
    //   return (
    //       <Link
    //         to={`/@me/${props.id}`}
    //         className='channel-link-item'>
    //         <div className={ channelNameClass }>{ props.dm.name }</div>
    //       </Link>
    //   );
    // }
};



export default withRouter(DmIndex);
