import React from 'react';
import ChannelIndex from './channel_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentServer;
  }

  componentDidMount() {
    this.props.fetchAllChannels(this.props.match.params.serverId);
  }

  componentWillReceiveProps(newProps){

    if(newProps !== this.props){
      this.props.fetchAllChannels(newProps.match.params.serverId);
    }
  }

  render() {
    const channels = this.props.channels.map(channel => { return (<Channel
      channel={channel}
      key={channel.id}
      currentUser={this.props.currentUser}
      currentServer={this.props.currentServer}
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      />
      );
    });

    const currentServer = this.props.currentServer ? this.props.currentServer.name : "";
    const currentServerId = this.props.currentServer ? this.props.currentServer.id : "";

    return (
      <div className='channel-container'>

        <div className='server-name-container'>
          <div className='server-name'>{currentServer}</div>
          <button onClick={() => this.props.deleteServer(currentServerId).then(() => {
              this.props.history.push('/')
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
