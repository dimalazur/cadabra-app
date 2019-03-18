//import _ from 'lodash';
import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import {
  SIGN_UP_REQUEST, 
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,

  SIGN_IN_REQUEST, 
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,

  CREATE_NOTE_REQUEST, 
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,

  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,

  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,

  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,

  ARCHIVED_NOTE_REQUEST,
  ARCHIVED_NOTE_SUCCESS,
  ARCHIVED_NOTE_FAILURE


} from '../actions/actions';
import { authApi } from '../API';


function* createUser(actions) {
  const success = payload => ({ type: SIGN_UP_SUCCESS, payload });
  const failure = payload => ({ type: SIGN_UP_FAILURE, payload });

  console.log('createUser');
  console.log(actions.payload);
/*  const { 
    name, 
    email, 
    password, 
    confirm,
    history
  } = actions.payload;
*/
  const { 
    history
  } = actions.payload;


  try {
    const res = yield call(authApi.signUp, actions.payload);
    console.log('res');
    console.log(res);
    
    //var accessToken = res.headers['access-token'];
    //localStorage.setItem('accessToken', accessToken);
    history.push('/auth/sing-in');

    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}

function* signInUser(actions) {
  const success = payload => ({ type: SIGN_IN_SUCCESS, payload });
  const failure = payload => ({ type: SIGN_IN_FAILURE, payload });

  console.log('actions', actions);
  const { 
    email, 
    password,
    history
  } = actions.payload;

  try {
    const res = yield call(authApi.signIn, email, password);
    console.log('signInUser');
    console.log(res);
    
    let userLogin = {
      'access-token': res.headers['access-token'],
      'uid': res.headers.uid,
      'expiry': res.headers.expiry,
      'client': res.headers.client

    }

    localStorage.setItem('userLogin', JSON.stringify(userLogin) );
    history.push('/');

    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}

function* createNote(actions) {
  const success = payload => ({ type: CREATE_NOTE_SUCCESS, payload });
  const failure = payload => ({ type: CREATE_NOTE_FAILURE, payload });

  console.log('CREATE_NOTE_SUCCESS');
  console.log( actions);
/*  const { 
    title, 
    text,
    archived,
    due_date
  } = actions.payload;
  console.log(actions.payload);*/

  let headers = JSON.parse(localStorage.getItem('userLogin'));
  

  try {
    const res = yield call(authApi.createNote, actions.payload, headers);
    console.log('createNote');
    console.log(res);
    

    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}


function* updateNote(actions) {
  const success = payload => ({ type: UPDATE_NOTE_SUCCESS, payload });
  const failure = payload => ({ type: UPDATE_NOTE_FAILURE, payload });

  console.log('UPDATE_NOTE_SUCCESS');
  console.log( actions);
  const { 
    due_date,
    id
  } = actions.payload;

  let headers = JSON.parse(localStorage.getItem('userLogin'));
  

  try {
    const res = yield call(authApi.updateNote, due_date, id, headers);
    console.log('createNote');
    console.log(res);
    

    yield put(success({ 
    due_date,
    id
  }));
  } catch (e) {
    yield put(failure(e));
  }
}



function* archivedNote(actions) {
  const success = payload => ({ type: ARCHIVED_NOTE_SUCCESS, payload });
  const failure = payload => ({ type: ARCHIVED_NOTE_FAILURE, payload });

  console.log('ARCHIVED_NOTE_REQUEST');
  console.log( actions);
  const { 
    archived,
    id
  } = actions.payload;

  let headers = JSON.parse(localStorage.getItem('userLogin'));
  

  try {
    const res = yield call(authApi.archivedNote, archived, id, headers);
    console.log('createNote');
    console.log(res);
    

    yield put(success({ 
      archived,
      id
    }));
  } catch (e) {
    yield put(failure(e));
  }
}



function* getNotes(actions) {
  const success = payload => ({ type: GET_NOTES_SUCCESS, payload });
  const failure = payload => ({ type: GET_NOTES_FAILURE, payload });

  console.log('getNotes');
  console.log( actions );



  let headers = JSON.parse(localStorage.getItem('userLogin'));
  

  try {
    //const res = yield call(authApi.createNote, title, text, headers);
    const res = yield call(authApi.getNotes, headers);
    console.log('signInUser');
    console.log(res);

    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}


function* deleteNote(actions) {
  const success = payload => ({ type: DELETE_NOTE_SUCCESS, payload });
  const failure = payload => ({ type: DELETE_NOTE_FAILURE, payload });

  console.log('deleteNote');
  console.log( actions.payload );

  const id = actions.payload;
  let headers = JSON.parse(localStorage.getItem('userLogin'));


  try {
    const res = yield call(authApi.deleteNote, id, headers);
    console.log('deleteNote');
    console.log(res);
    
    yield put(success(id));
  } catch (e) {
    console.log(' DELETE_NOTE_FAILURE');
    yield put(failure(e));
  }
}


/*function* createNotes(actions) {
   мой код аналогичный коду сверху??
}*/




function* notesSaga() {
  yield takeEvery(SIGN_UP_REQUEST, createUser);
  yield takeEvery(SIGN_IN_REQUEST, signInUser);
  yield takeEvery(CREATE_NOTE_REQUEST, createNote);
  yield takeEvery(GET_NOTES_REQUEST, getNotes);
  yield takeEvery(DELETE_NOTE_REQUEST, deleteNote);
  yield takeEvery(UPDATE_NOTE_REQUEST, updateNote);
  yield takeEvery(ARCHIVED_NOTE_REQUEST, archivedNote);
}


export default notesSaga;