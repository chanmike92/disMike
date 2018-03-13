import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <li className="channel-item-container">
        <div className='channel-name-container'>
          <Link
            to={`/${this.props.currentUserId}/server/${this.props.currentServerId}/channel/${this.props.channel.id}`}
            className='channel-link-item'>
            # {this.props.channel.name}
          </Link>
        </div>
        <div className='channel-controls'>
          <button onClick={this.props.updateForm}>+</button>
          <button onClick={() => this.props.deleteChannel(this.props.channel.id) }>-</button>
        </div>
      </li>
    )};
}


export default withRouter(ChannelIndex);
