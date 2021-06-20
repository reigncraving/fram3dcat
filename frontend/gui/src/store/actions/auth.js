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
  DELETE_SUCCESS,
  DELETE_FAIL,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  ADD_FRAME_SUCCESS,
  ADD_FRAME_FAIL,
  FRAMES_LOADING,
  ADD_JOB_FAIL,
  ADD_JOB_SUCCESS,
  GET_JOBS_SUCCCESS,
  GET_JOBS_FAIL,
  JOBS_LOADING,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAIL,
  STORY_LOADING,
  GET_STORY_SUCCESS,
  GET_STORY_FAIL,
  LOAD_PROFILE,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_FAIL,
  GET_STORY_COMMENTS_SUCCESS,
  GET_STORY_COMMENTS_FAIL
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

//load user profile
export const loadProfile = (user_ID) => (dispatch) => {
  dispatch({ type: LOAD_PROFILE });

  axios
    .get('http://127.0.0.1:8000/accounts/auth/user/' + user_ID + '/')
    .then((res) => {
      dispatch({
        type: LOAD_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_PROFILE_FAIL,
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email, is_designer }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Request Body
  const body = JSON.stringify({ username, password, email, is_designer });
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
export const updatePassword = ({ old_password, new_password, }) => (dispatch, getState) => {
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

// DELETE Account email username password is req...
export const deleteAccount = ({ password }) => (dispatch, getState) => {

  const username = getState().auth.username;
  const email = getState().auth.email;
  const user_ID = getState().auth.id;

  // Request Body
  const body = JSON.stringify({ username, email, password });

  axios
    .delete('http://127.0.0.1:8000/accounts/auth/destroy/user/' + user_ID, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(logout()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_FAIL,
      });
    });

};

//UPDATE PersonalInfo:
export const update_PersonalInfo = ({ user_ID, first_name, last_name, website }) => (dispatch, getState) => {
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
    .then(() => { dispatch(loadUser()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
        payload: err.data,
      });
    });
};

//UPDATE Proffesional info:
export const update_ProffesionalInfo = ({ user_ID, work_fields, company_name, position, skills }) => (dispatch) => {
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
    .then(() => { dispatch(loadUser()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//UPDATE Location info:
export const update_Location = ({ user_ID, address_line, zip_code, state, country }) => (dispatch) => {
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
    .then(() => { dispatch(loadUser()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//UPDATE CompanyInfo:
export const update_CompanyInfo = ({ user_ID, website, company_name, work_fields, address_line, zip_code, state, country }) => (dispatch, getState) => {
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
    .then(() => { dispatch(loadUser()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
        payload: err.data,
      });
    });
};

//UPLOAD IMAGE FILE
export const uploadFile = (url, form_data) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: UPLOAD_SUCCESS });
  axios
    .put(url, form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: UPLOAD_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPLOAD_FAIL,
      });
    });
};

//Get MyFramews be username
export const getMyFrames = (username) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: FRAMES_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`http://127.0.0.1:8000/global/frame_author/?author__username=${username}`, config)
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

//Create Frame
export const createFrame = (form_data) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: ADD_FRAME_SUCCESS });

  axios
    .post('http://127.0.0.1:8000/global/frames/', form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: ADD_FRAME_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    //update state on my framelist
    .then(() => { dispatch(getMyFrames(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: ADD_FRAME_FAIL,
      });
    });
};

export const updateFrame = (form_data, frame_ID) => (dispatch, getState) => {

  axios
    .patch('http://127.0.0.1:8000/global/frames/' + frame_ID + '/', form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    //update state on my framelist
    .then(() => { dispatch(getMyFrames(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//DeleteFrame
export const deleteFrame = (frame_ID) => (dispatch, getState) => {
  axios
    .delete('http://127.0.0.1:8000/global/frames/' + frame_ID + '/', tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    //update state on my framelist
    .then(() => { dispatch(getMyFrames(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_FAIL,
      });
    });
};

//Add views to Frame
export const addViews = (frame_ID, views) => (dispatch, getState) => {

  const body = JSON.stringify({ views });

  axios
    .patch('http://127.0.0.1:8000/global/frames/' + frame_ID + '/', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    //update state on my framelist
    .then(() => { dispatch(getMyFrames(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//Create Jobs post
export const createJob = (headline,
  description,
  body_text,
  salary,
  due_date,
  number_of_comments,
  rating,
  is_remote,
  is_active,
  submition_url,
  experience,) => (dispatch, getState) => {

    const author = getState().auth.id;
    // Request Body
    const body = JSON.stringify({
      headline,
      description,
      body_text,
      salary,
      due_date,
      number_of_comments,
      rating,
      is_remote,
      is_active,
      submition_url,
      experience,
      author
    });

    axios
      .post('http://127.0.0.1:8000/jobs/auth/', body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: ADD_JOB_SUCCESS,
          payload: res.data,
        });
      })
      .then(() => { dispatch(loadUser()); })
      //update state on my framelist
      //.then(() => { dispatch(getMyFrames(getState().auth.username));})
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: ADD_JOB_FAIL,
        });
      });
  };

//Update Jobs post
export const updateJob = (jobID, form_data) => (dispatch, getState) => {
  // Request Body

  axios
    .patch(`http://127.0.0.1:8000/jobs/auth/${jobID}/`, form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })
    //update state on my framelist
    .then(() => { dispatch(getMyJobs(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//Get My Job posting by username
export const getMyJobs = (username) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: JOBS_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`http://127.0.0.1:8000/jobs/auth/?author__username=${username}`, config)
    .then((res) => {
      dispatch({
        type: GET_JOBS_SUCCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_JOBS_FAIL,
      });
    });

};

//Delete Job
export const deleteJob = (job_ID) => (dispatch, getState) => {

  axios
    .delete('http://127.0.0.1:8000/jobs/auth/' + job_ID + '/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data,
      });
    })
    //update state on my framelist
    .then(() => { dispatch(getMyJobs(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_FAIL,
      });
    });
};
//Get my STORY comments by post_ID
export const getStoryComments = (post_ID) => (dispatch, getState) => {

  dispatch({ type: GET_COMMENTS });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`http://127.0.0.1:8000/stories/comments/?post__id=${post_ID}`, config)
    .then((res) => {
      dispatch({
        type: GET_STORY_COMMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_STORY_COMMENTS_FAIL,
      });
    });

};

//Create  STORY Comment
export const postStoryComment = (post, content, author) => (dispatch, getState) => {

  const body = JSON.stringify({ post, content, author });
  axios
    .post('http://127.0.0.1:8000/stories/comment_author/', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(getStoryComments(post)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CREATE_COMMENT_FAIL,
      });
    });
};

//Get my comments by post_ID
export const getComments = (post_ID) => (dispatch, getState) => {

  dispatch({ type: GET_COMMENTS });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`http://127.0.0.1:8000/global/comment_author/?post__id=${post_ID}`, config)
    .then((res) => {
      dispatch({
        type: GET_COMMENTS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_COMMENTS_FAIL,
      });
    });

};


//Create Comment
export const postComment = (post, content, author) => (dispatch, getState) => {

  const body = JSON.stringify({ post, content, author });
  axios
    .post('http://127.0.0.1:8000/global/comment/', body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_COMMENT_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(getComments(post)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: CREATE_COMMENT_FAIL,
      });
    });
};

//Create story post
export const createStory = (form_data) => (dispatch, getState) => {

  axios
    .post('http://127.0.0.1:8000/stories/auth/', form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: ADD_JOB_SUCCESS,
        payload: res.data,
      });
    })
    .then(() => { dispatch(loadUser()); })
    .then(() => { dispatch(getMyStories(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: ADD_JOB_FAIL,
      });
    });
};

//Update story post
export const updateStory = (form_data, story_ID) => (dispatch, getState) => {

  axios
    .patch('http://127.0.0.1:8000/stories/auth/' + story_ID + '/', form_data, tokenConfigUpload(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
    })

    //update state on my framelist
    .then(() => { dispatch(getMyStories(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: UPDATE_FAIL,
      });
    });
};

//Get My Stories  by username
export const getMyStories = (username) => (dispatch, getState) => {
  // User Loading
  dispatch({ type: STORY_LOADING });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  axios
    .get(`http://127.0.0.1:8000/stories/auth/?author__username=${username}`, config)
    .then((res) => {
      dispatch({
        type: GET_STORY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_STORY_FAIL,
      });
    });

};

//Delete Story
export const deleteStory = (story_ID) => (dispatch, getState) => {

  axios
    .delete('http://127.0.0.1:8000/stories/auth/' + story_ID + '/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: res.data,
      });
    })
    //update state on my framelist
    .then(() => { dispatch(getMyStories(getState().auth.username)); })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: DELETE_FAIL,
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

//For multipart form upload of files.
export const tokenConfigUpload = (getState) => {
  // Get token from state
  const token = getState().auth.token;
  // Headers
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  return config;
};
