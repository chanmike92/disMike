import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class FriendAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: ''};
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.props.clearErrors();
    this.setState(this.props.currentState);
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = Object.assign({}, this.state);

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

  render() {

    return (
      <div className='friend-form-container'>
        <form onSubmit={this.handleSubmit} className="server-form">
          <div className='input-container'>
            <label className='friend-label'>ID</label>
            <input className='friend-input-field' autoFocus type='text' placeholder="#0000" onChange={this.handleInput('id')} value={ this.state.id }></input>

          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(FriendAdd);
