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

    const friends = this.props.userIds.map((userId, idx) => { return (<FriendShow
      user={ this.props.users[userId] }
      id= { userId }
      key={ idx }
      />
      );
    });

    return (
      <div className='user-container'>

      </div>
    );
  }
}

export default UserShow;
