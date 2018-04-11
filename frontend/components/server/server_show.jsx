import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';

class ServerShow extends React.Component {
  componentDidMount() {
    const channelId = this.props.location.pathname.split('/')[3];
    if (channelId) {
      this.props.fetchAllServers();
      // .then(
      //   (action) => {
      //     const servers = Object.values(action.servers);
      //     if (servers.length > 0 && this.props.currentUser) {
      //       const serverId = servers[0].id;
      //       const firstChannel = this.props.match.params.channelId;
      //
      //       this.props.history.replace(`/${this.props.currentUser.id}/server/${serverId}/channel/${channelId}`);
      //     }
      //   }
      // )
    } else {
      this.props.fetchAllServers().then(
        (action) => {
          const servers = Object.values(action.servers);
          if (servers.length > 0 && this.props.currentUser) {
            const serverId = servers[0].id;
            if (servers[0].channel_ids.length > 0) {
              const firstChannel = servers[0].channel_ids[0];

              this.props.history.replace(`/@me/${serverId}/${firstChannel}`);
            // () => {this.props.history.replace(`/@me/`);
            } else {
              this.props.history.push(`/@me/${serverId}/`);
            }
          }
      // );
      }
    );
    }
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
          {servers}
        <button id='create-server-form' onClick={this.props.createForm}>
          <span className='create-sign'>+</span>
        </button>
        <div className='separator'></div>
        <a href='https://www.github.com/chanmike92' className='server-icons'><i className="fab fa-github"></i></a>
        <a href='https://www.linkedin.com/in/chanmike92' className='server-icons'><i className="fab fa-linkedin-in"></i></a>
        <a href='http://mikechan.me' className='server-icons'><i className="fas fa-briefcase"></i></a>
      </div>
    );
  }
}

export default ServerShow;
