import React from 'react';
import { connect } from 'react-redux';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
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
    this.handleRightClick = this.handleRightClick.bind(this);
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
              this.setState({serverId: nextProps.serverId, channelId: null});
            }
          }
        }
        else {
          if (nextProps.servers[nextProps.serverId].channel_ids.length > 0) {
            let newchannelId = nextProps.servers[nextProps.serverId].channel_ids[0];
            this.setState({serverId: nextProps.serverId, channelId: newchannelId});
          } else {
            this.setState({serverId: nextProps.serverId, channelId: null});
          }
        }
      }
    } else {
      if (nextProps.serverId === '@me') {

      } else {
        this.props.history.replace(`/@me/`);
      }
    }

  }

  handleRightClick(e) {
    e.preventDefault();
    this.props.closeDropdown();
  }

  render() {

    const subComponent = this.props.serverId === '@me' ?
    <DmChannelShowContainer
      serverId={ this.props.serverId }
      channelId={ this.state.channelId }
    />
    :
    <ChannelShowContainer
      serverId={ this.state.serverId }
      channelId={ this.state.channelId }
    />;


  // const dropdown = this.props.dropdown === false ? () => console.log() : this.props.closeDropdown;
 // onClick={ dropdown }
    return (
      <div className='maincomponent-container' onClick={ this.props.closeDropdown } onContextMenu={ this.handleRightClick }>
        <LoadingContainer />

        <ServerShowContainer
          serverId={ this.state.serverId }
          channelId={ this.state.channelId }
          />
        { subComponent }
        <Modal />
        <Dropdown />
      </div>
    );
  }
}

export default MainComponent;
