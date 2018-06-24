export const signup = (user) => {

  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

export const login = (user) => {

  return $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  });
};

export const currentuser = () => {

  return $.ajax({
    method: 'GET',
    url: 'api/session/currentuser',
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE',
    }
  );
};
