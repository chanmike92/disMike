import React from 'react';
import ChannelIndex from './channel_index';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import MessageShowContainer from '../message/message_show_container';
import EmptyChannelMessages from '../message/empty_channel_message';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentServerId !== undefined) {
      this.props.fetchAServer(this.props.currentServerId)
      .then(
        (action) => {
        const channels = Object.values(action.payload.channels)
        if (channels.length > 0 && this.props.currentUser) {
          const channelId = channels[0].id
          this.props.history.replace(`/${this.props.currentServerId}/${channelId}`)
        }
      })
    }
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.currentServerId !== nextProps.currentServerId) {
      if (parseInt(nextProps.currentServerId)) {
        this.props.fetchAServer(nextProps.currentServerId)
      }
      else {
        this.props.history.replace(`/@me/`)
      }
    }
  }

  componentWillUnmount() {
    this.props.clearState();
  }




  render() {
    const channels = this.props.channelIds.map((id, idx) => {
        const active = this.props.channelId === id ? true : false;
      if (this.props.channels[id]) {
        return (<ChannelIndex
        key={ idx }
        id={ id }
        currentUserId={ this.props.currentUserId }
        currentServerId={ this.props.currentServerId }
        channelId={ this.props.channelId }
        channel={ this.props.channels[id] }
        updateForm={this.props.updateForm}
        deleteChannel={this.props.deleteChannel}
        fetchAChannel={this.props.fetchAChannel}
        fetchAServer={this.props.fetchAServer}
        currentServer={this.props.currentServer}
        currentServerOwnerId={this.props.currentServerOwnerId}
        currentUserId={this.props.currentUserId}
        active={ active }
        />);
        }
      }
    );



    const deletebutton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaicons-container' onClick={ this.props.deleteServer }>
        <i className="far fa-times-circle"></i>
      </button>
      :
      "";

      const dropDownMenu =
        <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">
          <i className="fas fa-angle-down"></i>
        </button>
        <div id="myDropdown" class="dropdown-content">

        </div>
      </div>;


      const dropDown = (e) => {
        e.preventDefault();
        document.getElementById("myDropdown");
      };

    const createButton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaplus' onClick={ this.props.createForm }>
        +
      </button>
      :
      "";

    const messages = this.props.channelId ? <MessageShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      messageType={ "Channel" }
    /> : <EmptyChannelMessages />;

    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-name-container dropdown'>
            <button className="server-name-container dropbtn">
              <div className='server-name'>{this.props.currentServerName}</div>
              <i className="fas fa-angle-down"></i>
            </button>
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
        { messages}
        </div>
      );
    }
  }

export default withRouter(ChannelShow);
