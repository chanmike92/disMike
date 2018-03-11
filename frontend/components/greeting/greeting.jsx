import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {

  render() {

    if (this.props.currentUser) {
      return (
        <div className='greeting-container'>
          <h1>{ this.props.currentUser.username }</h1>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Greeting;
