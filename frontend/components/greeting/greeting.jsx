import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {

  render() {

    if (this.props.currentUser) {
      return (
        <div>
          <h1>{ this.props.currentUser.username } <button onClick={ this.props.logout }>Logout</button></h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Greeting;
