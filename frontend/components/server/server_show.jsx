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
      deleteServer={this.props.deleteServer}
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
        <button className='server-icons'>+</button>
      </div>
    );
  }
}

export default ServerShow;
