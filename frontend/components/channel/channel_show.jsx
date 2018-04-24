import React from 'react';
import ChannelIndex from './channel_index';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import MessageShowContainer from '../message/message_show_container';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    if (this.props.currentServerId === '@me') {
    } else {
      this.props.fetchAServer(this.props.currentServerId)
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
    if (this.props.currentServerId !== nextProps.currentServerId) {
      if (nextProps.currentServerId === '@me') {
      } else {
        this.props.fetchAServer(nextProps.currentServerId)
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

    if (this.props.currentServerId === '@me') {
      return (
        <div className='subcomponent-container'>
          <div className='channel-container'>
            <div className='server-name-container'>
              DROPDOWN FOR SEARCH
            </div>
            <div className='bottom-channels-container'>
              <div className='text-channel-container'>
                <div className='text-channel-item-container'>
                  <div className='text-channel-name'>DIRECT MESSAGES</div>
                </div>
                <ul className='channel-list-container'>

                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>

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
        <MessageShowContainer
          serverId={ this.props.serverId }
          channelId={ this.props.channelId }
        />
        </div>

      );
    }
  }
}

export default withRouter(ChannelShow);
