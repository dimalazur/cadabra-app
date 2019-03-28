import { createSelector } from 'reselect'

// Пример стора state.tasks
// 
// initState = {
//   data: [{task1}, {task2}]
//   selected: null,
//   searchTerm: '',
// }

/*const tasksSelector = state => state.tasks // путь к редюсеру где лежат таски.

const getSelectedTask = createSelector(
  tasksSelector,
  (tasks) => {
    const { data, selected } = tasks;

    if (selected) {
      return data.filter(task => task === selected);
    }

    return null;
  }
)

const searchTasks = createSelector(
  tasksSelector,
  (tasks) => {
    const { data, searchTerm } = tasks;

    if (searchTerm) {
      return // тут возвращаешь результат поиска по своему алшлритму)
    }

    return data; //  тут возвращаешь просто таски когда строка поиска пустая
  }
)*/



const notesSelector = state => state.notes; // путь к редюсеру где лежат данные

const getList = state => state.notes.notesList;
const getSearchTerm = state => state.notes.searchTerm;
const getNotesSelect = state => state.notes.notesSelect;
const pageShowDescriptionNotes = state => state.notes.pageShowDescriptionNotes;

export const getPageShowDescriptionNotes = createSelector(
  pageShowDescriptionNotes,
  (pageShowDescriptionNotes) => {
    if (pageShowDescriptionNotes) {
      return pageShowDescriptionNotes
    }

    return null;
  }
)

export const getNotesLists = createSelector(
  notesSelector,
  (state) => {
    const { notesList } = state;

    if (notesList) {
      return notesList
    }

    return null;
  }
)




export const getSelectedNote = createSelector(
  [getList, getNotesSelect],
  (notesList, id) => {
    if(id !== null){
      let noteSelected;
      notesList.map( (note) =>  {
        if(note.id === id){
          noteSelected = Object.assign({}, note);
          //return note;
        }
      });
      return noteSelected;
    } 
    return null;
  }
)

export const getNoteShowItem = createSelector(
  notesSelector,
  (state) => {
    const { noteShowItem } = state;

    if (noteShowItem) {
      return noteShowItem
    }

    return null;
  }
)



export const searchTasks = createSelector(
  notesSelector,
  (tasks) => {
    const { notesList, searchTerm, searchFilter } = tasks;

    if (searchFilter) {
      return  notesList.filter( (note) => {
        return ( note.title.toLowerCase().includes(searchFilter) || note.text.toLowerCase().includes(searchFilter) );
      })
      // тут возвращаешь результат поиска по своему алшлритму)
    }

    return notesList; //  тут возвращаешь просто таски когда строка поиска пустая
  }
)



export const getNotesListRender = createSelector(
  [getList, getSearchTerm],
  (notesList, searchTerm) => {
    if (searchTerm !== null) {
      const searchValue = searchTerm.toLowerCase();
      return notesList.filter( (note) => {
        return ( note.title.toLowerCase().includes(searchValue) || note.text.toLowerCase().includes(searchValue) );
      })

    }
    return notesList;
  }
);