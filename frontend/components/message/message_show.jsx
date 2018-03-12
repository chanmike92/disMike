import React from 'react';
import Message from './message';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: '', author_id: this.props.currentUser.id, channel_id: this.props.match.params.channelId};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    debugger
    this.props.fetchAChannel(this.props.match.params.channelId);
    this.props.fetchAllMessages(this.props.match.params.channelId);
  }

  componentWillReceiveProps(newProps){
    if(newProps !== this.props) {
      this.props.fetchAllMessages(newProps.match.params.channelId);
      this.props.fetchAChannel(newProps.match.params.channelId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({author_id: this.props.currentUser.id});
    debugger
    this.props.makeNewMessage(this.state).then(() => this.setState({body: ''}));
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    const messages = this.props.messages.map(message => { return (<Message
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
          <div className='message-body'>
            <form className='message-form' onSubmit={this.handleSubmit}>
            <input type='text' className='message-input-field' onChange={this.handleInput('body')} value={this.state.body} placeholder={`Message ${currentChannel}`}></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default MessageShow;
