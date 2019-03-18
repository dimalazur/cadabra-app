

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const CREATE_NOTE_REQUEST = 'CREATE_NOTE_REQUEST';
export const CREATE_NOTE_SUCCESS = 'CREATE_NOTE_SUCCESS';
export const CREATE_NOTE_FAILURE = 'CREATE_NOTE_FAILURE';


export const GET_NOTES_REQUEST = 'GET_NOTES_REQUEST';
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
export const GET_NOTES_FAILURE = 'GET_NOTES_FAILURE';

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const UPDATE_NOTE_REQUEST = 'UPDATE_NOTE_REQUEST';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';


export const ARCHIVED_NOTE_REQUEST = 'ARCHIVED_NOTE_REQUEST';
export const ARCHIVED_NOTE_SUCCESS = 'ARCHIVED_NOTE_SUCCESS';
export const ARCHIVED_NOTE_FAILURE = 'ARCHIVED_NOTE_FAILURE';



export const NOTES_ADD = 'NOTES_ADD';
export const NOTES_TOGGLE_SHOW_DESCRIPTION = 'NOTES_TOGGLE_SHOW_DESCRIPTION';
export const NOTES_SET_DESCRIPTION = 'NOTES_SET_DESCRIPTION';
export const NOTES_CLEAR_SELECTED = 'NOTES_CLEAR_SELECTED';
export const NOTES_SORT_SELECT = 'NOTES_SORT_SELECT';
export const NOTES_TOGGLE_DATE_PICKER = 'NOTES_TOGGLE_DATE_PICKER';

export const NOTES_TOGGLE_ARCHIVED = 'NOTES_TOGGLE_ARCHIVED';
export const NOTES_SET_ARCHIVED_CHECKBOX = 'NOTES_SET_ARCHIVED_CHECKBOX';

export const NOTES_SEARCH = 'NOTES_SEARCH';
export const USER_LOGOUT = 'USER_LOGOUT';


export const createNoteSuccess = payload => ({
  type: CREATE_NOTE_SUCCESS,
  payload,
});

export const notesToggleShowDescription = payload => ({
  type: NOTES_TOGGLE_SHOW_DESCRIPTION,
  payload,
});

export const notesSetDescription = payload => ({
  type: NOTES_SET_DESCRIPTION,
  payload,
});

export const notesClearSelected = payload => ({
  type: NOTES_CLEAR_SELECTED,
  payload,
});

export const notesSortSelect = payload => ({
  type: NOTES_SORT_SELECT,
  payload,
});

export const notesToggleDatePicker = payload => ({
  type: NOTES_TOGGLE_DATE_PICKER,
  payload,
});



export const notesToggleArchived = payload => ({
  type: NOTES_TOGGLE_ARCHIVED,
  payload,
});

export const notesSetArchivedCheckbox = payload => ({
  type: NOTES_SET_ARCHIVED_CHECKBOX,
  payload,
});



export const signUpRequest = payload => ({
  type: SIGN_UP_REQUEST,
  payload,
});


export const signInRequest = payload => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const getNotesRequest = payload => ({
  type: GET_NOTES_REQUEST,
  payload,
});

export const deleteNoteRequest = payload => ({
  type: DELETE_NOTE_REQUEST,
  payload,
});

export const deleteNoteSuccess = payload => ({
  type: DELETE_NOTE_SUCCESS,
  payload,
});


export const updateNoteRequest = payload => ({
  type: UPDATE_NOTE_REQUEST,
  payload,
});

export const updateNoteSuccess = payload => ({
  type: UPDATE_NOTE_SUCCESS,
  payload,
});


export const archivedNoteRequest = payload => ({
  type: ARCHIVED_NOTE_REQUEST,
  payload,
});

export const archivedNoteSuccess = payload => ({
  type: ARCHIVED_NOTE_SUCCESS,
  payload,
});

export const notesSearch = payload => ({
  type: NOTES_SEARCH,
  payload,
});

export const userLogout = payload => ({
  type: USER_LOGOUT,
  payload,
});


export const createNoteRequest = payload => ({
  type: CREATE_NOTE_REQUEST,
  payload,
});

