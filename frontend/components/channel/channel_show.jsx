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
    const currentServerOwnerId = this.props.currentServer ? this.props.currentServer.owner_id : "";
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

    const deletebutton = (currentUserId === currentServerOwnerId) ?
      <button className='fafaicons-container' onClick={() => this.props.deleteServer(currentServerId).then(() => {
          this.props.history.push(`/${currentUserId}/servers/`)
        })}>
        <i class="far fa-times-circle"></i>
      </button>
      :
      ""

    return (
      <div className='channel-container'>

        <div className='server-name-container'>
          <div className='server-name'>{currentServer}</div>
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
