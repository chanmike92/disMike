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
          profilepic={ this.props.users[message.author_id].image_url }
          author={ this.props.users[message.author_id].username }
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
           || (message.author_id !== prevMessage.author_id)) {
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
    let userListToggle = <svg name="People" className='user-list-toggle-button' width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><polygon points="0 0 24 0 24 24 0 24"></polygon><path className="iconForeground-3y9f0B" fill="currentColor" d="M19 19L23 19 23 16.5C23 14.17 18.33 13 16 13 15.71 13 15.38 13.02 15.03 13.05 15.2979181 13.2440097 15.5471657 13.4534892 15.7720754 13.6791778 17.5922944 14.6769857 19 16.1183086 19 18L19 19zM14.3335577 10.4967128C14.8098529 10.8147627 15.3828086 11 16 11 17.66 11 18.99 9.66 18.99 8 18.99 6.34 17.66 5 16 5 15.3827845 5 14.8098082 5.18525173 14.3335019 5.5033244 14.7574619 6.23791814 15 7.09053797 15 8.00006693 15 8.90955601 14.7574832 9.76214095 14.3335577 10.4967128zM9 12C6.79 12 5 10.21 5 8 5 5.79 6.79 4 9 4 11.21 4 13 5.79 13 8 13 10.21 11.21 12 9 12zM9 14C11.67 14 17 15.34 17 18L17 20 1 20 1 18C1 15.34 6.33 14 9 14z"></path></g></svg>;
    let symbol = this.props.messageType === "Channel" ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="hashtag"><path className="foreground-2zy1hc" fill="currentColor" d="M2.27333333,12 L2.74666667,9.33333333 L0.08,9.33333333 L0.313333333,8 L2.98,8 L3.68666667,4 L1.02,4 L1.25333333,2.66666667 L3.92,2.66666667 L4.39333333,0 L5.72666667,0 L5.25333333,2.66666667 L9.25333333,2.66666667 L9.72666667,0 L11.06,0 L10.5866667,2.66666667 L13.2533333,2.66666667 L13.02,4 L10.3533333,4 L9.64666667,8 L12.3133333,8 L12.08,9.33333333 L9.41333333,9.33333333 L8.94,12 L7.60666667,12 L8.08,9.33333333 L4.08,9.33333333 L3.60666667,12 L2.27333333,12 L2.27333333,12 Z M5.02,4 L4.31333333,8 L8.31333333,8 L9.02,4 L5.02,4 L5.02,4 Z" transform="translate(1.333 2)"></path></svg> : '@';
    let userComponent = this.props.messageType === "Channel" ? <UserShowContainer
                    serverId={ this.props.serverId }
                    channelId={ this.props.channelId }
                    messageType={ this.props.messageType }
                  /> : <div></div>;
    let chatSize = this.props.userListToggle ? "" : "message-list-full";
      return (
          <div className='message-container'>
            <div className='channel-title-name-container' onContextMenu={ this.props.handleNoContextClick }>
              <div className='channel-title-name'>{symbol} <div className='channel-actual-name'>{this.props.channelName}</div></div>
              <div className='user-list-toggle-container' onClick={ this.props.handleUserListToggle }>{userListToggle}</div>
            </div>
            <div className='bottom-container'>
              <div className='bottom-container-divider'>
                <div className={`bottom-message-container ${chatSize}`}>
                  <ul id='messages' ref='messageList' className='message-list-container'
                    onContextMenu={ this.props.dropdownType ? (e) => this.props.closeDropdown(e) : this.props.handleNoContextClick }>
                    {messages}
                  </ul>
                  <div className='message-form'>
                    <MessageFormContainer
                      messageType={ this.props.messageType }
                      channelId={ this.props.channelId }
                      scrollBottom={ this.scrollBottom }
                      symbol={ this.props.messageType === "Channel" ? "#" : "@" }
                      />
                  </div>
                </div>
                <UserShowContainer
                  serverId={ this.props.serverId }
                  channelId={ this.props.channelId }
                  messageType={ this.props.messageType }
                  handleNoContextClick={ this.props.handleNoContextClick }
                  userListToggle={ this.props.userListToggle }
                />
            </div>
          </div>
          </div>

      );
    }
}

export default MessageShow;
