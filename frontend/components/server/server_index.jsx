import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { ChannelShowContainer } from '../channel/channel_show_container';

const ServerIndex = (props) => {

  const iconClass = props.active ? "server-icons active-server" : "server-icons";
  const firstChannel = props.server.channel_ids[0] ? props.server.channel_ids[0] : "";
  const nameArr = props.server.name.split(" ");
  let serverNameIcon = "";
  nameArr.forEach((word, idx) => {
    if (word[0]) {
      serverNameIcon = serverNameIcon + word[0];
    }
  });

  // const iconPic = () =>
    return (
    <li className={ iconClass }>
      <Link className='server-links'
        to={`/${props.server.id}/${firstChannel}`}>
        { serverNameIcon }
      </Link>
    </li>
  );
};

export default withRouter(ServerIndex);
