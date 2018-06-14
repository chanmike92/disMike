import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {


      return (
        <div className='greeting-container'>
          <div className='user-image-name'>
            <img className='profile-picture' src={ this.props.currentUser.image_url } />
            <h1>{ this.props.currentUser.username }</h1>
          </div>
          <button className='fafaicons-container' onClick={ this.props.updateUser }>
            <i className="fas fa-cogs"></i>
          </button>
          <button className='fafaicons-container' onClick={ this.props.logout }>
            <i className="fas fa-sign-out-alt"></i>
          </button>
        </div>
      );
  }
}

export default Greeting;
