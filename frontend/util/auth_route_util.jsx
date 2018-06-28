import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';


const Auth = ({ component: Component, path, loggedIn, exact, user }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/@me/`} />
        )}
    />
  );
};

const mapStateToProps = (state, ownProps) => {

  const location = ownProps.location.pathname;
  const locationsplit = location.split('/');
  const serverId = locationsplit[1];
  const channelId = locationsplit[2];
  return {
    loggedIn: Boolean(state.session.user),
    user: state.session.user,
    loading: state.ui.loading,
  };
};


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
