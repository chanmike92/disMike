import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { ChannelShowContainer } from '../channel/channel_show_container';

class ServerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.channelId === )
  // }


  render () {

    const firstChannel = this.props.server.channel_ids[0] ? this.props.server.channel_ids[0] : "";
    return (
    <li className="server-icons">
      <Link className='server-links'
        to={`/${this.props.server.id}/${firstChannel}`}>
        { this.props.server.name[0] }
      </Link>

    </li>
  );}
}

export default withRouter(ServerIndex);
