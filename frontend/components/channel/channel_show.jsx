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
      toggleChannelDropdown: true,
    };
    this.renderChannels = this.renderChannels.bind(this);
    this.handleChannelDropdown = this.handleChannelDropdown.bind(this);
    this.handleContextClick = this.handleContextClick.bind(this);
  }

  handleContextClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.openDropdown({dropdownType: "serverindex", x: e.clientX,
      y: e.clientY });
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
    const channelDropdown = this.state.toggleChannelDropdown ? "channel-dropdown-image dropdown-active" : "channel-dropdown-image";

    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-title-container dropdown'>
            <button className="server-name-container dropbtn"
              onClick={ this.props.dropdown === "server" ? this.props.closeDropdown : this.props.openServerDropdown }>
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
            <div className='channel-list-container'>
              <div className='text-channel-item-container'>
                <div className='text-channel-name' onClick={ this.handleChannelDropdown }>
                  <div className={ channelDropdown }></div>
                  TEXT CHANNELS
                </div>
                {createButton}
              </div>
              {channels}
            </div>
          </div>
          <GreetingContainer />
        </div>
        { messages}
        </div>
      );
    }
  }

export default withRouter(ChannelShow);
