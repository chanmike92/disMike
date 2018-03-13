import React from 'react';
import ChannelIndex from './channel_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAServer(this.props.match.params.serverId);
    this.props.fetchAllChannels(this.props.match.params.serverId);
  }

  componentWillReceiveProps(newProps){

    if(newProps.match.params.serverId !== this.props.match.params.serverId){
      this.props.fetchAllChannels(newProps.match.params.serverId);
      this.props.fetchAServer(newProps.match.params.serverId);
    }
  }

  render() {
    const currentUserId = this.props.currentUser ? this.props.currentUser.id : "";
    const currentUser = this.props.currentUser ? this.props.currentUser : "";
    const currentServer = this.props.currentServer ? this.props.currentServer.name : "";
    const currentServerId = this.props.currentServer ? this.props.currentServer.id : "";

    const channels = this.props.channels.map(channel => { return (<ChannelIndex
      channel={channel}
      key={channel.id}
      currentUser={currentUser}
      currentUserId={currentUserId}
      currentServer={ currentServer }
      currentServerId={ currentServerId }
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      fetchAChannel={this.props.fetchAChannel}
      />
      );
    });


    return (
      <div className='channel-container'>

        <div className='server-name-container'>
          <div className='server-name'>{currentServer}</div>
          <button onClick={() => this.props.deleteServer(currentServerId).then(() => {
              this.props.history.push(`/${currentUserId}/servers/`)
            })}>X</button>
        </div>
        <div className='bottom-channels-container'>
          <div className='text-channel-container'>
            <div className='text-channel-item-container'>
              <div className='text-channel-name'>TEXT CHANNELS</div>
              <button onClick={this.props.createForm}>+</button>
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
