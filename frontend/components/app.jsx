import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './user_forms/login_form_container';
import SignupFormContainer from './user_forms/signup_form_container';

const App = () => (
  <div>
    <header>
      <h1>disMike</h1>
      <AuthRoute exact path='/session' component={ SessionFormContainer } />
      <AuthRoute path='/signup' component={ SignupFormContainer } />

    </header>
  </div>
);

export default App;
