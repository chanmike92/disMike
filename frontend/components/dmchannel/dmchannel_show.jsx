import React from 'react';
import FriendIndexContainer from '../friend_list/friend_index_container';
import GreetingContainer from '../greeting/greeting_container';

class DmChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFriends();
  }

  render() {
    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-name-container'>
            <input className='user-search' type='text' placeholder="Find or start a conversation"></input>
          </div>
          <div className='bottom-channels-container'>
            <div className='text-channel-container'>
              <div className='friends-logo'>
                Friends - { this.props.friendCount }
              </div>
              <div className='text-channel-item-container'>

                <div className='text-channel-name'>DIRECT MESSAGES</div>
              </div>
              <ul className='channel-list-container'>

              </ul>
            </div>
              <GreetingContainer />
          </div>
        </div>
        <FriendIndexContainer
          friendList={ this.props.friendList }
          channelId={ this.props.channelId }
        />
      </div>
    );
  }
}

export default DmChannelShow;
