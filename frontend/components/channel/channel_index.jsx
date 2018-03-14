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
          <button className='fafaicons-container' onClick={() => this.props.updateForm(this.props.channel)}>
            <i className="fas fa-edit"></i>
          </button>
          <button className='fafaicons-container' onClick={() => this.props.deleteChannel(this.props.channel.id) }>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </li>
    )};
}


export default withRouter(ChannelIndex);
