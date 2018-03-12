
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: '', channel_id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.props.fetchAChannel(this.props.match.params.channelId).
    then(() => {
      this.setState({ channel_id: this.props.currentChannel.id });
    });
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.channelId !== this.props.match.params.channelId) {
      this.props.fetchAChannel(this.props.match.params.channelId).
      then(() => {
        this.setState({ channel_id: this.props.currentChannel.id });
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);
    this.props.processForm(message).
    then(this.setState({body: ''}));
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    const currentChannel = this.props.currentChannel ?
    this.props.currentChannel.name : "";
    const currentChannelId = this.props.currentChannel ?
    this.props.currentChannel.id : "";

    return (
      <div className='message-body'>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <input type='text'
              className='message-input-field'
              onChange={this.handleInput('body')}
              value={this.state.body}
              placeholder={`Message #${currentChannel}`}>
          </input>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);
