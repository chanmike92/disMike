import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ChannelShowContainer from '../channel/channel_show_container';
import DmChannelShowContainer from '../dmchannel/dmchannel_show_container';
import LoadingContainer from '../loading/loading_container';
import ServerShowContainer from '../server/server_show_container';
import Modal from '../modal/modal';
import Dropdown from '../dropdown/dropdown';
import ActionCable from 'actioncable';
import { receiveAMessage } from '../../actions/message_actions';

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
          default:
            console.log(`${command}`);
        }
      }}
    );
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
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActionCableContainer));
