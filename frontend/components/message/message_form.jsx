
import React from 'react';
// import 'emoji-mart/css/emoji-mart.css';
import TextareaAutosize from 'react-autosize-textarea';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';




class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: '',
      messagable_id: this.props.channelId,
      messagable_type: this.props.messageType,
      emoji_dropdown: false,
      currentEmoji: "",
    };
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }

  handleSubmit(e) {
      if (e.key === 'Enter') {
      const message = Object.assign({}, this.state);
      this.props.processForm(message);
      setTimeout(() => {
        this.setState({ body: "", emoji_dropdown: false });
      }, 0);
    }
  }

  addEmoji(emoji, event) {
    debugger
    this.setState({body: this.state.body.concat(emoji.native), currentEmoji: emoji.colons});
  }

  handleDropdown() {
    this.setState({emoji_dropdown: !this.state.emoji_dropdown});
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        messagable_id: this.props.channelId,
        messagable_type: this.props.messageType,
        emoji_dropdown: false
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
            <div className="emoji-button-icon">
              <div className="emoji-inner-icon" onClick={ this.handleDropdown }>
                <Emoji emoji='heart_eyes_cat' size={16}/>
              </div>
            </div>
          </form>
          <Picker
            id="emoji-picker"
            className='emoji-mart'
            set='twitter'
            skin={2}
            emojiTooltip={true}
            showPreview={false}
            onClick={this.addEmoji}
            style={ this.state.emoji_dropdown ?
              { position: 'absolute', width: '315px', bottom: '75px', right: '70px'} :
              { display: 'none'} }
            title='Pick your emoji…' emoji='point_up'
          />
        </div>
    );
  }
}

export default withRouter(MessageForm);
