import React from 'react';
import ChannelIndex from './channel_index';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import MessageShowContainer from '../message/message_show_container';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {

  componentDidMount() {

    if (this.props.match.params.serverId === '@me') {
      this.props.fetchAServer(this.props.currentUserPersonalServer)
    } else {
      this.props.fetchAServer(this.props.match.params.serverId)
    }
    // .then(
    //   (action) => {
    //
    //     const channels = Object.values(action.payload.channels)
    //     if (channels.length > 0 && this.props.currentUser) {
    //       const channelId = channels[0].id
    //       this.props.history.replace(`/${this.props.currentUserId}/server/${this.props.currentServerId}/channel/${channelId}`)
    //     }
    //   }
    // );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
      if (nextProps.match.params.serverId === '@me') {
        this.props.fetchAServer(nextProps.currentUserPersonalServer)
      } else {
        this.props.fetchAServer(nextProps.match.params.serverId)
      }
    }
  }


  render() {
    const channels = this.props.channelIds.map((id, idx) => {
      if (this.props.channels[id]) {
      return (<ChannelIndex
      key={ idx }
      id={ id }
      currentUserId={ this.props.currentUserId }
      currentServerId={ this.props.currentServerId }
      channel={ this.props.channels[id] }
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      fetchAChannel={this.props.fetchAChannel}
      fetchAServer={this.props.fetchAServer}
      currentServer={this.props.currentServer}
      currentServerOwnerId={this.props.currentServerOwnerId}
      currentUserId={this.props.currentUserId}
      />);
      }
    });



    const deletebutton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaicons-container' onClick={() => this.props.deleteServer(this.props.currentServerId).then(() => {
          this.props.history.push(`/@me/`)
        })}>
        <i className="far fa-times-circle"></i>
      </button>
      :
      ""

    const createButton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaplus' onClick={this.props.createForm}>
        +
      </button>
      :
      "";

    if (this.props.match.params.serverId === '@me') {
      return (
        <div className='channel-container'>
        </div>
      );
    } else {
    return (
        <div className='channel-container'>
          <Route path={`/${this.props.match.url}/:channelId`} component={ MessageShowContainer }></Route>
          <div className='server-name-container'>
            <div className='server-name'>{this.props.currentServerName}</div>
            {deletebutton}
          </div>
          <div className='bottom-channels-container'>
            <div className='text-channel-container'>
              <div className='text-channel-item-container'>
                <div className='text-channel-name'>TEXT CHANNELS</div>
                {createButton}
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
}

export default withRouter(ChannelShow);
