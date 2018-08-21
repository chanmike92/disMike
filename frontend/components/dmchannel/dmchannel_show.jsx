import React from 'react';
import FriendIndexContainer from '../friend_list/friend_index_container';
import MessageShowContainer from '../message/message_show_container';
import EmptyChannelMessages from '../message/empty_channel_message';
import GreetingContainer from '../greeting/greeting_container';
import DmIndex from './dm_index';

class DmChannelShow extends React.Component {
  constructor(props) {
    super(props);
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
        />);
      }
    }


    const messages = this.props.currentDm ? <MessageShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      messageType={ "Dmchannel" }
    /> : <FriendIndexContainer
              friendList={ this.props.friendList }
              channelId={ this.props.channelId }
            />;

    //make selected for friends-logo and each dm item
    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-title-container'>
            <div className='user-search'>
              <input className='user-search-inner' disabled placeholder="Find or start a conversation"></input>
            </div>
          </div>
          <div className='bottom-channels-container'>
            <div className='channel-list-container'>
              <div className='friends-logo' >
                Friends
              </div>
              <div className='dm-text-channel-name'>DIRECT MESSAGES</div>
                { dms }
            </div>
          </div>
          <GreetingContainer />
        </div>
        { messages }
      </div>
    );
  }
}

export default DmChannelShow;
