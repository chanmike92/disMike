export const fetchAllMessages = (id) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: 'api/messages',
    data: {id}
  });
};



export const makeNewMessage = (message) => {
  debugger
  return $.ajax({
    url: 'api/messages',
    method: 'POST',
    data: {message}
  });
};
