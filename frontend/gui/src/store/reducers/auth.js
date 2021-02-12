import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  UPDATE_SUCCESS,
  UPDATE_FAIL,
  REGISTER_FAIL,
  GET_FRAMES_SUCCCESS,
  GET_FRAMES_FAIL,
  GET_JOBS_SUCCCESS,
  GET_JOBS_FAIL,
  JOBS_LOADING
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  frame: [
    {title: '',
    description: '',
    author: '',
    rating: '',
    number_of_comments: '',
    likes: '',
    views: '',
    frameFile: '',
    frame_picture: '',
    date_uploaded: '',
    last_moddified: '',
  }
],
  isAuthenticated: null,
  isLoading: false,
  user: [
    {username: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    address_line: '',
    zip_code: '',
    state: '',
    coutry: '',
    date_joined: '',
    last_logged_in: '',
    is_available: '',
    company_name: '',
    possition: '',
    website: ' ',
    tools: [],
    work_fields: [],
    skills: [],
    is_staff: false,
    is_designer: false,
    is_admin: false,
    is_active: false,
    password: '',
  }
],

job: [
  {
        id:0,
        headline: '',
        description: '',
        body_text: '',
        salaray: 0,
        pub_date: '',
        mod_date: '',
        due_date:'',
        author:0,
        number_of_comments:0,
        rating: 0,
        is_remote: false,
        is_active: false,
        experience: '',
        submition_url: '',
  }
],

comments: [
  {post: '',
  author: '',
  content: '',
  likes: '',
  pub_date: '',
}
],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      localStorage.setItem('userData', action.payload)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case GET_FRAMES_SUCCCESS:
        localStorage.setItem('frame', action.payload)
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          frame: action.payload,
        };
    case GET_JOBS_SUCCCESS:
      const Jobs = action.payload;
              return {
                  ...state,
                  Jobs
              };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case UPDATE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
