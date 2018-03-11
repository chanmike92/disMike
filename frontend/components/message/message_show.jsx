import React from 'react';
import Message from './message';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentChannel;
    this.handleChannelDelete.bind(this);
  }

  componentDidMount() {

    this.props.fetchAChannel(this.props.match.params.channelId);
    this.props.fetchAllChannels(this.props.match.params.channelId);
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.channelId !== this.props.match.params.channelId){
      this.props.fetchAllChannels(newProps.match.params.channelId);
      this.props.fetchAChannel(newProps.match.params.channelId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);

    this.props.processForm(message).then(this.setState({body: ''}));
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
      <div className='channel-container'>
        <div className='channel-name-container'>
          <div className='channel-name'># {currentChannel}</div>
        </div>
        <div className='bottom-channels-container'>
          <div className='text-channel-container'>
            <ul className='message-list-container'>
              {messages}
            </ul>
          </div>
          <div>
            <form onSubmit={this.handleSubmit} className="message-form">
              <input className='message-input-field' type='text' onChange={this.handleInput('name')} value={this.state.body} placeholder={`Message ${currentChannel}`}></input>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default MessageShow;
