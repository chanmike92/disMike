import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === null) {
      return <Redirect to='/signup' />;
    }
    else {
      return <Redirect to='/' />;
    }
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, { this.props.currentUser.username } !</h1>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <Link to='/session'>Log In</Link><br></br>
          <Link to='/signup'>Sign Up</Link>
        </div>
      );
    }
  }
}

export default Greeting;
