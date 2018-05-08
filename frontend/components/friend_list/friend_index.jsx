import React from 'react';
import FriendShow from './friend_show';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllFriends();
  }

  render() {

    const friends = this.props.friendList.map((userId, idx) => {
      if (this.props.users[userId]) {
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
        <div className='friend-nav-bar'>
          <div className='friend-selector'>
            <div>All</div>
            <div>Online</div>
            <div>Pending</div>
          </div>
        </div>
        <div >
          {friends}
        </div>
      </div>
    );
  }
}

export default FriendIndex;
