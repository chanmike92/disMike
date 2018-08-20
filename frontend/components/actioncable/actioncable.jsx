import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ChannelShowContainer from '../channel/channel_show_container';
import DmchannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
import ServerShowContainer from '../server/server_show_container';
import Modal from '../modal/modal';
import Dropdown from '../dropdown/dropdown';
import ActionCable from 'actioncable';
import { receiveAMessage } from '../../actions/message_actions';
import { addNewChannel, removeAChannel } from '../../actions/channel_actions';
import { receiveAServer, removeAServer } from '../../actions/server_actions';
import { receiveAUser } from '../../actions/user_actions';
import { deleteCurrentUser } from '../../actions/session_actions';

class ActionCableContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.consumer = ActionCable.createConsumer();
    this.subscription = this.consumer.subscriptions.create(
    // this.subscription = App.cable.subscriptions.create(
      {channel: 'DirectChannel', id: this.props.currentUser.id},
      { received: ({command, data}) => {
        switch (command) {
          case 'fetch_message':
            this.props.receiveAMessage(data);
            break;
          case 'fetch_new_channel':
            this.props.receiveNewChannel(data);
            break;
          case 'delete_channel':
            this.props.removeAChannel(data);
            break;
          case 'fetch_server':
            this.props.receiveAServer(data);
            break;
          case 'delete_server':
            this.props.removeAServer(data);
            break;
          case 'fetch_user':
            this.props.receiveAUser(data);
            break;
          case 'remove_user':
            this.props.removeAChannel(data);
            break;
          case 'update_user':
            this.props.removeAChannel(data);
            break;
          case 'fetch_dm':
            this.props.removeAChannel(data);
            break;
          case 'logout':
            this.props.logout();
            break;
          default:
            console.log(`${command}`);
        }
      }}
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const servers = state.entities.servers;
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const dropdown = state.ui.dropdown.dropdownType;

  return ({
    servers,
    dropdown,
    currentUser: state.session.user || {},
    channelId,
    serverId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    receiveAMessage: (message) => dispatch(receiveAMessage(message)),
    receiveNewChannel: (payload) => dispatch(addNewChannel(payload)),
    removeAChannel: (payload) => dispatch(removeAChannel(payload)),
    removeAServer: (payload) => dispatch(removeAServer(payload)),
    receiveAServer: (payload) => dispatch(receiveAServer(payload)),
    receiveAUser: (payload) => dispatch(receiveAUser(payload)),
    logout: () => dispatch(deleteCurrentUser()),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionCableContainer));
