import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
        notesClearSelected, 
        deleteNoteRequest,
        createNoteSuccess,
        notesToggleShowDescription, 
        notesSortSelect, 
        notesToggleDatePicker, 
        updateNoteRequest,
        notesToggleArchived,
        getNotesRequest,
        archivedNoteRequest,
        notesSearch,
        userLogout,
        notesSetDescription,
        notesSetArchivedCheckbox,
        createNoteRequest,
      } from '../actions/actions'
import { 
        getNotesList, 
        getSelectedNote, 
        getNoteShowItem, 
        searchTasks,  
      } from '../selectors';

import NotesListWrapper from './NotesListWrapper'
//import NotesDetailWrapper from './NotesDetailWrapper'
import PageDescriptionWrapper from './PageDescriptionWrapper'


import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


import dateImg from '../images/I.svg'
import newNotesImg from '../images/New.svg'
import deleteImg from '../images/Can.svg'


class PageUserWrap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tech: 'all',
      isCheckedArchived: this.props.isCheckedArchiver
    };

    this.searchRef = React.createRef();

    this.changeDatePicker = this.changeDatePicker.bind(this);
    this.toggleChangeArchived = this.toggleChangeArchived.bind(this);
    this.changeSortSelect = this.changeSortSelect.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
    this.userLogoutClick = this.userLogoutClick.bind(this);

  }

  componentDidMount(){
    const { onGetNotesRequest,state } = this.props;  
    onGetNotesRequest( );
  }

  changeDatePicker(date) {

    const { onUpdateNoteRequest, notesDescriptionSelect } = this.props;
   
    let Day = ( date.getDate() <= 10 ) ? '0'+date.getDate() : date.getDate(),
        Month = ( (date.getMonth()+1) <= 10 ) ? '0'+(date.getMonth()+1) : (date.getMonth()+1),
        Year = String(date.getUTCFullYear());
      var obj = {
        due_date: Year+'-'+Month+'-'+Day,
        id: notesDescriptionSelect
      }
    onUpdateNoteRequest( obj );
  }

  changeSortSelect(e) {
    let { onNotesSortSelect, state } = this.props;
    this.setState({
      tech: e.target.value
    });
    onNotesSortSelect(e.target.value);

  }


 /* onDeleteNote(e) {
    let { onDeleteNoteSuccess, notesDescriptionSelect } = this.props;
    
    onDeleteNoteSuccess(notesDescriptionSelect);
  }*/

  toggleChangeArchived(event)  {
    let { onNotesToggleArchived, onArchivedNoteRequest, state, notesDescriptionSelect } = this.props;
    // isCheckedArchiver
    //checked={this.props.state.notes.isCheckedArchiver}
    let isCheckedArchiver = !state.notes.isCheckedArchiver;

    let obj = {
      archived: isCheckedArchiver,
      id: notesDescriptionSelect,
    }

    onArchivedNoteRequest(obj);
  }

  searchSubmit(event) {

    event.preventDefault();

   
    const { onNotesSearch } = this.props;
    var search = this.searchRef.current.value;
    console.log('searchSubmit');
    console.log(search);

    if( search.trim() || search == ''){
      onNotesSearch(search.trim());
    }

  };

  userLogoutClick(){

    const  { onUserLogout, history } = this.props;
    console.log('userLogoutClick');
    
    onUserLogout();
    history.push('/auth/sing-in');

  }



  render() {
    
    const { 
        state,
        onNotesClearSelected, 
        onDeleteNoteRequest, 
        onNotesToggleDatePicker, 
        notesDescriptionSelect, 
        onCreateNoteSuccess, 
        onNotesToggleShowDescription,
        onNotesToggleArchived,

        onNotesSetArchivedCheckbox,
        onNotesSetDescription,
        notesList,
        searchTerm,
        onCreateNoteRequest,
        isCheckedArchiver,
        disabledDatePicker,
        noteShowItem
      } = this.props;

      const { tech } = this.state;


    const userLogin = ( localStorage.getItem('userLogin') ) ? JSON.parse(localStorage.getItem('userLogin') ) : null;
    const userName = ( userLogin ) ? userLogin.uid : 'User name';

    return (
      <React.Fragment>
        <div className="page-user">

          <div className="header-main">
            <div className="wrap">
              <h1 className="page-title">Note app</h1>
              <div className="user-drop-down">
                <p className="name-user">{ userName }</p>
                <button type="submit" className="btn btn-logout" onClick={ this.userLogoutClick }>Logout</button>  
              </div>
            </div>
          </div>

          <div className="sub-header">
            <div className="wrap">

              <div className="sort-drop-down block-sub-header"> 
                <select onChange={ this.changeSortSelect } value={ tech }>
                  <option value = "all" >All</option>
                  <option value = "Active" >Active</option>
                  <option value = "Archived" >Archived</option>
                </select>
              </div>

              <div className="search-holder block-sub-header">
                <div className="search-block">
                  <button className="search-btn" onClick={ this.searchSubmit } ></button>
                  <input type="text" ref={ this.searchRef } onChange={ this.searchSubmit } name="search" className="search-field" placeholder="Search" />
                </div>
              </div>
              <div className="new-notes-holder block-sub-header" >
                <div className="icon-holder">
                  <img src={newNotesImg}/>
                </div>
                <button 
                  type="submit" 
                  className="btn" 
                  onClick={ 
                    () => { 
                      onNotesClearSelected(); 
                      onNotesToggleShowDescription(false); 
                    } 
                  }>New notes</button>
              </div>
              <div className="due-date block-sub-header" >
                <div className="icon-holder">
                  <img src={dateImg}/>
                </div>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={ this.changeDatePicker }
                  dateFormat="dd.MM.yy"
                  placeholderText="Due Date"
                  disabled={disabledDatePicker}
                />
              </div>
              <div className="note-delete block-sub-header" >
                <div className="icon-holder">
                  <img src={deleteImg}/>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-subheader" 
                  onClick={ 
                    () => { 
                      onDeleteNoteRequest(notesDescriptionSelect); 
                      onNotesClearSelected(); 
                      onNotesToggleDatePicker(); 
                    } 
                  }>Delete</button>
              </div>
              <div className="checkbox-holder block-sub-header" >
                <label className="checkbox">
                  <input type="checkbox" 
                    checked={ isCheckedArchiver }
                    onChange={this.toggleChangeArchived}
                  />
                  <div className="checkbox__text">Archive</div>
                </label>
              </div>
            </div>
          </div>

          <div className="content-page">
            <div className="wrap">
              <div className="sidebar">
                <NotesListWrapper 
                  notesList={notesList} 
                  notesDescriptionSelect={notesDescriptionSelect}
                  searchTerm={searchTerm}
                  onNotesSetDescription={onNotesSetDescription}
                  onNotesToggleShowDescription={onNotesToggleShowDescription}
                  onNotesToggleDatePicker={onNotesToggleDatePicker}
                  onNotesSetArchivedCheckbox={onNotesSetArchivedCheckbox}
                  />
              </div>
              <div className="details-block">
                <PageDescriptionWrapper 
                  onCreateNoteRequest={onCreateNoteRequest}
                  
                  notesDescriptionSelect={notesDescriptionSelect}
                  pageShowDescriptionNotes={state.notes.pageShowDescriptionNotes}
                  noteShowItem={noteShowItem}
                  state={state}
                />
              </div>

            </div>
          </div>

        </div>
   
      </React.Fragment>
    );

  }
}

/*
pageuserwrap => notesPage


container => разбиваем по папкам(каждая папка это страница)

философия реакта читать

*/


const mapStateToProps = (state) => {
  return {
    state: state,
    notesList: getNotesList(state),
    notesDescriptionSelect: getSelectedNote(state),
    searchTerm: state.notes.searchTerm,
    isCheckedArchiver: state.notes.isCheckedArchiver,
    disabledDatePicker: state.notes.disabledDatePicker,
    noteShowItem: getNoteShowItem(state),
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onNotesClearSelected: () => {
      dispatch(notesClearSelected())
    },
    onDeleteNoteRequest: (id) => {
      dispatch(deleteNoteRequest(id))
    },
    onCreateNoteSuccess: (newNotes) => {
      dispatch(createNoteSuccess(newNotes))
    },
    onNotesToggleShowDescription: (payload) => {
      dispatch(notesToggleShowDescription(payload))
    },
    onNotesSortSelect: (payload) => {
      dispatch(notesSortSelect(payload))
    },
    onNotesToggleDatePicker: () => {
      dispatch(notesToggleDatePicker())
    },
    onUpdateNoteRequest: (newDate) => {
      dispatch(updateNoteRequest(newDate))
    },
    onNotesToggleArchived: () => {
      dispatch(notesToggleArchived())
    },
    onArchivedNoteRequest: (payload) => {
      dispatch(archivedNoteRequest(payload))
    },
    onGetNotesRequest: (payload) => {
      dispatch(getNotesRequest(payload))
    },
    onNotesSearch: (payload) => {
      dispatch(notesSearch(payload))
    },
    onUserLogout: () => {
      dispatch(userLogout())
    },

    onNotesSetDescription: (payload) => {
      dispatch(notesSetDescription(payload))
    },
    onNotesSetArchivedCheckbox: (payload) => {
      dispatch(notesSetArchivedCheckbox(payload))
    },

    onCreateNoteRequest: (payload) => {
      dispatch(createNoteRequest(payload))
    },
  }
}




const PageUserWrapConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(PageUserWrap);

export default PageUserWrapConnect