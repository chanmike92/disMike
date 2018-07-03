import React from 'react';
import { closeDropdown } from '../../actions/dropdown_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendAddContainer from '../friend_list/friend_add_container';
import ServerIndexDropdown from '../dropdown/serverindex_dropdown';
import ChannelIndexDropdown from '../dropdown/channelindex_dropdown';
import ChannelDropdown from '../dropdown/channel_dropdown';
import ServerButtonDropdown from '../dropdown/serverbutton_dropdown';


const Dropdown = ({ dropdownType, id, x, y, serverId, server, channelId, channel, closeDropdown }) => {

  if (!dropdownType) {
    return null;
  }
  let component;
  switch (dropdownType) {
      case 'serverindex':
        component =
        <div className='dropdown-context-container'>
          <ServerIndexDropdown />
        </div>;
      break;
      case 'serverbutton':
        component =
        <div className='dropdown-context-container'>
          <ServerButtonDropdown />
        </div>;
      break;
      case 'channel':
        component =
        <div className='dropdown-context-container'>
            <ChannelDropdown />
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
          <ChannelIndexDropdown />
        </div>;
      break;
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
