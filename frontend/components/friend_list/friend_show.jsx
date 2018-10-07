import React from 'react';
import FriendIndex from './friend_index';

import { CSSTransitionGroup } from 'react-transition-group';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderFriends = this.renderFriends.bind(this);
  }

  renderFriends() {
    let friends = [];
    for (let i = 0; i < this.props.friendList.length; i++) {
      let userId = this.props.friendList[i];
      let user = this.props.users[userId];

      if (user) {
        let dmId = user.dmId;
        let dm = this.props.dms[dmId] || {};
        let friend = <FriendIndex
          user={ user }
          id={ userId }
          currentUserServers={ this.props.servers }
          key={ i }
          dm={ dm }
          createDm={ this.props.createDm }
          updateDm={ this.props.updateDm }
          addFriend={ this.props.addFriend }
          acceptFriend={ this.props.acceptFriend }
          deleteFriend={ this.props.deleteFriend }
          />;

        switch (this.props.selector) {
          case "ALL":
          if (user.friendship_status === "ACCEPTED") {
            friends.push(friend);
          }
          break;
          case "PENDING":
          if (user.friendship_status !== "ACCEPTED") {

            friends.push(friend);
          }
          break;
          case "ONLINE":
          if (user.online_status && user.friendship_status === "ACCEPTED") {
            friends.push(friend);
          }
          break;
          default:
            friends.push(friend);
        }
      }
    }
    return friends;
  }

  render() {
    let friends = this.renderFriends();
    const active = (selector) => this.props.selector === selector ? "friend-selector-item friend-active-selector" : "friend-selector-item";

    return (
      <div className='message-container'>
        <div className='friend-selector'>
          <div className='add-friend-button purple-back' onClick={ this.props.addNewFriend }>Add Friend</div>
          <div className='verticle-separator'></div>
          <div className={ active("ALL") } draggable="false" onClick={ this.props.handleSelect("ALL") }>All</div>
          <div className={ active("ONLINE") } draggable="false" onClick={ this.props.handleSelect("ONLINE") }>Online</div>
          <div className={ active("PENDING") } draggable="false" onClick={ this.props.handleSelect("PENDING") }>Pending</div>
        </div>
        <div className='friend-list-container'>
          <div className='friend-table-header'>
            <div className='friend-table-tab'>Name</div>
            <div className='verticle-separator'></div>
            <div className='friend-table-tab status'>Status</div>
            <div className='verticle-separator'></div>
            <div className='friend-table-tab status'>Mutual Servers</div>
            <div className='verticle-separator'></div>
          </div>
          <div className='friend-index-container'>
            {friends}
          </div>
        </div>

      </div>
    );
  }
}

export default FriendShow;
