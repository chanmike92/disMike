export const fetchAllServers = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/servers',
  });
};

export const fetchAServer = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/servers/${id}`,
  });
};

export const updateAServer = (formData, id) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/servers/${ id }`,
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updateAServerName = (server, id) => {

  return $.ajax({
    method: 'PATCH',
    url: `api/servers/${ id }`,
    data: { server }
  });
};

export const makeNewServer = (server) => {

  return $.ajax({
    url: 'api/servers',
    method: 'POST',
    data: {server}
  });
};

export const joinServer = (userId, serverId) => {

  return $.ajax({
    url: 'api/servers/join',
    method: 'POST',
    data: {userId,
      serverId}
  });
};



export const deleteServer = (id) => {
  return $.ajax({
    url: `api/servers/${id}`,
    method: 'DELETE',
    data: {id}
  });
};

export const leaveServer = (userId, serverId) => {

  return $.ajax({
    url: 'api/servers/leave',
    method: 'POST',
    data: { userId, serverId }
  });
};
