import React from 'react';
import UserIndex from './user_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleIndexContextClick = this.handleIndexContextClick.bind(this);
  }

  handleIndexContextClick(id, e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.openDropdown({dropdownType: "userindex", x: e.clientX,
      y: e.clientY, id: id});
  }

  render() {

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
            handleIndexContextClick={ this.handleIndexContextClick }
            createDm={ this.props.createDm }
            updateDm={ this.props.updateDm }
            closeModal={ this.props.closeModal }
            currentServerOwnerId={this.props.currentServerOwnerId}
            currentUserId={ this.props.currentUserId }
          />);
        } else {
          offlineUsers.push(
            <UserIndex
            user={ this.props.users[userId] }
            userId={ userId }
            id= { userId }
            key={ idx }
            handleIndexContextClick={ this.handleIndexContextClick }
            closeModal={ this.props.closeModal }
            createDm={ this.props.createDm }
            updateDm={ this.props.updateDm }
            currentServerOwnerId={this.props.currentServerOwnerId}
            currentUserId={ this.props.currentUserId }
          />);
        }
      }
    });

    let active = this.props.userListToggle ? "" : "user-show-inactive";

    return (
      <div className={`user-list ${active}`}
        onContextMenu={ this.props.handleNoContextClick }>
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
      </div>
    );
  }
}

export default UserShow;
