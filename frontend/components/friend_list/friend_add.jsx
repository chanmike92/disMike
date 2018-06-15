import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = this.state.id;

    this.props.processForm(id)
      .then(() => this.props.closeModal());
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  goBack() {
    this.props.closeModal();
  }

  render() {

    return (
      <div className='channel-update-form-container'>
        <div className='display-message-form-container'>
          <label className='modal-title'>Add A Friend</label>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='input-container'>
            <label className='channel-label'>ID</label>
            <input className='channel-input-field' autoFocus type='text' placeholder="#0000" onChange={this.handleInput('id')} value={ this.state.id }></input>
          </div>
          <div className="channel-submit-buttons">
            <button className='submit-button no' type='submit'>Add</button>
            <button className='submit-button yes' onClick={ this.goBack }>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FriendAdd);
