import React from 'react';
import UserIndex from './user_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.fetchAllUsers(this.props.serverId);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   if (this.props.serverId !== newProps.serverId ) {
  //     this.props.fetchAllUsers(newProps.serverId);
  //   }
  // }

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
