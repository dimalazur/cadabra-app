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

const notesListSelector = state => state.notes.notesList;

export const getNotesList = createSelector(
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
  notesSelector,
  (state) => {
    const { notesDescriptionSelect } = state;

    if (notesDescriptionSelect) {
      return notesDescriptionSelect
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