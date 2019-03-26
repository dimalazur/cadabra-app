import { combineReducers } from 'redux';

import {

  CREATE_NOTE_SUCCESS,
  NOTES_SET_DESCRIPTION,
  NOTES_CLEAR_SELECTED,
  NOTES_TOGGLE_SHOW_DESCRIPTION,
  NOTES_SORT_SELECT,
  NOTES_TOGGLE_DATE_PICKER,
  NOTES_TOGGLE_ARCHIVED,
  NOTES_SET_ARCHIVED_CHECKBOX,
  
  GET_NOTES_SUCCESS,

  DELETE_NOTE_SUCCESS,

  UPDATE_NOTE_SUCCESS,

  ARCHIVED_NOTE_SUCCESS,
  NOTES_SEARCH,
  USER_LOGOUT,

} from '../actions/actions';


const initialState = {
  notesList: [],
  notesDescriptionSelect: null,
  notesIsActive: null,
  searchTerm: null,
  pageShowDescriptionNotes: true,
  noteShowItem: null,
  disabledDatePicker: true,
  isCheckedArchiver: false,
  searchFilter: null

}



function notes (state = initialState, action)  {
  console.log(state);
  switch (action.type) {

    case CREATE_NOTE_SUCCESS: {
      let date = (action.payload.due_date).split('-').reverse();
      date[2] = date[2].slice(-2);


      return {
        ...state,
        notesList: [
          
          {
            title: action.payload.title,
            text: action.payload.text,
            id: action.payload.id,
            completed: false,
            due_date: date.join('.'),
            isArchived: action.payload.archived,
          },
          ...state['notesList'],
        ]        
      }

    }

    case UPDATE_NOTE_SUCCESS: {
      var newState = [...state.notesList];
      newState.forEach(function(item){
        if( item.id === action.payload.id ){
        
          let date = action.payload.due_date.split('-').reverse();
          date[2] = date[2].slice(-2);
          item.due_date = date.join('.');
    
        }
      })

      return {
        ...state,
        notesList: newState,
      }

    }

    case GET_NOTES_SUCCESS: {
      console.log('GET_NOTES_SUCCESS');
      console.log(action.payload);
      action.payload.forEach(function(item){
        if(item.due_date){
          let date = item.due_date.split('-').reverse();
          date[2] = date[2].slice(-2);
          item.due_date = date.join('.'); 
        }

      })

      return {
        ...state,
        notesList: [
          ...action.payload,
        ]
      }

    }

    case DELETE_NOTE_SUCCESS: {
      function isFilterById(value) {
        return value.id !== action.payload;
      }

      let notesList = [...state.notesList];
      let newList = notesList.filter(isFilterById);

      return {
        ...state,
        notesList: newList,
      }
     
    }

    case NOTES_TOGGLE_SHOW_DESCRIPTION: {
      return {
        ...state, 
        pageShowDescriptionNotes: action.payload
      }
    }


    case NOTES_SET_DESCRIPTION: {
      console.log('NOTES_SET_DESCRIPTION');
      console.log(action.payload);
      return {
        ...state,
        notesDescriptionSelect: action.payload.id,
        notesIsActive: action.payload.archived,
        noteShowItem: action.payload,
      }
    }

    case NOTES_CLEAR_SELECTED: {
      return {
        ...state,
        disabledDatePicker: true,
        notesDescriptionSelect: null
      }
    }

    case NOTES_TOGGLE_DATE_PICKER: {
      return {
        ...state,
        disabledDatePicker: !state.notesDescriptionSelect
      }
    }

    case NOTES_TOGGLE_ARCHIVED: {
      return {
        ...state, 
        notesList: state['notesList'].map((item, index) => {

            if (state.notesDescriptionSelect === item.id) {
              item.isArchived = !item.isArchived;
            }
          return item;

        }),
        isCheckedArchiver: !state.isCheckedArchiver,
      }
    }

    case ARCHIVED_NOTE_SUCCESS: {
      const { archived, id } = action.payload;

      var newList = [...state.notesList];
      newList.forEach((item, index) => {
        if (id === item.id) {
          item.archived = archived;
        }
      });
      return {
        ...state, 
        notesList: newList,
        isCheckedArchiver: !state.isCheckedArchiver,
      }
    }

    case NOTES_SET_ARCHIVED_CHECKBOX: {
      return {
        ...state,
        isCheckedArchiver: action.payload
      }
    }

    case NOTES_SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }

    case NOTES_SORT_SELECT: {
      return {
        ...state,
        searchTerm: state.notesList.filter(function(obj){
          for ( let i=0; i < state.notesList.length; i++ ) {

            if ( action.payload === 'Archived' ) {
              return obj[action.payload.toLowerCase()];
            }
            if ( action.payload === 'Active' ) {
              return (!obj.archived) ? true : false;
            }
            if ( action.payload === 'all' ) {
              return true;
            }
          
          }         
        })
      }
    }

    case USER_LOGOUT: {
      localStorage.removeItem('userLogin');
      return {
        ...state
      }
    }
   

    default: {
      return state;
    }
  }
};



const clientsReducers = combineReducers({
  notes,
})

export default clientsReducers

