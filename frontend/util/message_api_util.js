export const fetchAllMessages = (id) => {

  return $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {id}
  });
};



export const makeNewMessage = (message) => {

  return $.ajax({
    url: 'api/messages',
    method: 'POST',
    data: {message}
  });
};
