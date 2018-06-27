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

    // const users = this.props.userIds.map((userId, idx) => {
    //   if (this.props.users[userId]) {
    //   return (<UserIndex
    //   user={ this.props.users[userId] }
    //   userId={ userId }
    //   id= { userId }
    //   key={ idx }
    //   currentServerOwnerId={this.props.currentServerOwnerId}
    //   />
    //   );
    //   }
    // });

    const onlineUsers = [];
    const offlineUsers = [];

    this.props.userIds.map((userId, idx) => {
      if (this.props.users[userId]) {
        if (this.props.users[userId].online_status) {
          onlineUsers.push(
            <UserIndex
            user={ this.props.users[userId] }
            userId={ userId }
            id= { userId }
            key={ idx }
            currentServerOwnerId={this.props.currentServerOwnerId}
          />);
        } else {
          offlineUsers.push(
            <UserIndex
            user={ this.props.users[userId] }
            userId={ userId }
            id= { userId }
            key={ idx }
            currentServerOwnerId={this.props.currentServerOwnerId}
          />);
        }
      }
    });



    return (
      <div className='user-container'>
          <div className='user-counter'>
            Online - { onlineUsers.length }
          </div>
          { onlineUsers }
          <div className='user-counter'>
            Offline - { offlineUsers.length }
          </div>
          { offlineUsers }
      </div>
    );
  }
}

export default UserShow;
