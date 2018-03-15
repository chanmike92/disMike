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
          <button className='fafaicons-container' onClick={ this.props.logout }>
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Greeting;
