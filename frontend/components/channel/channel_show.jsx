import React from 'react';
import Channel from './channel';
import { withRouter, Link, Redirect } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentServer;
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
    const channels = this.props.channels.map(channel => { return (<Channel
      channel={channel}
      key={channel.id}
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      />
      );
    });


    return (
      <div className='channel-container'>

        <div className='server-name-container'>
          <div className='server-name'>CURRENT SERVER</div>
          <button>X</button>
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
