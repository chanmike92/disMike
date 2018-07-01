import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //MIKE -- FETCH ALL INFO IN HERE AND componentWillReceiveProps
  componentDidMount() {
    // this.props.fetchAllFriends().then(this.props.fetchAllServers()).then((setTimeout(() => this.setState({loaded: true}), 3000)));
    // this.props.fetchCurrentUser(this.props.currentUser.id);
    if (parseInt(this.props.serverId) || parseInt(this.props.channelId)) {
    } else {
      this.props.history.push(`/@me/`);
    }
  }

  handleClick(e) {
    e.preventDefault();
  }


  render() {
    const servers = this.props.serverIds.map((id, idx) => {
      const active = this.props.serverId === id ? true : false;
      return (<ServerIndex
      server={this.props.servers[id]}
      key={ idx }
      id={ id }
      openDropdown={ this.props.openDropdown }
      currentUser={this.props.currentUser}
      fetchAServer={this.props.fetchAServer}
      active={ active }
      />
      );
    });

    const activeServer = this.props.serverId === '@me' ? "server-icons active-personal-server" : "server-icons";
    return (
        <div className='server-container'>


          <Link className={`direct-message-link ${activeServer}`} onContextMenu={ this.handleClick } to={`/@me/`}>
            <i className="fas fa-users"></i>
          </Link>
          <div className='online-friends-count'>{ this.props.onlineFriends.length } Online</div>
          <div className='separator'></div>
            {servers}
          <button id='create-server-form' onClick={this.props.createForm}>
            <span className='create-sign'>+</span>
          </button>
          <div className='separator'></div>
          <a href='https://www.github.com/chanmike92' target="_blank" className='server-icons'><i className="fab fa-github"></i></a>
          <a href='https://www.linkedin.com/in/chanmike92' target="_blank" className='server-icons'><i className="fab fa-linkedin-in"></i></a>
          <a href='http://mikechan.me' target="_blank" className='server-icons'><i className="fas fa-briefcase"></i></a>
        </div>


    );
  }
}

export default ServerShow;
