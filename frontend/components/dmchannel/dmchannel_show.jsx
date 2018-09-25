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
    this.state = {selector: "ALL"};
    this.handleSelect = this.handleSelect.bind(this);
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

  handleSelect(selected) {
    return (e) => {
      this.setState({
        selector: selected
      });
    };
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
    /> : <FriendShowContainer
              friendList={ this.props.friendList }
              channelId={ this.props.channelId }
              selector={ this.state.selector }
              handleSelect={ this.handleSelect }
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
                Friends
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
