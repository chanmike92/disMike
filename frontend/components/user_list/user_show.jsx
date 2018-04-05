import React from 'react';
import UserIndex from './user_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllUsers(this.props.match.params.serverId);
  }
  //
  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
      this.props.fetchAServer(nextProps.match.params.serverId);
    }
  }


  render() {
    const users = this.props.userIds.map((userId, idx) =>{ return (<UserIndex
      user={ this.props.users[userId] }
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
