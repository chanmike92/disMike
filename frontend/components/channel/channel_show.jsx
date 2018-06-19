import React from 'react';
import ChannelIndex from './channel_index';
import { Route, withRouter, Link, Redirect } from 'react-router-dom';
import MessageShowContainer from '../message/message_show_container';
import EmptyChannelMessages from '../message/empty_channel_message';
import GreetingContainer from '../greeting/greeting_container';

class ChannelShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderChannels = this.renderChannels.bind(this);
  }

  componentDidMount() {
    const validChannels = this.props.currentServer.channel_ids;
    if (this.props.channelId === undefined || validChannels[this.props.channelId]) {
    } else {

        if (validChannels.length > 0 && (this.props.currentServer.owner_id === this.props.currentUser.id)) {
          let channelId = validChannels[0];
          this.props.history.replace(`/${this.props.serverId}/${channelId}`);
        }
      // })
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
    const channels = this.props.channels.map((channel, idx) => {
        const active = this.props.channelId === channel.id ? true : false;

        return (<ChannelIndex
        key={ idx }
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
        />);
      });
  return channels;
  }



  render() {

    let channels = this.renderChannels();



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



    const messages = this.props.channel ? <MessageShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
      messageType={ "Channel" }
    /> : <EmptyChannelMessages />;

    return (
      <div className='subcomponent-container'>
        <div className='channel-container'>
          <div className='server-title-container dropdown'>
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
