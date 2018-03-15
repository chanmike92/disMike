import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { ChannelShowContainer } from '../channel/channel_show_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
    <li className="server-icons">
      <Link className='server-links'
        to={`/${this.props.currentUser.id}/server/${this.props.server.id}/channel`}>
        { this.props.server.name[0] }
      </Link>

    </li>
  );}
}

export default withRouter(ServerIndex);


// instead of link, display container with all channels for that server
// from the backend, pass array of channelids --> apply it to servers and same for channels/messages
