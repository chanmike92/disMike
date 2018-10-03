import React from 'react';
import FriendShowContainer from '../friend_list/friend_show_container';
import MessageShowContainer from '../message/message_show_container';
import EmptyChannelMessages from '../message/empty_channel_message';
import GreetingContainer from '../greeting/greeting_container';
import DmIndex from './dm_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class DmChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  handleIndexContextClick(id, e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.openDropdown({dropdownType: "dmchannel", x: e.clientX,
      y: e.clientY });
  }

  handleContextClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.openDropdown({dropdownType: "channel", x: e.clientX,
      y: e.clientY });
  }

  render() {
    let dms = [];
    for (let i = 0; i < this.props.dms.length; i++) {
      let dm = this.props.dms[i];
      if (dm.subscription === true) {
       dms.push(<DmIndex
        key={ i }
        dm={ dm }
        user={ this.props.users[dm.dmreceivers[0]] }
        channelId={ this.props.channelId }
        unsubscribeDm={ this.props.unsubscribeDm }
        />);
      }
    }


    const messages = this.props.currentDm ? <MessageShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      messageType={ "Dmchannel" }
      handleUserListToggle={ this.props.handleUserListToggle }
      userListToggle={ this.props.userListToggle }
    /> : <FriendShowContainer
              friendList={ this.props.friendList }
              channelId={ this.props.channelId }
              selector={ this.props.selector }
              handleSelect={ this.props.handleSelect }
            />;

    //make selected for friends-logo and each dm item
    return (
      <div className='subcomponent-container' onContextMenu={ this.props.handleNoContextClick }>
        <div className='channel-container'>
          <div className='server-title-container'>
            <div className='user-search' onClick={ this.props.searchUsers }
              onContextMenu={ this.props.searchUsers } >
              <input className='user-search-inner'
                disabled placeholder="Find or start a conversation"></input>
            </div>
          </div>
          <div className='bottom-channels-container'>
            <div className='channel-list-container'>
              <Link className='friends-logo' to={`/@me/`}>
                <svg name="PersonWaving" className='personwaving' width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
                <div className='friends-name'>
                  Friends
                </div>
              </Link>
              <div className='dm-text-channel-name'>DIRECT MESSAGES</div>
                { dms }
            </div>
          </div>
          <GreetingContainer
            handleNoContextClick={ this.props.handleNoContextClick }/>
        </div>
        { messages }
      </div>
    );
  }
}

export default DmChannelShow;
