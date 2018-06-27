import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/auth_route_util';
import ProtectedRoute from '../util/protected_route_util';
import GreetingContainer from './greeting/greeting_container';
import ServerShowContainer from './server/server_show_container';
import ChannelShowContainer from './channel/channel_show_container';
import MessageShowContainer from './message/message_show_container';
import UserShowContainer from './user_list/user_show_container';
import SessionFormContainer from './user_forms/login_form_container';
import SignupFormContainer from './user_forms/signup_form_container';
import LoadingContainer from './loading/loading_container';
import Modal from './modal/modal';
import PageModal from './modal/page_modal';

const App = () => (
  <div className='app'>

    <AuthRoute exact path='/signup' component={ SignupFormContainer } />
    <AuthRoute exact path='/login' component={ SessionFormContainer }/>

    <ProtectedRoute exact path='/' />

    <PageModal />
    <Modal />
  </div>
);

export default App;
