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
      channelId: "",
      toggleUserList: true,
      toggleChannelDropdown: true,
      friendSelector: "ALL"
    };
    this.handleNoContextClick = this.handleNoContextClick.bind(this);
    this.handleUserListToggle = this.handleUserListToggle.bind(this);
    this.handleChannelDropdown = this.handleChannelDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
          // check to prevent dms that were closed
          if (nextProps.dms[nextProps.channelId].subscription === true) {
            this.setState({serverId: nextProps.serverId, channelId: nextProps.channelId});
          } else {
              this.setState({serverId: nextProps.serverId, channelId: null});
          }
        } else {
          // else render friend list
          this.setState({serverId: nextProps.serverId, channelId: null});
        }
      } else {
        this.props.history.replace(`/@me/`);
      }
    }
  }

  handleSelect(selected) {
    return (e) => {
      this.setState({
        friendSelector: selected
      });
    };
  }

  handleNoContextClick(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleUserListToggle(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({toggleUserList: !this.state.toggleUserList});
  }

  handleChannelDropdown(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ toggleChannelDropdown: !this.state.toggleChannelDropdown});
  }

  handleClick(e) {
    // e.preventDefault();
    if (this.props.dropdown) {
      this.props.closeDropdown();
    }
  }

  handleEscape(e) {

    if (e.which === 27 && (this.props.modal !== "searchUsers" || this.props.dropdown)) {
      this.props.closeModal();
    }
  }

  render() {

    const subComponent = this.props.serverId === '@me' ?
    <DmchannelShowContainer
      selector={ this.state.friendSelector }
      handleSelect={ this.handleSelect }
      handleNoContextClick={ this.handleNoContextClick }
      serverId={ this.props.serverId }
      channelId={ this.state.channelId }
      handleUserListToggle={ this.handleUserListToggle }
      userListToggle={ this.state.toggleUserList }
    />
    :
    <ChannelShowContainer
      handleNoContextClick={ this.handleNoContextClick }
      serverId={ this.props.serverId }
      channelId={ this.state.channelId }
      channelDropdownToggle={ this.state.toggleChannelDropdown }
      handleChannelDropdown={ this.handleChannelDropdown }
      handleUserListToggle={ this.handleUserListToggle }
      userListToggle={ this.state.toggleUserList }
    />;


  // const dropdown = this.props.dropdown === false ? () => console.log() : this.props.closeDropdown;
 // onClick={ dropdown }
    return (
      <div className='maincomponent-container' onClick={ this.handleClick }
        onContextMenu={ this.handleClick } onKeyDown={ this.handleEscape }>
        <ActionCableContainer />
        <Modal
          handleNoContextClick={ this.handleNoContextClick }
        />
        <Dropdown
          handleNoContextClick={ this.handleNoContextClick }
        />
        <LoadingContainer
          handleNoContextClick={ this.handleNoContextClick }
        />

        <ServerShowContainer
          handleNoContextClick={ this.handleNoContextClick }
          serverId={ this.props.serverId }
          channelId={ this.state.channelId }
          />
        { subComponent }

      </div>
    );
  }
}

export default MainComponent;
