import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const parseErrors = (railsErrors = []) => {
  const errors = {
    email: [],
    username: [],
    password: []
  };

  railsErrors.forEach((error) => {

    switch(error) {
      case "Username can't be blank":
        return errors.username.push("USERNAME (THIS FIELD IS REQUIRED)");
      case "Username has already been taken":
        return errors.username.push("USERNAME (USER IS ALREADY REGISTERED)");
      case "Email can't be blank":
        return errors.email.push("EMAIL (THIS FIELD IS REQUIRED)");
      case "Email has already been taken":
        return errors.email.push("EMAIL (EMAIL IS ALREADY REGISTERED)");
      case "Email (INVALID EMAIL)":
        return errors.email.push("EMAIL (INVALID EMAIL)");
      case "EMAIL (EMAIL DOES NOT EXIST)":
        return errors.email.push("EMAIL (EMAIL DOES NOT EXIST)");
      case "PASSWORD (PASSWORD DOES NOT MATCH)":
        return errors.password.push("PASSWORD (PASSWORD DOES NOT MATCH)");
      case "Password is too short (minimum is 6 characters)":
        return errors.password.push("PASSWORD (MUST BE BETWEEN 6 AND 128 IN LENGTH)");
      default:
        return null;
    }
  });
  return errors;
};

const sessionErrorsReducer = (oldState = {email: [], password: [], username: []}, action) => {

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return parseErrors(action.errors);
    case RECEIVE_CURRENT_USER:
      return {email: [], password: [], username: []};
    default:
      return oldState;
  }
};


export default sessionErrorsReducer;
