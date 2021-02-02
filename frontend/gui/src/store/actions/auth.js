import axios from 'axios';
import { returnErrors } from './messages';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  GET_FRAMES_SUCCCESS,
  GET_FRAMES_FAIL,
} from './types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://127.0.0.1:8000/accounts/auth/user', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password });

  axios
    .post('http://127.0.0.1:8000/accounts/auth/login', body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email, is_designer}) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password, email, is_designer});

  // const data = {
  //   'username': username,
  //   'password': password,
  //   'email': email,
  // };

  axios
    .post('http://127.0.0.1:8000/accounts/auth/register', body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('http://127.0.0.1:8000/accounts/auth/logout/', null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: 'CLEAR_LEADS' });
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      console.log(err.response.data, err.response.status)
    });
};




// UPDATE PASSWORD
export const updatePassword = ({ old_password, new_password,}) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Request Body
  const body = JSON.stringify({ new_password, old_password });

  axios
    .patch('http://127.0.0.1:8000/accounts/auth/update/password/', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });

};






//UPDATE PersonalInfo:
export const update_PersonalInfo = ({user_ID, first_name, last_name, website }) => (dispatch, getState ) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ first_name, last_name, website });

  axios
    .put('http://127.0.0.1:8000/accounts/auth/update/personal-info/' + user_ID, body, config)
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser());})
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
        payload: err.data,
      });
    });
};

//UPDATE Proffesional info:
export const update_ProffesionalInfo = ({user_ID, work_fields, company_name, position, skills }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ work_fields, company_name, position, skills });

  axios
    .put('http://127.0.0.1:8000/accounts/auth/update/proffesional-info/' + user_ID, body, config)
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser());})
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//UPDATE Location info:
export const update_Location = ({user_ID, address_line, zip_code, state, country }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ address_line, zip_code, state, country });

  axios
    .patch('http://127.0.0.1:8000/accounts/auth/update/location-info/' + user_ID, body, config)
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser());})
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//Get Framews
export const MyFrames = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://127.0.0.1:8000/global/frames/author/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FRAMES_SUCCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_FRAMES_FAIL,
      });
    });
};


//UPDATE CompanyInfo:
export const update_CompanyInfo = ({user_ID, website, company_name, work_fields, address_line, zip_code, state, country }) => (dispatch, getState ) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ company_name, website, work_fields, address_line, zip_code, state, country });

  axios
    .put('http://127.0.0.1:8000/accounts/auth/update/company-info/' + user_ID, body, config)
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser());})
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
        payload: err.data,
      });
    });
};



// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};
