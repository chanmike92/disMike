import React from 'react';
import ChannelIndex from './channel_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {

  componentDidMount() {
    this.props.fetchAServer(this.props.match.params.serverId);
  }

  componentWillReceiveProps(newProps) {
    debugger
    if(newProps.match.params.serverId !== this.props.match.params.serverId) {
      this.props.fetchAServer(newProps.match.params.serverId);

    }
  }

  render() {

    const channels = this.props.relevantChannels.map((channel, idx) => { return (<ChannelIndex
      key={ idx }
      currentUserId={ this.props.currentUserId }
      currentServerId={ this.props.currentServerId }
      channel={ channel }
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      fetchAChannel={this.props.fetchAChannel}
      />
      );
    });



    const deletebutton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaicons-container' onClick={() => this.props.deleteServer(this.props.currentServerId).then(() => {
          this.props.history.push(`/${this.props.currentUserId}/server/`)
        })}>
        <i className="far fa-times-circle"></i>
      </button>
      :
      ""

    return (
      <div className='channel-container'>

        <div className='server-name-container'>
          <div className='server-name'>{this.props.currentServerName}</div>
          {deletebutton}
        </div>
        <div className='bottom-channels-container'>
          <div className='text-channel-container'>
            <div className='text-channel-item-container'>
              <div className='text-channel-name'>TEXT CHANNELS</div>
              <button className='fafaplus' onClick={this.props.createForm}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <ul className='channel-list-container'>
              {channels}
            </ul>
          </div>
          <GreetingContainer />
        </div>
      </div>

    );
  }
}

export default ChannelShow;
