import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerShow extends React.Component {
  componentDidMount() {
    this.props.fetchAllServers().then(
      (action) => {
        const servers = Object.values(action.servers)
        debugger
        if (servers.length > 0 && this.props.currentUser) {
          const serverId = servers[0].id
          const firstChannel = servers[0].channel_ids[0]
          debugger
          this.props.history.replace(`/${this.props.currentUser.id}/server/${serverId}/channel/${firstChannel}`)
        }
      }
    )
  }

  // componentWillReceiveProps(nextProps) {
  // if (this.props.match.params.serverId !== nextProps.match.params.serverId) {
  //     this.props.fetchAServers(nextProps.match.params.serverId);
  //   }
  // }



  render() {

    const servers = this.props.servers.map(server => {
      return (<ServerIndex
      server={server}
      key={server.id}
      currentUser={this.props.currentUser}
      deleteServer={this.props.deleteServer}
      fetchAServer={this.props.fetchAServer}
      />
      );
    });

    return (
      <div className='server-container'>

        <button className='direct-message-link server-icons'>
          <i className="fas fa-users"></i>
        </button>
        <div className='separator'></div>
        <ul className='server-list'>
          {servers}
        </ul>
        <button id='create-server-form' onClick={this.props.createForm}>
          <span className='create-sign'>+</span>
        </button>
        <div className='separator'></div>
      </div>
    );
  }
}

export default ServerShow;
