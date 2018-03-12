import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import Typed from 'typed.js';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    username: "",
    email: "",
    password: "",
    demoUsername: "",
    demoPassword: "",
    demoEmail: "",
    background: `background-img-${Math.floor(Math.random(1) * 9)}`
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.demoLink = this.demoLink.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // componentDidMount() {
  //   this.props.clearErrors();
  // }

  guestLogin() {
      const guest = {email: 'demoEmail@demo.com', password: 'demoPassword'};

      var emailOptions = {
        strings: ["demoEmail@demo.com"],
        typeSpeed: 40
      };
      var passOptions = {
        strings: ["demoPassword"],
        typeSpeed: 40
      };

      setTimeout(() => {
        new Typed(".email", emailOptions);
      }, 100);
      setTimeout(() => {
        new Typed(".password", passOptions);
      }, 1000);
      setTimeout(() => {
        this.props.processForm(guest);
      }, 2000);
    }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  renderErrors(field) {

    if (this.props.errors[field].length === 0) {
      return <label className="input-name">{field}</label>;
    }
    else {
      return <label className="input-name input-error">{this.props.errors[field][0]}</label>;
    }
  }

  createUsername() {
    return (
      <div className='input-wrapper'>
        {this.renderErrors("username")}
          <input
            className='input-field name'
            type="text"
            onChange={this.handleInput('username')}
            value={this.state.username}>
          </input>
      </div>
    );
  }

  demoLink() {

    if (this.props.formType === "Login") {
      return (
        <p className="change-form">
          Need an account? <Link className='sessionLinks' to="/signup"> Register</Link> or <a className='sessionLinks' onClick={this.guestLogin}>Demo</a>
        </p>
      );
    } else {
      return (
        <p className="change-form">Already have an account? <Link className='sessionLinks' to="/session">Login</Link></p>
      );
    }
  }


  render() {
    const createUsername = this.props.match.path === '/signup' ? this.createUsername() : '';
    const headerName = this.props.match.path === '/signup' ? "CREATE AN ACCOUNT" : "WELCOME BACK!";
    const leftFormContainerClass = this.props.match.path === '/signup' ? "left-form-container-signup"   : "left-form-container-login";

    return (
      <div className={`session-page ${this.state.background}`}>
        <div className='session-container'>
          <div className={`blur ${this.state.background}`}></div>

          <div className={leftFormContainerClass}>
            <h2 className='logo-text'></h2>
          </div>
          <div className="right-form">
            <div className="right-form-content">
              <h2 className='header'>{headerName}</h2>
              <div className='spacer'></div>
              <form className='session-form'>
                <div className='input-wrapper'>
                {this.renderErrors("email")}
                  <input className='input-field email' type="email" onChange={this.handleInput('email')} value={this.state.email}>
                  </input>
                </div>

                {createUsername}

                <div className='input-wrapper'>
                  {this.renderErrors("password")}
                    <input className='input-field password' type="password" onChange={this.handleInput('password')} value={this.state.password}>
                    </input>
                </div>

                <button className='submit-form' onClick={this.handleSubmit}>{this.props.formType}
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
