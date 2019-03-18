import axios from 'axios';
import {url} from '../settings';

axios.defaults.baseURL = url;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


const signUp = (data) => (
  axios.post('auth/', {
    ...data
  })

);

const signIn = (email, password) => (
  axios.post('auth/sign_in', {
    email,
    password,
  })
);

const getNotes = (headers) => (
  axios.get('notes',
  {
    headers,
  })
);


const updateNote = ( due_date, id,  headers) => (
  axios.patch(`notes/${id}`, {
    due_date,
  },
  {
    headers,
  })
);


const archivedNote = ( archived, id,  headers) => (
  axios.patch(`notes/${id}`, {
    archived,
  },
  {
    headers,
  })
);



const createNote = ( data,  headers) => (
  axios.post('notes', {
    ...data
  },{
    headers})
);


const deleteNote = (id, headers) => (
  axios.delete(`notes/${id}` ,
  {
    headers,
  })
);

axios.get('http://demo4452328.mockable.io/properties')
.then( res => console.log(res));



export default {
  signUp,
  signIn,
  createNote,
  updateNote,
  archivedNote,
  getNotes,
  deleteNote,
};

/*const getAuthLoginApi = auth => request.post(signInAPI, { auth });*/





/*
const request = axios.create({
  baseURL: settings.api_v1,
});

request.interceptors.request.use(
  config => {
    const token = authAPI.getAccessToken();
    if (token) {
      config.headers.Authorization = token;
    }

    const url = config.url.split('/');

    if (url[url.length - 1] === 'login') {
      delete config.headers.Authorization;
    }

    return config;
  },
  error => Promise.reject(error),
);


interceptors.respons*/