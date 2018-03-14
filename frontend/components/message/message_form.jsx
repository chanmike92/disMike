
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';



class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: '', channel_id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollBottom = this.scrollBottom.bind(this);
  }

  componentDidMount() {

    this.props.fetchAChannel(this.props.match.params.channelId).
    then(() => {
      this.setState({ channel_id: this.props.currentChannel.id });
    });
    this.scrollBottom();
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
    // e.preventDefault();
      if (e.key === 'Enter') {
      const element = document.getElementById("messages");
      element.scrollTop = element.scrollHeight;
      const message = Object.assign({}, this.state);
      this.props.processForm(message).then(this.setState({body: ''})).
      then(this.scrollBottom());

    }
  }

  scrollBottom() {
    const element = document.getElementById("messages");
    element.scrollTop = element.scrollHeight;
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    debugger
    const currentChannel = this.props.currentChannel ?
    this.props.currentChannel.name : "";
    const currentChannelId = this.props.currentChannel ?
    this.props.currentChannel.id : "";

    return (
      <div className='message-form'>
        <form className='form-input' onKeyPress={this.handleSubmit}>
          <textarea type='text'
              id='textareaInput'
              className='message-input-field'
              onChange={this.handleInput('body')}
              value={this.state.body}
              placeholder={`Message #${currentChannel}`}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);
