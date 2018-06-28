import React from 'react';
import ChannelIndex from './channel_index';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import MessageShowContainer from '../message/message_show_container';
import EmptyChannelMessages from '../message/empty_channel_message';
import GreetingContainer from '../greeting/greeting_container';
import ServerDropdownContainer from '../dropdown/server_dropdown_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleChannelDropdown: false,
    };
    this.renderChannels = this.renderChannels.bind(this);

    this.handleChannelDropdown = this.handleChannelDropdown.bind(this);
  }

  componentDidMount() {
    const validChannels = this.props.currentServer.channel_ids;
    if (this.props.channelId === undefined || validChannels[this.props.channelId]) {
    } else {

        if (validChannels.length > 0 && (this.props.currentServer.owner_id === this.props.currentUser.id)) {
          let channelId = validChannels[0];
          this.props.history.replace(`/${this.props.serverId}/${channelId}`);
        }
    }
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.serverId !== nextProps.serverId) {
      if (parseInt(nextProps.serverId)) {
        const validChannels = nextProps.currentServer.channel_ids;
        let channelId = validChannels[0];
        this.props.history.replace(`/${nextProps.serverId}/${channelId}`)
      }
      else {
        this.props.history.replace(`/@me/`)
      }
    }
  }

  renderChannels() {
    let channels = [];
    for (let i = 0; i < this.props.channels.length; i++) {

      let channel = this.props.channels[i];
      let active = this.props.channelId == channel.id ? true : false;
      let a = <ChannelIndex
      key={ i }
      id={ channel.id }
      currentUserId={ this.props.currentUserId }
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      channel={ channel }
      updateForm={this.props.updateForm}
      deleteChannel={this.props.deleteChannel}
      fetchAChannel={this.props.fetchAChannel}
      fetchAServer={this.props.fetchAServer}
      currentServer={this.props.currentServer}
      currentServerOwnerId={this.props.currentServerOwnerId}
      currentUserId={this.props.currentUserId}
      active={ active }
      />;
      if (this.state.toggleChannelDropdown) {
        channels.push(a);
      } else {
        if (active) {
          channels.push(a);
        }
      }
    }
    // const channels = this.props.channels.map((channel, idx) => {
    // const active = this.props.channelId === channel.id ? true : false;
    // let currentChannel = <ChannelIndex
    //   key={ idx }
    //   id={ channel.id }
    //   currentUserId={ this.props.currentUserId }
    //   serverId={ this.props.serverId }
    //   channelId={ this.props.channelId }
    //   channel={ channel }
    //   updateForm={this.props.updateForm}
    //   deleteChannel={this.props.deleteChannel}
    //   fetchAChannel={this.props.fetchAChannel}
    //   fetchAServer={this.props.fetchAServer}
    //   currentServer={this.props.currentServer}
    //   currentServerOwnerId={this.props.currentServerOwnerId}
    //   currentUserId={this.props.currentUserId}
    //   active={ active }
    //   />;
    //   if (this.state.toggleChannelDropdown) {
    //     return currentChannel;
    //   } else {
    //     if (active) {
    //       debugger
    //       return currentChannel;
    //     }
    //   }
    // });
    debugger
    // return channels;
  return channels;
  }

  handleChannelDropdown() {
    this.setState({ toggleChannelDropdown: !this.state.toggleChannelDropdown});
  }


  render() {

    let channels = this.renderChannels();

    const createButton = (this.props.currentUserId === this.props.currentServerOwnerId) ?
      <button className='fafaplus' onClick={ this.props.createForm }>
        +
      </button>
      :
      "";

    const messages = this.props.channel ? <MessageShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      messageType={ "Channel" }
    /> : <EmptyChannelMessages />;

    const serverDropdown = this.props.dropdown === "server" ? <ServerDropdownContainer
      server={ this.props.currentServer }
      currentUser={ this.props.currentUser }
      /> : "";

    const dropdownImg = this.props.dropdown === "server" ? "exit.svg" : "arrow_down.svg";
    const dropdownActive = this.props.dropdown === "server" ? "server-dropdown-image dropdown-active" : "server-dropdown-image";

    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-title-container dropdown'>
            <button className="server-name-container dropbtn"
              onClick={ this.props.dropdown === "server" ? this.props.closeDropdown : this.props.openDropdown }>
              <div className='server-name'>{this.props.currentServerName}</div>
              <div className={ dropdownActive }></div>
            </button>
          </div>
          <ServerDropdownContainer
            server={ this.props.currentServer }
            currentUser={ this.props.currentUser }
            active={ this.props.dropdown }
            />
          <div className='bottom-channels-container'>
            <div className='text-channel-container'>
              <div className='text-channel-item-container'>
                <div className='text-channel-name' onClick={ this.handleChannelDropdown }>TEXT CHANNELS</div>
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
