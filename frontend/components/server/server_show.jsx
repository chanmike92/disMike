import React from 'react';
import Server from './server';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerShow extends React.Component {
  componentDidMount() {
    this.props.fetchAllServers();
  }

  render() {

    const servers = this.props.servers.map(server => { return (<Server
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
        <ul>
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
