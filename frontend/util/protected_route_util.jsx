import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import ServerShowContainer from '../components/server/server_show_container';
import LoadingContainer from '../components/loading/loading_container';

import { fetchCurrentUserSession } from '../actions/user_actions';
import { loaded } from '../actions/loading_actions';


// const Protected = ({ component: Component, path, loggedIn, exact }) => {
//
//
//   return (
//     <Route
//       path={path}
//       exact={exact}
//       render={props =>
//         loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
//     />
//   );
// };

export class Protected extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentUser(this.props.currentUser.id).then(setTimeout(this.props.loaded, 2000))
  }



  render() {
    if (!this.props.loggedIn) {
     return <Redirect to="/login"/>;
   } else {
      if (this.props.loading) {
        return (<ServerShowContainer />);
      } else {
        return (<LoadingContainer />);
      }
    }
  }
}



const mapStateToProps = (state, ownProps) => {

  const location = ownProps.location.pathname;
  const locationsplit = location.split('/');
  const serverId = locationsplit[1];
  const channelId = locationsplit[2];
  const loading = state.ui.loading.loaded;

  debugger
  return {
    loggedIn: Boolean(state.session.user),
    user: state.session.user,
    loading,
    currentUser: state.session.user,
    exact: ownProps.exact,
    path: ownProps.path,
  };
};

const mapDispatchToProps = dispatch => {


  return ({
    loaded: () => display(loaded()),
    fetchCurrentUser: (id) => dispatch(fetchCurrentUserSession(id)),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Protected));
