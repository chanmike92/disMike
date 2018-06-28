import MainComponent from './maincomponent';
import { connect } from 'react-redux';
import { fetchCurrentUserSession } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { closeDropdown } from '../../actions/dropdown_actions';

const mapStateToProps = (state, ownProps) => {
  const serverId = (ownProps.location.pathname.split('/')[1]);
  const channelId = (ownProps.location.pathname.split('/')[2]);
  const dropdown = state.ui.dropdown;

  return ({
    dropdown,
    currentUser: state.session.user || {},
    channelId,
    serverId,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeDropdown: (e) => {
      e.stopPropagation();
      dispatch(closeDropdown());
    },
    fetchCurrentUser: (id) => dispatch(fetchCurrentUserSession(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
