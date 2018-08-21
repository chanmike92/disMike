import React from 'react';
import ServerIndex from './server_index';
import { withRouter, Link, Redirect } from 'react-router-dom';
import ChannelShowContainer from '../channel/channel_show_container';
import DmchannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';

class ServerShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleContextClick = this.handleContextClick.bind(this);
  }


  handleContextClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.openDropdown({dropdownType: "serverbutton", x: e.clientX,
      y: e.clientY });
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

    const activeServer = this.props.serverId === '@me' ? "server-icons active-server" : "server-icons";

    return (
      <div className='server-container'>
        <Link className={`direct-message-link ${activeServer}`} to={`/@me/`}>
          <i className="fas fa-users"></i>
        </Link>
        <div className='online-friends-count'>{ this.props.onlineFriends.length } Online</div>
        <div className='separator'></div>
          {servers}
        <button id='create-server-form' onClick={this.props.createForm} onContextMenu={ this.handleContextClick }>
          <span className='create-sign'>+</span>
        </button>
        <div className='separator'></div>

        <a className='server-icons' href='https://www.github.com/chanmike92' target="_blank"><i className="fab fa-github"></i></a>
        <a className='server-icons' href='https://www.linkedin.com/in/chanmike92' target="_blank"><i className="fab fa-linkedin-in"></i></a>
        <a className='server-icons' href='http://mikechan.me' target="_blank"><i className="fas fa-briefcase"></i></a>
      </div>


    );
  }
}

export default ServerShow;
