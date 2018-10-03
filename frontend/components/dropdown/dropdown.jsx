import React from 'react';
import { closeDropdown } from '../../actions/dropdown_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ServerIndexDropdownContainer from './serverindex/serverindex_dropdown_container';
// import UserIndexDropdownContainer from './userindex/userindex_dropdown_container';
import ChannelIndexDropdownContainer from './channelindex/channelindex_dropdown_container';
import ChannelDropdownContainer from './channel/channel_dropdown_container';
import ServerButtonDropdownContainer from './serverbutton/serverbutton_dropdown_container';


const Dropdown = ({ dropdownType, dropdownId, x, y, serverId, server, channelId, channel, currentUser, closeDropdown }) => {

  if (!dropdownType) {
    return null;
  }
  let component;
  switch (dropdownType) {
      case 'serverindex':
        component =
        <div className='dropdown-context-container'>
          <ServerIndexDropdownContainer serverId={ dropdownId } channelId={ channelId }/>
        </div>;
      break;
      case 'serverbutton':
        component =
        <div className='dropdown-context-container'>
          <ServerButtonDropdownContainer />
        </div>;
      break;
      case 'channel':
        component =
        <div className='dropdown-context-container'>
          <ChannelDropdownContainer server={ server }/>
        </div>;
      break;
      // case 'servername':
      //   component =
      //   <div className='dropdown-container'>
      //       <div>channel</div>
      //   </div>;
      // break;
      case 'channelindex':
        component =
        <div className='dropdown-context-container'>
          <ChannelIndexDropdownContainer serverId={ serverId } channelId={ dropdownId }/>
        </div>;
      break;
      // case 'userindex':
      //   component =
      //   <div className='dropdown-context-container'>
      //     <UserIndexDropdownContainer userId={ dropdownId }/>
      //   </div>;
      //   break;
    default:
      return null;
  }


  return (

      <div className='dropdown-child' style={ {left: x, top: y } } onClick={ e => e.stopPropagation() }>
        { component }
      </div>

  );
};

const mapStateToProps = (state, ownProps) => {
  const dropdownType = state.ui.dropdown.dropdownType;
  const dropdownId = state.ui.dropdown.id;
  const channels = state.entities.channels;
  const servers = state.entities.servers;
  const x = state.ui.dropdown.x || 0;
  const y = state.ui.dropdown.y || 0;
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const server = servers[serverId] || {};
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const channel = channels[channelId] || {};


  return {
    dropdownType,
    dropdownId,
    x,
    y,
    server,
    serverId,
    channel,
    channelId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown));
