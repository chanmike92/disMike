import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ServerShowContainer from './server/server_show_container';
import SessionFormContainer from './user_forms/login_form_container';
import SignupFormContainer from './user_forms/signup_form_container';

const App = () => (
  <div className='app'>
    <ProtectedRoute path={`/:userId/server`} component={ ServerShowContainer } />
    <ProtectedRoute path='/' component={ GreetingContainer } />
    <AuthRoute exact path='/session' component={ SessionFormContainer } />
    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
  </div>
);

export default App;
