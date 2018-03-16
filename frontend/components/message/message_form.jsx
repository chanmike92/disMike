
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';



class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: '', channel_id: this.props.currentChannelId};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.scrollBottom = this.scrollBottom.bind(this);
  }

  componentDidMount() {

    this.props.fetchAChannel(this.props.match.params.channelId);
    // this.scrollBottom();
  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.channelId !== this.props.match.params.channelId) {
      this.setState({channel_id: newProps.currentChannelId});
      this.props.fetchAChannel(newProps.match.params.channelId)
    }
  }

  handleSubmit(e) {
    // e.preventDefault();
      if (e.key === 'Enter') {
      // const element = document.getElementById("messages");
      // element.scrollTop = element.scrollHeight;
      const message = Object.assign({}, this.state);
      this.props.processForm(message)
      setTimeout(() => {
        this.setState({ body: "" });
        // this.scrollBottom();
      }, 0);
      // this.props.processForm(message).then(this.setState({body: ''})).
      // then(this.scrollBottom());

    }
  }

  // scrollBottom() {
  //   setTimeout(() => {
  //     const element = document.getElementById("messages");
  //     element.scrollTop = element.scrollHeight;
  //   })
  // }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        channel_id: this.props.currentChannelId
      });
    };
  }

  render() {

    return (
      <div className='message-form'>
        <form className='form-input' onKeyPress={this.handleSubmit}>
          <textarea type='text'
              id='textareaInput'
              className='message-input-field'
              onChange={this.handleInput('body')}
              value={this.state.body}
              placeholder={`Message #${this.props.currentChannelName}`}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);
