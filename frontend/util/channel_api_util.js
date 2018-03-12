export const fetchAllChannels = (id) => {

  return $.ajax({
    method: 'GET',
    url: 'api/channels',
    data: {id}
  });
};

export const fetchAChannel = (id) => {
  
  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
    data: {id}
  });
};

export const makeNewChannel = (channel) => {

  return $.ajax({
    url: 'api/channels',
    method: 'POST',
    data: {channel}
  });
};

export const updateChannel = (channel) => {

  return $.ajax({
    url: `api/channels/${channel.id}`,
    method: 'PATCH',
    data: {channel}
  });
};

export const deleteChannel = (id) => {

  return $.ajax({
    url: `api/channels/${id}`,
    method: 'DELETE',
    data: {id}
  });
};
