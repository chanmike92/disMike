import React from 'react';
import FriendShow from './friend_show';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selector: ""};
  }

  componentDidMount() {
    this.props.fetchAllFriends();
  }

  render() {

    const friends = this.props.friendList.map((userId, idx) => {
      if (this.props.users[userId] && this.props.user) {
      return (<FriendShow
      user={ this.props.users[userId] }
      id= { userId }
      key={ idx }
      />
        );
      }
    });

    return (
      <div className='message-container'>
        <div className='friend-selector'>
          <div className='add-friend-button'>Add Friend</div>
          <div className='verticle-separator'></div>
          <div className='friend-selector-item'>All</div>
          <div className='friend-selector-item'>Online</div>
          <div className='friend-selector-item'>Pending</div>
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
