import React from 'react';
import { connect } from 'react-redux';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
import ServerShowContainer from '../server/server_show_container';
import Modal from '../modal/modal';


class MainComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id);
  }

  render() {

    const subComponent = this.props.serverId === '@me' ?
    <DmChannelShowContainer
      serverId={ this.props.serverId }
      channelId={ parseInt(this.props.channelId) }
    />
    :
    <ChannelShowContainer
      serverId={ this.props.serverId }
      channelId={ this.props.channelId }
    />;


  const dropdown = this.props.dropdown === false ? () => console.log() : this.props.closeDropdown;

    return (
      <div className='maincomponent-container' onClick={ dropdown }>
        <LoadingContainer />

        <ServerShowContainer />
        { subComponent }
        <Modal />
      </div>
    );
  }
}

export default MainComponent;
