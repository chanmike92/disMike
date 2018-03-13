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

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
      this.props.fetchAllUsers(nextProps.match.params.serverId);
    }
  }


  render() {

    const users = this.props.users.map(user => { return (<UserIndex
      user={user}
      key={user.id}
      currentServer={this.props.currentServer}
      />
      );
    });



    return (
      <div className='user-container'>
        <div>
          Users-{users.length}
        </div>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}

export default UserShow;
