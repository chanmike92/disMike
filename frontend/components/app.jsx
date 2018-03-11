import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ServerShowContainer from './server/server_show_container';
import ChannelShowContainer from './channel/channel_show_container';
import MessageShowContainer from './message/message_show_container';
import SessionFormContainer from './user_forms/login_form_container';
import SignupFormContainer from './user_forms/signup_form_container';
import Modal from './modal/modal';

const App = () => (
  <div className='app'>
    <Switch>
      <AuthRoute exact path='/signup' component={ SignupFormContainer } />
      <AuthRoute path='/' component={ SessionFormContainer }/>
    </Switch>


    <ProtectedRoute path={`/:userId/server`} component={ ServerShowContainer } />
    <ProtectedRoute path={`/:userId/server/:serverId/channel`} component= { ChannelShowContainer } />
    <ProtectedRoute path={`/:userId/server/:serverId/channel/:channelId`} component= { MessageShowContainer } />


    <Modal />
  </div>
);

export default App;
