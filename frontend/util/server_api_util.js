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

export const makeNewServer = (server) => {

  return $.ajax({
    url: 'api/servers',
    method: 'POST',
    data: {server}
  });
};

export const joinServer = (server) => {

  return $.ajax({
    url: 'api/servers/join',
    method: 'POST',
    data: {server}
  });
};



export const deleteServer = (id) => {
  return $.ajax({
    url: `api/servers/${id}`,
    method: 'DELETE',
  });
};
