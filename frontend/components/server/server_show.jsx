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
      <div>
        <button>Add DM</button>
        <ul>
          {servers}
        </ul>
        <button>Add makeNewServer</button>
      </div>
    );
  }
}

export default ServerShow;
