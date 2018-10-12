
import React from 'react';
// import 'emoji-mart/css/emoji-mart.css';
import TextareaAutosize from 'react-autosize-textarea';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { Picker } from 'emoji-mart';
import Emojify from 'react-emojione';



class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {body: '',
      messagable_id: this.props.channelId,
      messagable_type: this.props.messageType,
      currentEmoji: ":grinning:",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.channelId !== this.props.channelId) ||
    (nextProps.messageType !== this.props.messageType)) {
      this.setState({
          body: '',
          messagable_id: nextProps.channelId,
          messagable_type: nextProps.messageType,
          currentEmoji: ":grinning:"
      });
    }
  }

  handleSubmit(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (this.state.body.length > 0) {
        const message = Object.assign({}, this.state);
        this.props.processForm(message).then(this.props.scrollBottom);
        setTimeout(() => {
          this.setState({ body: ""});

        }, 0);
      }
    }
  }

  addEmoji(emoji, event) {
    this.setState({body: this.state.body.concat(emoji.colons), currentEmoji: emoji.colons});
    this.props.closeDropdown(event);
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value,
        messagable_id: this.props.channelId,
        messagable_type: this.props.messageType,
      });
    };
  }

  // TODO: Message file upload
  // <div className='message-file-upload-icon-wrapper'>
  //   <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" className="message-file-upload-icon" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
  // </div>
  // <div className='message-icon-separator'></div>


  render() {
    return (
        <div className='message-text-area'>
          <form className='message-form-input' onKeyPress={this.handleSubmit}>
            <div className="message-file-upload">

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
                  placeholder={`Message ${this.props.symbol}${this.props.currentChannelName}`}>
              </TextareaAutosize>
            </div>
            <div className="emoji-button-icon">
              <div className="emoji-inner-icon" onClick={ this.props.dropdown === 'emoji' ? this.props.closeDropdown : this.props.openDropdown }>
                <Emojify>{ this.state.currentEmoji }</Emojify>
              </div>
            </div>
          </form>
          <div onClick={ e => e.stopPropagation() }>
            <Picker
              id="emoji-picker"
              className='emoji-mart'
              set='twitter'
              emojiTooltip={true}
              showPreview={false}
              onClick={this.addEmoji}
              style={ this.props.dropdown === 'emoji' ?
                { position: 'absolute', width: '315px', bottom: '75px', right: '10px'} :
                { display: 'none'} }
              title='Pick your emoji…' emoji='point_up'
            />
          </div>
        </div>
    );
  }
}

export default withRouter(MessageForm);
