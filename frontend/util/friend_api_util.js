export const fetchAllFriends = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/friendships',
  });
};

export const fetchAFriend = (id) => {

  return $.ajax({
    method: 'GET',
    url: `api/friendships/${id}`,
  });
};

export const addNewFriend = (id) => {

  return $.ajax({
    url: 'api/friendships',
    method: 'POST',
    data: { id }
  });
};

export const updateFriend = (id) => {

  return $.ajax({
    url: `api/friendships/${id}`,
    method: 'PATCH',
    data: { id }
  });
};

export const deleteFriend = (id) => {

  return $.ajax({
    url: `api/friendships/${id}`,
    method: 'DELETE',
    data: { id }
  });
};
