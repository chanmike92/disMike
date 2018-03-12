
import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = Object.assign({}, this.state);

    this.props.processForm(message);
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {

    return (
      <div className='message-body'>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <input type='text' className='message-input-field' onChange={this.handleInput('body')} value={this.state.body} placeholder={`Message ${currentChannel}`}></input>
        </form>
      </div>
    );
  }
}

export default withRouter(MessageForm);
