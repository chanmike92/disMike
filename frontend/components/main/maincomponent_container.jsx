import MainComponent from './maincomponent';
import { connect } from 'react-redux';
import { fetchCurrentUserSession } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { closeDropdown } from '../../actions/dropdown_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const servers = state.entities.servers;
  const dms = state.entities.dms;
  const serverId = (ownProps.location.pathname.split('/')[1]) || "";
  const channelId = (ownProps.location.pathname.split('/')[2]) || "";
  const dropdown = state.ui.dropdown.dropdownType;
  const modal = state.ui.modal.modalType;
  return ({
    dms,
    servers,
    dropdown,
    currentUser: state.session.user || {},
    channelId,
    serverId,
    modal,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    closeDropdown: () => dispatch(closeDropdown()),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUserSession(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
