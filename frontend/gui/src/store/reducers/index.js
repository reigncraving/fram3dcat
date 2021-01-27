import { combineReducers } from 'redux';
import messages from './messages';
import errors from './errors';
import auth from './auth';

export default combineReducers({
  messages,
  auth,
  errors,
});
