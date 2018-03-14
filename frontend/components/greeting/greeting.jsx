import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {

  render() {

    if (this.props.currentUser) {
      return (
        <div className='greeting-container'>
          <div className='user-image-name'>
            <img className='profile-picture' src={ this.props.currentUser.image_url } />
            <h1>{ this.props.currentUser.username }</h1>
          </div>
          <button onClick={ this.props.logout }>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Greeting;
