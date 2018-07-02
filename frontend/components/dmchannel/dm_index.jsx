import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const DmIndex = (props) => {



    const channelClass = Number(props.channelId) === props.id ? "channel-item-container active-channel" : "channel-item-container";
    const channelNameClass = Number(props.channelId) === props.id ? "active-name-channel channel-name-item" : "channel-name-item";

    return (
      <li className={ channelClass }>
        <Link
          to={`/@me}/${props.id}`}
          className='channel-link-item'>
          <div className={ channelNameClass }>{ props.dm.name }</div>
        </Link>
      </li>
    );
};



export default withRouter(DmIndex);
