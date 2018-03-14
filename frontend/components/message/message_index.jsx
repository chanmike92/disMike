import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="message-item-container">
        <div className='message-name-container'>
          <div className='message-header'>
            <div>
              <img className='profile-picture' src={ this.props.message.profilepic } />
            </div>
          </div>
          <div>
            <div>
              <div className='message-name'>
                { this.props.message.author }
              </div>
              <div className='message-date'>
                { this.props.message.created_at }
              </div>
            </div>
            <div>
              <h1 className='message-content'>{ this.props.message.body }</h1>
            </div>
          </div>
        </div>
      </li>
    );
   }
}
export default withRouter(MessageIndex);
