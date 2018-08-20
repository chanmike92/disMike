import React from 'react';
import MessageIndex from './message_index';
import MessageFormContainer from './message_form_container';
import MessageIndexBeginning from './message_index_beginning';
import UserShowContainer from '../user_list/user_show_container';
import { withRouter, Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import * as ReactDOM from 'react-dom';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.scrollBottom = this.scrollBottom.bind(this);
    this.scrollByPosition = this.scrollByPosition.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.generateDate = this.generateDate.bind(this);
    this.generateFullDate = this.generateFullDate.bind(this);
    this.renderGroupMessages = this.renderGroupMessages.bind(this);
  }

  componentDidMount() {
    if (this.props.channelId) {
  //     // this.props.fetchAChannel(this.props.channelId);
  //     // this.subscription = App.cable.subscriptions.create(
  //     //   {channel: 'ChatChannel', id: this.props.channelId, type: this.props.messageType},
  //     //   { received: (data) => { this.props.receiveAMessage(data) }});
      this.scrollBottom();
    }
  }

  // componentWillReceiveProps(nextProps) {
  //
  //   if (nextProps.channelId)  {
  //     if (nextProps.channelId !== this.props.channelId) {
  //       if (this.subscription) {
  //       this.subscription.unsubscribe();
  //       }
  //       this.subscription = App.cable.subscriptions.create(
  //         {channel: 'ChatChannel', id: nextProps.channelId, type: nextProps.messageType},
  //         { received: (data) => { nextProps.receiveAMessage(data) }});
  //     }
  //   } else {
  //     if (this.subscription) {
  //       this.subscription.unsubscribe();
  //     }
  //   }
  // //
  // }

  // componentWillUnmount() {
  //   // this.props.clearMessages();
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.channelId !== this.props.channelId) {
      this.scrollBottom();
    } else {
      if (prevProps.messages.length !== this.props.messages.length) {
        if (this.props.lastMessage.author_id ===  this.props.currentUser.id) {
          this.scrollBottom();
        } else {
          this.scrollByPosition();
        }
      }
    }
  }


  scrollBottom() {
    const messageList = this.refs.messageList;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;

    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  scrollByPosition() {
    const messageList = this.refs.messageList;
    const scrollHeight = messageList.scrollHeight;
    const height = messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    let currentHeight = ReactDOM.findDOMNode(messageList).scrollTop;
    // 20 due to padding from message form
    ReactDOM.findDOMNode(messageList).scrollTop = maxScrollTop - currentHeight === 20 ? maxScrollTop : currentHeight;
  }

  generateDate(date) {

    const today = new Date();
    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    let time;
    if (today.getMonth() === date.getMonth()
      && today.getDate() === date.getDate()
      && today.getYear() === date.getYear()) {
      time = "Today";
    } else if (yesterday.getMonth() === date.getMonth()
      && yesterday.getDate() === date.getDate()
      && yesterday.getYear() === date.getYear()) {
      time = "Yesterday";
    } else {
      time = date;
    }
    return time;
  }

  generateFullDate(date) {
    const thisMonth = "January February March April May June July August September October November December".split(' ')[date.getMonth()];
    const thisDay = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')[date.getDay()];
    return `${thisMonth} ${date.getDate()}, ${date.getFullYear()}`;
  }

  renderMessages(groupMessages) {
    let messages = [];
    messages.push(
      <MessageIndexBeginning
        key={"beginning"}
        channelName={this.props.channelName}
        currentUser={this.props.currentUser}
        messageType={this.props.messageType}
      />
    );
     for (let i = 0; i < groupMessages.length; i++) {
       let message = groupMessages[i][0] || {};
       let prevMessage = groupMessages[i - 1] || {};
       prevMessage = prevMessage[0] || {};
       let thisDate = new Date(message.created_at);
       let prevDate = new Date(prevMessage.created_at) || {};
       if (thisDate.getDate() !== prevDate.getDate()
         || thisDate.getMonth() !== prevDate.getMonth()
         || thisDate.getYear() !== prevDate.getYear()) {
          let date = this.generateFullDate(thisDate);
          messages.push(
            <div className="message-index-divider" key={ `divider-${i}` }>
              <div></div>
              <span className="message-index-divider-text">
                { date }
              </span>
              <div></div>
            </div>
          );
        }
        messages.push(<MessageIndex
          key={ `message-${message.id}` }
          profilepic={ message.profilepic }
          author={ message.author }
          dateNum={ message.created_at }
          date={ this.generateDate(new Date(message.created_at)) }
          messages={ groupMessages[i] }
          />);


      }

      return messages;
  }

  renderGroupMessages() {
    let messages = [];
    let groupedMessages = [];
     for (let i = 0; i < this.props.messages.length; i++) {
       let message = this.props.messages[i] || {};
       let prevMessage = this.props.messages[i - 1] || {};
       let thisDate = new Date(message.created_at);
       let prevDate = new Date(prevMessage.created_at) || {};
       if (thisDate.getDate() !== prevDate.getDate()
         || thisDate.getMonth() !== prevDate.getMonth()
         || thisDate.getYear() !== prevDate.getYear()) {
           if (groupedMessages.length > 0) {
             messages.push(groupedMessages);
             groupedMessages = [];
           }
        }

        if (i === 0) {
          groupedMessages.push(message);
        }
        else if ((thisDate.getTime() > prevDate.getTime() + 120000)
           || (message.author !== prevMessage.author)) {
           if (groupedMessages.length > 0) {
             messages.push(groupedMessages);
           }
          groupedMessages = [];
          groupedMessages.push(message);
        }
        else {
          groupedMessages.push(message);
        }
      }

      if (groupedMessages.length > 0) {
        messages.push(groupedMessages);
      }

      return messages;
  }


  render() {
    let groupMessages = this.renderGroupMessages();
    let messages = this.renderMessages(groupMessages);
    let symbol = this.props.messageType === "Channel" ? '#' : '@';
    let userComponent = this.props.messageType === "Channel" ? <UserShowContainer
                    serverId={ this.props.serverId }
                    channelId={ this.props.channelId }
                    messageType={ this.props.messageType }
                  /> : <div></div>;
      return (
          <div className='message-container'>
            <div className='channel-title-name-container'>
              <div className='channel-title-name'>{symbol} <div className='channel-actual-name'>{this.props.channelName}</div></div>
            </div>
            <div className='bottom-container'>
              <div className='bottom-container-divider'>
                <div className='bottom-message-container'>
                  <ul id='messages' ref='messageList' className='message-list-container'>
                    {messages}
                  </ul>
                  <div className='message-form'>
                    <MessageFormContainer
                      messageType={ this.props.messageType }
                      channelId={ this.props.channelId }
                      scrollBottom={ this.scrollBottom }
                      symbol={ symbol }
                      />
                  </div>
                </div>
                <UserShowContainer
                  serverId={ this.props.serverId }
                  channelId={ this.props.channelId }
                  messageType={ this.props.messageType }
                />
            </div>
          </div>
          </div>

      );
    }
}

export default MessageShow;
