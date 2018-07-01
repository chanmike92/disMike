import React from 'react';
import { closeDropdown } from '../../actions/dropdown_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FriendAddContainer from '../friend_list/friend_add_container';


const Dropdown = ({ dropdownType, id, x, y, serverId, server, channelId, channel, closeDropdown }) => {

  if (!dropdownType) {
    return null;
  }
  let component;
  switch (dropdownType) {
      case 'serverindex':
        component =
        <div className='dropdown-container'>
          <div>hello</div>
        </div>;
      break;
      case 'serverjoin':
        component =
        <div className='dropdown-container'>
          <div>hello</div>
        </div>;
      break;
      case 'channel':
        component =
        <div className='dropdown-container'>
            <div>channel</div>
        </div>;
      break;
      case 'servername':
        component =
        <div className='dropdown-container'>
            <div>channel</div>
        </div>;
      break;
      case 'channelindex':
        component =
        <div className='dropdown-container'>
          <div>channel index</div>
        </div>;
      break;
    default:
      return null;
  }

  return (
    <div className="dropdown-background" onClick={ closeDropdown }>
      <div className='dropdown-child' style={ {left: (x+20), top: y } } onClick={ e => e.stopPropagation() }>
        { component }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const dropdownType = state.ui.dropdown.dropdownType;
  const dropdownId = state.ui.dropdown.id;
  const x = state.ui.dropdown.x || 0;
  const y = state.ui.dropdown.y || 0;
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const server = state.entities.servers[serverId] || {};
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const channel = state.entities.channels[channelId] || {};
  return {
    dropdownType,
    dropdownId,
    x,
    y,
    server,
    serverId,
    channel,
    channelId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dropdown));
