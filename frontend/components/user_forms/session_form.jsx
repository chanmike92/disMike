import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.currentUser) {
      return <Redirect to='/' />;
    }
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

  render() {
    return (
      <div>
        { this.props.link }
        <ul>
          {this.props.errors.map((error, idx) => (<li key={idx}>{error}</li>))}
        </ul>
        <form>
          <label>Username
            <input type="text" onChange={this.handleUsername} value={this.state.username}></input>
          </label>
          <label>Password
            <input type="text" onChange={this.handlePassword} value={this.state.password}></input>
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
