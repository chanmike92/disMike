
import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import { withRouter, Link, Redirect } from 'react-router-dom';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';




class MessageForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {body: '', messagable_id: this.props.channelId, messagable_type: this.props.messageType};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //
  //   this.props.fetchAChannel(this.props.match.params.channelId);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //
  //   if(newProps.channelId !== this.props.channelId) {
  //     this.setState({messagable_id: newProps.channelId, messagable_type: newProps.messageType});
  //     // this.props.fetchAChannel(newProps.channelId)
  //   }
  // }

  handleSubmit(e) {
      if (e.key === 'Enter') {
      const message = Object.assign({}, this.state);
      this.props.processForm(message);
      setTimeout(() => {
        this.setState({ body: "" });

      }, 0);


    }
  }


  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        messagable_id: this.props.channelId,
        messagable_type: this.props.messageType
      });
    };
  }

  render() {
    return (
        <div className='message-text-area'>
          <form className='message-form-input' onKeyPress={this.handleSubmit}>
            <div className="message-file-upload">
              <div className='message-file-upload-icon-wrapper'>
                <div className='message-file-upload-icon'>
                +
                </div>
              </div>
              <div className='message-icon-separator'></div>
            </div>
            <div className='message-input-field-wrapper'>
              <TextareaAutosize type='text'
                  id='textareaInput'
                  className='message-input-field'
                  rows={1}
                  autoFocus
                  maxRows={6}
                  onChange={this.handleInput('body')}
                  value={this.state.body}
                  placeholder={`Message #${this.props.currentChannelName}`}>
              </TextareaAutosize>

            </div>
          </form>
        </div>
    );
  }
}

export default withRouter(MessageForm);
