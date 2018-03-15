import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerShow extends React.Component {
  componentDidMount() {
    this.props.fetchAllServers();
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

        <button className='direct-message-link server-icons'>Add DM</button>
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
