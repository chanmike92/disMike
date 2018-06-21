import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

const ChannelIndex = (props) => {
  const iconButtons = (props.currentUserId === props.currentServerOwnerId) ?
    <div className='channel-controls'>
      <button className='fafaicons-container channel-edit' onClick={() => {
          props.history.push(`/${props.serverId}/${props.id}`);
          props.fetchAChannel(props.id).then(() => props.updateForm());
        } }>
        <i className="fas fa-edit"></i>
      </button>
      <button className='fafaicons-container channel-delete' onClick={() => {
          props.history.push(`/${props.serverId}/${props.id}`);
          props.fetchAChannel(props.id).then(() => props.deleteChannel());
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

    // POTENTIAL DROPDOWN MENU OPTION
    //  const updateChannel =
    //    <button className='fafaicons-container' onClick={() => {
    //        props.history.push(`/${props.serverId}/${props.id}`);
    //        props.fetchAChannel(props.id).then(() => props.updateForm());
    //      } }>
    //      <i className="fas fa-edit"></i>
    //    </button>;
    //
    //    const deleteChannel =
    //    <button className='fafaicons-container' onClick={() => {
    //        props.fetchAChannel(props.id).then(() => props.deleteChannel());
    //      }}>
    //      <i className="far fa-trash-alt"></i>
    //    </button>;
    //
    //  const dropDownMenu =
    //    <div class="dropdown">
    //    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    //    <div id="myDropdown" class="dropdown-content">
    //      { updateChannel }
    //      { deleteChannel }
    //    </div>
    //  </div>;
    //
    // const inputButton = (props.currentUserId === props.currentServerOwnerId) ?
    //  dropDownMenu : <div></div>;
    //
    //  const dropDown = (e) => {
    //    e.preventDefault();
    //    getElementById("myDropdown")
    //  }


    if (props.id) {
    const channelClass = Number(props.channelId) === props.id ? "channel-item-container active-channel" : "channel-item-container";
    const channelNameClass = Number(props.channelId) === props.id ? "active-name-channel channel-name-item" : "channel-name-item";
    const channelName = props.channel.name ? props.channel.name : "";
    return (
      <li className={ channelClass }>
        <div className='channel-name-container'>
          <Link
            to={`/${props.serverId}/${props.id}`}
            className='channel-link-item'>
            # <div className={ channelNameClass }>{ channelName }</div>
          </Link>
        </div>
        {iconButtons}
      </li>
    );
  }
};



export default withRouter(ChannelIndex);
