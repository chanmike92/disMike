import React from 'react';
import { connect } from 'react-redux';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
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
    if (nextProps.servers[nextProps.serverId]) {

      if (nextProps.servers[nextProps.serverId].channel_ids.includes(parseInt(nextProps.channelId))) {
        this.setState({serverId: nextProps.serverId, channelId: nextProps.channelId});
      } else {
        if (this.props.serverId === nextProps.serverId) {
          if (nextProps.servers[nextProps.serverId].channel_ids.includes(parseInt(this.props.channelId))) {
            this.setState({serverId: nextProps.serverId, channelId: this.props.channelId});
        } else if (nextProps.servers[nextProps.serverId].channel_ids.includes(parseInt(this.state.channelId))) {
        }
          else {
            if (nextProps.servers[this.props.serverId].channel_ids.length > 0) {
              let newchannelId = nextProps.servers[nextProps.serverId].channel_ids[0];
              this.setState({serverId: nextProps.serverId, channelId: newchannelId});
            } else {
              this.setState({serverId: nextProps.serverId});
            }
          }
        }
        else {
          if (nextProps.servers[nextProps.serverId].channel_ids.length > 0) {
            let newchannelId = nextProps.servers[nextProps.serverId].channel_ids[0];
            this.setState({serverId: nextProps.serverId, channelId: newchannelId});
          } else {
            this.setState({serverId: nextProps.serverId});
          }
        }
      }
    } else {
      if (nextProps.serverId === '@me') {
        if (nextProps.dms[nextProps.channelId]) {
          this.setState({serverId: nextProps.serverId, channelId: nextProps.channelId});
        } else {

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
    <DmChannelShowContainer
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
