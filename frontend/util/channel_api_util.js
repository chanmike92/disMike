export const fetchAllChannels = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/channels',
  });
};

export const fetchAChannel = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
  });
};

export const makeNewChannel = (server) => {

  return $.ajax({
    url: 'api/channels',
    method: 'POST',
    data: {server}
  });
};

export const deleteChannel = (id) => {
  return $.ajax({
    url: `api/channels/${id}`,
    method: 'DELETE',
  });
};
