import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import { ChannelShowContainer } from '../channel/channel_show_container';

const ServerIndex = (props) => {

  const iconClass = props.active ? "server-icons active-server" : "server-icons";
  const firstChannel = props.server.channel_ids[0] ? props.server.channel_ids[0] : "";
  const nameArr = props.server.name.split(" ");
  let serverNameIcon = "";
  if (!props.server.image_url) {
    nameArr.forEach((word, idx) => {
      if (word[0]) {
        serverNameIcon = serverNameIcon + word[0];
      }
    });
  }
  // <div className='server-context-menu' style={ {left: `${x}`, bottom: `${y}` }}>
  //   hello
  // </div>
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    props.openDropdown({dropdownType: "serverindex", x: e.clientX,
      y: e.clientY, id: props.server.id});
  };

    return (
    <li className={ iconClass } draggable="true" onContextMenu={ handleClick } style={ { backgroundImage: `url(${props.server.image_url})` } }>
      <Link className='server-links' draggable="true" onContextMenu={ handleClick } to={`/${props.server.id}/${firstChannel}`}>
        { serverNameIcon }
      </Link>
    </li>
  );
};

export default withRouter(ServerIndex);
