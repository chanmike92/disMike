import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => {

  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
