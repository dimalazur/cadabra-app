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
const getNotesDescriptionSelect = state => state.notes.notesDescriptionSelect;

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
  [getList, getNotesDescriptionSelect],
  (notesList, id) => {
    if(id !== null){
      let noteSelected;
      console.log('228');
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




//console.log(getNotesListRender());

/*export const getClients = state => state.clientsStore.clients;
export const getSearchTerm = state => state.clientsStore.searchTerm;
export const getClientSelectId = state => state.clientsStore.clientSelectId;

export const getSelectedClient = createSelector(
  [getClients, getClientSelectId],
  (clients, id) => {
    const client = clients.filter(item => item.id === id);
    if (client && client.length === 1) {
      return client[0];
    }
    return null;
  },
);

export const getClientsListRender = createSelector(
  [getClients, getSearchTerm],
  (clients, searchTerm) => {
    if (searchTerm !== null) {

      return clients.filter((obj1) => {
      for (const val1 in obj1) {
        const obj2 = obj1[val1];
        for (const val2 in obj2) {
          if (obj2[val2].toLowerCase().includes(searchTerm.toLowerCase().trim())) {
            return true;
          }
        }
      }
      return false;
    });
    }
    return clients;
  }
);*/
