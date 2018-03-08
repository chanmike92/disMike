import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.demoLink = this.demoLink.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  guestLogin() {
      const guest = {email: 'asdf@asdf.asdf', password: 'asdfasdf'};

      var emailOptions = {
        strings: ["asdf@asdf.asdf"],
        typeSpeed: 40
      };
      var passOptions = {
        strings: ["asdfasdf"],
        typeSpeed: 40
      };

      let demoUsername = setTimeout(() => {
        new Typed(".email", emailOptions);
      }, 100);
      let demoPassword = setTimeout(() => {
        new Typed(".password", passOptions);
      }, 1000);
      let demoSubmit = setTimeout(() => {
        this.props.processForm(guest);
      }, 2000);
    }

  handleSubmit(e) {
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
        <label className="input-name">Username</label>
          <input
            className='input-field'
            type="text"
            onChange={this.handleUsername}
            value={this.state.username}>
          </input>
      </div>
    );
  }

  demoLink() {

    if (this.props.formType === "Login") {
      return (
        <p className="change-form">
          Need an account? <Link className='sessionLinks' to="/signup"> Register</Link> or
          <a className='sessionLinks' onClick={this.guestLogin}> Demo</a>
        </p>
      );
    } else {
      return (
        <p className="change-form">Already have an account? <Link className='sessionLinks' to="/session">Login</Link></p>
      );
    }
  }


  render() {
    const createUsername = this.props.formType === 'Register' ? this.createUsername() : '';
    const headerName = this.props.formType === 'Register' ? "CREATE AN ACCOUNT" : "WELCOME BACK!";

    return (
      <div id='session-page'>
        <div className='session-container'>

          <div className="left-form">
            <div className="image-container">
              <img id="dismikelogo" src={window.logo} alt='disMike-logo' />
              <h2 className='logo-text'>DISMIKE</h2>
            </div>
          </div>

          <div className="right-form">
            <div className="right-form-content">
              <h2 className='header'>{headerName}</h2>
              <ul className='errors-list'>
                {this.props.errors.map((error, idx) => (<li className="error-item" key={idx}>{error}</li>))}
              </ul>

              <form className='session-form'>
                <div className='input-wrapper'>
                  <label className="input-name">Email</label>
                  <input className='input-field email' type="text" onChange={this.handleEmail} value={this.state.email}>
                  </input>
                </div>

                {createUsername}

                <div>
                  <label className="input-name">Password</label>
                    <input className='input-field password' type="password" onChange={this.handlePassword} value={this.state.password}>
                    </input>
                </div>

                <button className='submit-form'    onClick={this.handleSubmit}>{this.props.formType}
                </button>
              </form>
                {this.demoLink()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
