import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {tab: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.inviteUser(this.state.id, this.props.server.id)
        .then(() => {this.props.closeModal();});
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
          <div className='display-form-message-container'>
            <label className='modal-title'>Inviting new user?</label>
            <div className='channel-delete-message'>
              <label className='server-label'>Who do you want to invite to {this.props.server.name}?</label>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='input-container'>
              <label className='channel-label'>ID</label>
              <input className='channel-input-field' autoFocus type='text'
                placeholder="Enter a DisMikeTag#0000"
                onChange={this.handleInput('id')} value={this.state.name}></input>
            </div>
            <div className="channel-submit-buttons">
              <button className='submit-button no' type='submit'>Invite</button>
              <button className='submit-button yes' onClick={ this.goBack }>Cancel</button>
            </div>
          </form>
      </div>
    );
  }
}

export default withRouter(UserInvite);
