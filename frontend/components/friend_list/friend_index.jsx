import React from 'react';
import FriendShow from './friend_show';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selector: ""};
    this.handleSelect = this.handleSelect.bind(this);
    this.renderFriends = this.renderFriends.bind(this);
  }


  handleSelect(selected) {
    return (e) => {
      this.setState({
        selector: selected
      });
    };
  }

  renderFriends() {
    let friends = [];
    for (let i = 0; i < this.props.friendList.length; i++) {
      let userId = this.props.friendList[i];
      let user = this.props.users[userId];

      if (user) {
        let friend = <FriendShow
          user={ user }
          id= { userId }
          key={ i }
          />;


        switch (this.state.selector) {
          case "PENDING":
          friends.push(friend);
          break;
          case "ONLINE":

          if (user.online_status) {
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

    return (
      <div className='message-container'>
        <div className='friend-selector'>
          <div className='add-friend-button purple-back' onClick={ this.props.addFriend }>Add Friend</div>
          <div className='verticle-separator'></div>
          <div className='friend-selector-item' onClick={ this.handleSelect("ALL") }>All</div>
          <div className='friend-selector-item' onClick={ this.handleSelect("ONLINE") }>Online</div>
          <div className='friend-selector-item' onClick={ this.handleSelect("PENDING") }>Pending</div>
        </div>
        <div className='friend-list-container'>
          <div className='friend-table-header'>
            <div className='friend-table-tab'>Name</div>
            <div className='verticle-separator'></div>
            <div className='friend-table-tab'>Status</div>
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

export default FriendIndex;
