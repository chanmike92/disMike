import React from 'react';
import FriendShow from './friend_show';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers(this.props.match.params.serverId);
  }

  componentWillReceiveProps(nextProps) {}

  render() {

    const users = this.props.userIds.map((userId, idx) => { return (<UserIndex
      user={ this.props.users[userId] }
      id= { userId }
      key={ idx }
      currentServerOwnerId={this.props.currentServerOwnerId}
      />
      );
    });

    return (
      <div className='user-container'>
        <div className='user-counter'>
          Members - {users.length}
        </div>

        <ul className='user-list-container'>
          { users }
        </ul>
      </div>
    );
  }
}

export default UserShow;
