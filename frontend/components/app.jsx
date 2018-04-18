import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, PersonalRoute } from '../util/route_util';
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
    <AuthRoute exact path='/login' component={ SessionFormContainer }/>


    <ProtectedRoute path={`/`} component={ ServerShowContainer } />
    <ProtectedRoute path={`/:serverId/`} component={ ChannelShowContainer } />
    <Switch>
    // <ProtectedRoute path={`/:serverId/:channelId`} component={ MessageShowContainer } />
    // <ProtectedRoute exact path={`/:serverId/`} component={ MessageShowContainer } />
    </Switch>
    <Modal />
  </div>
);

export default App;
