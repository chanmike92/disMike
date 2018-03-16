import React from 'react';
import MessageIndex from './message_index';
import MessageFormContainer from './message_form_container';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.scrollBottom = this.scrollBottom.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllMessages(this.props.match.params.channelId);
    this.subscription = App.cable.subscriptions.create(
      {channel: 'ChatChannel', id: this.props.match.params.channelId},
      { received: (data) => { this.props.receiveAMessage(data) }});
    this.scrollBottom();
  }

  componentWillReceiveProps(newProps) {
    if (JSON.stringify(this.props.messageIds) !== JSON.stringify(newProps.messageIds)) {
      this.scrollBottom();
    }

    if (newProps.match.params.channelId !== this.props.match.params.channelId) {
      this.subscription.unsubscribe();

      this.subscription = App.cable.subscriptions.create(
        {channel: 'ChatChannel', id: newProps.match.params.channelId},
        { received: (data) => { newProps.receiveAMessage(data) }});

    }
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  scrollBottom() {
    setTimeout(() => {
      const element = document.getElementById("messages");
      element.scrollTop = element.scrollHeight;
    }, 10)
  }

  render() {

    const messages = this.props.messageIds.map((messageId, idx) => {

      return (<MessageIndex
        message={ this.props.messages[messageId] }
        key={ idx }
      />
      );
    });


    if (this.props.match.params.channelId === undefined) {

      return (<div className='message-container'></div>)
    } else {

    return (
        <div className='message-container'>
          <div className='channel-title-name-container'>
            <div className='channel-title-name'># {this.props.currentChannelName}</div>
          </div>
          <div className='bottom-message-container'>
            <ul id='messages' className='message-list-container'>
              {messages}
            </ul>
          <div className='message-body'>
            <MessageFormContainer />
          </div>
        </div>
        </div>
      );
    }
  }
}

export default MessageShow;
