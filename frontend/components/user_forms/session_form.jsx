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
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.clearErrors();
  }

  guestLogin() {

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


  render() {
    const createUsername = this.props.formType === 'Register' ? this.createUsername() : '';
    const headerName = this.props.formType === 'Register' ? "CREATE AN ACCOUNT" : "WELCOME BACK!";
    const createLink = this.props.formType === 'Register' ? `Already have an account?` : `Need an account?`;

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
                  <input className='input-field' type="text" onChange={this.handleEmail} value={this.state.email}>
                  </input>
                </div>

                {createUsername}

                <div>
                  <label className="input-name">Password</label>
                    <input className='input-field' type="password" onChange={this.handlePassword} value={this.state.password}>
                    </input>
                </div>

                <button className='submit-form'    onClick={this.handleSubmit}>{this.props.formType}
                </button>
              </form>

              <p className='change-form'>{createLink} {this.props.link} or <a className='sessionLinks' onClick={this.guestLogin}>Demo</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
