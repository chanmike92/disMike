import React from 'react';
import MessageIndex from './message_index';
import MessageFormContainer from './message_form_container';
import UserShowContainer from '../user_list/user_show_container';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.scrollBottom = this.scrollBottom.bind(this);
  }

  componentDidMount() {
    if (this.props.channelId) {
      this.props.fetchAChannel(this.props.channelId);
      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatChannel', id: this.props.channelId, type: this.props.messageType},
        { received: (data) => { this.props.receiveAMessage(data) }});
      this.scrollBottom();
    }
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.channelId)  {
      if (nextProps.channelId !== this.props.channelId) {
        if (this.subscription) {
        this.subscription.unsubscribe();
        }

        this.subscription = App.cable.subscriptions.create(
          {channel: 'ChatChannel', id: nextProps.channelId},
          { received: (data) => { nextProps.receiveAMessage(data) }});

        this.props.fetchAChannel(nextProps.channelId)
      }
      if (JSON.stringify(this.props.messageIds) !== JSON.stringify(nextProps.messageIds)) {
        this.scrollBottom();
      }
    } else {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
    }

  }

  componentWillUnmount() {
    this.props.clearMessages();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  scrollBottom() {
    const element = document.getElementById("messages");
    if (element) {
      setTimeout(() => {
        element.scrollTop = element.scrollHeight;
      }, 10);
    }
  }

  render() {

    const messages = this.props.messageIds.map((messageId, idx) => {

      return (<MessageIndex
        message={ this.props.messages[messageId] }
        key={ idx }
      />
      );
    });


    if (!this.props.channelId) {
      return (<div className='message-container'>
        <div className='empty-channel-container'>
          <div className='empty-channel-icon'>
          </div>
          <div className='empty-channel-text'>
            <div className='no-channel-text'>No Text Channel</div>
            <div className='empty-channel-message'>You find yourself in a strange place. You don't have access to any text channels, or there are none in this server.</div>
          </div>
        </div>
      </div>)
    }
    else {
      return (
          <div className='message-container'>
            <div className='channel-title-name-container'>
              <div className='channel-title-name'># <div className='channel-actual-name'>{this.props.currentChannelName}</div></div>
            </div>
            <div className='bottom-container'>
              <div className='bottom-container-divider'>
                <div className='bottom-message-container'>
                  <ul id='messages' className='message-list-container'>
                    {messages}
                  </ul>
                  <div className='message-body'>
                    <MessageFormContainer
                      messageType={ this.props.messageType }
                      channelId={ this.props.channelId }
                      />
                  </div>
                </div>
              <UserShowContainer serverId={ this.props.currentServerId }/>
            </div>
          </div>
          </div>

      );
    }
  }
}

export default MessageShow;
