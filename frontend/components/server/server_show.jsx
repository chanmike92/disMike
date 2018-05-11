import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import ChannelShowContainer from '../channel/channel_show_container';
import LoadingContainer from '../loading/loading_container';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false};
  }

  componentDidMount() {
    if (parseInt(this.props.serverId) && parseInt(this.props.channelId)) {
      this.props.fetchAllServers()
        .then(setTimeout(() => this.setState({loaded: true}), 3000));
    }
    else if (parseInt(this.props.serverId)) {
      this.props.fetchAllServers()
        .then(() => this.props.history.push(`/${this.props.serverId}/`))
          .then(setTimeout(() => this.setState({loaded: true}), 3000));
    } else {
      this.props.fetchAllServers()
        .then(() => this.props.history.push(`/@me/`))
          .then(setTimeout(() => this.setState({loaded: true}), 3000));
    }
  }




  render() {
    if (this.state.loaded === false) {
      return (
        <LoadingContainer
          />
      )
    }
    else {

    const servers = this.props.serverIds.map((id, idx) => {
      const active = this.props.serverId === id ? true : false;
      return (<ServerIndex
      server={this.props.servers[id]}
      key={ idx }
      id={ id }
      currentUser={this.props.currentUser}
      fetchAServer={this.props.fetchAServer}
      active={ active }
      />
      );
    });

    const activeServer = this.props.serverId === '@me' ? "server-icons active-personal-server" : "server-icons";

    return (
      <div className='maincomponent-container'>
        <div className='server-container'>

          <Link className={`direct-message-link ${activeServer}`} to={`/@me/`}>
            <i className="fas fa-users"></i>
          </Link>
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
          <ChannelShowContainer
            serverId={ this.props.serverId }
            channelId={ this.props.channelId }
            />
      </div>
    );
  }
}
}

export default ServerShow;
