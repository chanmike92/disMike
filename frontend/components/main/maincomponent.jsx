import React from 'react';
import { connect } from 'react-redux';
import ChannelShowContainer from '../channel/channel_show_container';
import DmchannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
import ActionCableContainer from '../actioncable/actioncable';
import ServerShowContainer from '../server/server_show_container';
import Modal from '../modal/modal';
import Dropdown from '../dropdown/dropdown';


class MainComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      serverId: "",
      channelId: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {

    this.props.fetchCurrentUser(this.props.currentUser.id);
  }


  //routes all possible edges cases for mistaken url input
  //DO NOT MODIFY UNLESS FULLY TESTED
  componentWillReceiveProps(nextProps) {

    // check if server exists
    if (nextProps.servers[nextProps.serverId]) {
      // check if server contains channel id, if true change state
      if (nextProps.servers[nextProps.serverId].channel_ids.includes(parseInt(nextProps.channelId))) {
        this.setState({serverId: nextProps.serverId, channelId: nextProps.channelId});
      } else {
        // otherwise check if contains previous channel id, if true render previous channel
          if (nextProps.servers[nextProps.serverId].channel_ids.includes(parseInt(this.props.channelId))) {
            this.setState({serverId: nextProps.serverId, channelId: this.props.channelId});
          }
        else {
          // if server does not contain channel id, render first channel of server
          if (nextProps.servers[nextProps.serverId].channel_ids.length > 0) {
            let newchannelId = nextProps.servers[nextProps.serverId].channel_ids[0];
            this.setState({serverId: nextProps.serverId, channelId: newchannelId});
          } else {
            // else server does not have any channel
            this.setState({serverId: nextProps.serverId, channelId: ""});
          }
        }
      }
    } else {
      // if server does not exist, render the dm/friend component
      if (nextProps.serverId === '@me') {
        // check if dm exists, if it does, render it
        if (nextProps.dms[nextProps.channelId]) {
          this.setState({serverId: nextProps.serverId, channelId: nextProps.channelId});
        } else {
          // else render friend list
          this.setState({serverId: nextProps.serverId, channelId: null});
        }
      } else {
        this.props.history.replace(`/@me/`);
      }
    }
  }

  // componentWillUnmount() {
  //       if (this.subscription) {
  //         this.subscription.unsubscribe();
  //       }
  // }

  handleClick(e) {
    // e.preventDefault();
    if (this.props.dropdown) {
      this.props.closeDropdown();
    }
  }

  handleEscape(e) {

    if (e.which === 27 && (this.props.modal || this.props.dropdown)) {
      this.props.closeModal();
    }
  }

  render() {

    const subComponent = this.props.serverId === '@me' ?
    <DmchannelShowContainer
      serverId={ this.props.serverId }
      channelId={ this.state.channelId }
    />
    :
    <ChannelShowContainer
      serverId={ this.props.serverId }
      channelId={ this.state.channelId }
    />;


  // const dropdown = this.props.dropdown === false ? () => console.log() : this.props.closeDropdown;
 // onClick={ dropdown }
    return (
      <div className='maincomponent-container' onClick={ this.handleClick } onContextMenu={ this.handleClick } onKeyDown={ this.handleEscape }>
        <ActionCableContainer />
        <Modal />
        <Dropdown />
        <LoadingContainer />

        <ServerShowContainer
          serverId={ this.props.serverId }
          channelId={ this.state.channelId }
          />
        { subComponent }

      </div>
    );
  }
}

export default MainComponent;
