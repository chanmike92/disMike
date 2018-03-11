import React from 'react';
import Channel from './channel';
import { withRouter, Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  componentDidMount() {
    this.props.fetchAllChannels(this.props.currentServerId);
  }

  componentWillReceiveProps(newProps){
  if(newProps.currentServerId !== this.props.currentServerId){
    this.props.fetchTextChannels(newProps.currentServerId);
  }
}

  render() {
    const channels = this.props.channels.map(channel => { return (<Channel
      channel={channel}
      key={channel.id}
      deleteChannel={this.props.deleteChannel}
      />
      );
    });

    debugger

    return (
      <div className='channel-container'>
        <div>Server Name Here</div>
        <div>TEXT CHANNELS <button onClick={this.props.createForm}>+</button></div>
        <GreetingContainer />
      </div>
    );
  }
}

export default ChannelShow;
