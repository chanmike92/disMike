import React from 'react';
import FriendShow from './friend_show';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selector: "ALL"};
    this.handleSelect = this.handleSelect.bind(this);
  }

  // componentDidMount() {
  //   this.props.fetchAllFriends();
  // }

  handleSelect(selected) {
    return (e) => {
      this.setState({
        selector: selected
      });
    };
  }

  render() {
      // if (user) {
    const friends = this.props.friendList.map((userId, idx) => {
      let user = this.props.users[userId];

        // switch (this.state.selector)
          return (<FriendShow
          user={ this.props.users[userId] }
          id= { userId }
          key={ idx }
          />);
        // }
      });
    // });

    return (
      <div className='message-container'>
        <div className='friend-selector'>
          <div className='add-friend-button purple-back' onClick={ this.props.addFriend }>Add Friend</div>
          <div className='verticle-separator'></div>
          <div className='friend-selector-item' onClick={ () => this.handleSelect("ALL") }>All</div>
          <div className='friend-selector-item' onClick={ () => this.handleSelect("ONLINE") }>Online</div>
          <div className='friend-selector-item' onClick={ () => this.handleSelect("PENDING") }>Pending</div>
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
