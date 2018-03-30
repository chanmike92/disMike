import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import ServerShowContainer from './server/server_show_container';
import ChannelShowContainer from './channel/channel_show_container';
import MessageShowContainer from './message/message_show_container';
import UserShowContainer from './user_list/user_show_container';
import SessionFormContainer from './user_forms/login_form_container';
import SignupFormContainer from './user_forms/signup_form_container';
import Modal from './modal/modal';

const App = () => (
  <div className='app'>

    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
    <AuthRoute exact path='/' component={ SessionFormContainer }/>

    <ProtectedRoute path={`/@me/`} component={ ServerShowContainer } />

    <ProtectedRoute path={`/@me/:serverId/:channelId`} component={ ChannelShowContainer } />
    <ProtectedRoute path={`/@me/:serverId/:channelId`} component={ MessageShowContainer } />
    <ProtectedRoute path={`/@me/:serverId/:channelId`} component={ UserShowContainer } />
    <Modal />
  </div>
);

export default App;
