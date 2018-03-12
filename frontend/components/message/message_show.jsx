import React from 'react';
import MessageIndex from './message_index';
import MessageFormContainer from './message_form_container';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageShow extends React.Component {

  componentDidMount() {

    this.props.fetchAllMessages(this.props.match.params.channelId);
  }

  componentWillReceiveProps(newProps){
    if(newProps !== this.props) {
      this.props.fetchAllMessages(newProps.match.params.channelId);
    }
  }

  render() {
    const messages = this.props.messages.map(message => { return (<MessageIndex
      message={message}
      key={message.id}
      />
      );
    });

    const currentChannel = this.props.currentChannel ? this.props.currentChannel.name : "";
    const currentChannelId = this.props.currentChannel ? this.props.currentChannel.id : "";
    return (
      <div className='message-container'>
        <div className='channel-title-name-container'>
          <div className='channel-title-name'># {currentChannel}</div>
        </div>
        <div className='bottom-message-container'>
          <ul className='message-list-container'>
            {messages}
          </ul>
        </div>
          <MessageFormContainer />
      </div>
    );
  }
}

export default MessageShow;
