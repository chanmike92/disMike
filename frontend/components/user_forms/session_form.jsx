import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }


  handSubmit(e) {

    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleUsername(e) {
    this.setState({
      username: e.currentTarget.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.currentTarget.value
    });
  }

  handleEmail(e) {
    this.setState({
      email: e.currentTarget.value
    });
  }

  createUsername() {
    return (
      <div className='input-wrapper'>
        <label>Username</label>
          <input
            className='input-field'
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}>
          </input>
      </div>
    );
  }


  render() {
    const createUsername = this.props.formType === 'Sign up' ? this.createUsername() : '';
    const createLink = this.props.formType === 'Sign up' ? `Already have an account?` : `Need an account?`;

    return (
      <div className='session-container'>

        <div className="left-form">
          <div className="image-container">
            <img id="dismikelogo" src={window.logo} alt='disMike-logo' />
          </div>
          <h2 className='logo-text'>DISMIKE</h2>
        </div>

        <div className="right-form">
          <div className="right-form-content">
            <h2 className='logo-text'>{this.props.formType}</h2>
            <ul className='errors-list'>
              {this.props.errors.map((error, idx) => (<li className="error-item" key={idx}>{error}</li>))}
            </ul>

            <form className='session-form'>
              <div className='input-wrapper'>
                <label>Email</label>
                <input className='input-field' type="text" onChange={this.handleEmail} value={this.state.email}>
                </input>
              </div>

              {createUsername}

              <div>
                <label>Password</label>
                  <input className='input-field' type="password" onChange={this.handlePassword} value={this.state.password}>
                  </input>
              </div>

              <button className='submit-form'    onClick={this.handleSubmit}>{this.props.formType}
              </button>
            </form>

            <p className='change-form'>{createLink} {this.props.link}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
