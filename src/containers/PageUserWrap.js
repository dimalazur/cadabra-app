import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
        notesClearSelected, 
        deleteNoteRequest,
        notesToggleShowDescription, 
        notesSortSelect, 
        notesToggleDatePicker, 
        updateNoteRequest,
        getNotesRequest,
        archivedNoteRequest,
        notesSearch,
        userLogout,
        notesSetDescription,
        notesSetArchivedCheckbox,
        createNoteRequest,
      } from '../actions/actions'
import { 
        getNotesLists, 
        getSelectedNote, 
        getNoteShowItem, 
        getNotesListRender,
        getPageShowDescriptionNotes
      } from '../selectors/';

import NotesListWrapper from './NotesListWrapper'
import PageDescriptionWrapper from './PageDescriptionWrapper'

import HeaderControl from '../components/HeaderControl';
import ListTest from '../components/ListTest';


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
    this.onDeleteNote = this.onDeleteNote.bind(this);

  }

  componentDidMount(){
    const { onGetNotesRequest } = this.props;  
    onGetNotesRequest();
  }

  changeDatePicker(date) {

    const { onUpdateNoteRequest, notesDescriptionSelect } = this.props;
   
    let Day = ( date.getDate() <= 10 ) ? '0'+date.getDate() : date.getDate(),
        Month = ( (date.getMonth()+1) <= 10 ) ? '0'+(date.getMonth()+1) : (date.getMonth()+1),
        Year = String(date.getUTCFullYear());
      var obj = {
        due_date: Year+'-'+Month+'-'+Day,
        id: notesDescriptionSelect.id
      }
    onUpdateNoteRequest( obj );
  }

  changeSortSelect(e) {
    let { onNotesSortSelect } = this.props;
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
    let { 
      onArchivedNoteRequest, 
      isCheckedArchiver, 
      notesDescriptionSelect 
    } = this.props;
    // isCheckedArchiver
    //checked={this.props.state.notes.isCheckedArchiver}
   // let isCheckedArchiver = !isCheckedArchiver;

    let obj = {
      archived: !isCheckedArchiver,
      id: notesDescriptionSelect.id,
    }

    onArchivedNoteRequest(obj);
  }

  searchSubmit(event) {

    event.preventDefault();

   
    const { onNotesSearch } = this.props;
    let search = this.searchRef.current.value;

    if( search.trim() || search === ''){
      onNotesSearch(search.trim());
    }

  };

  userLogoutClick(){

    const  { onUserLogout, history } = this.props;
    console.log('userLogoutClick');
    
    onUserLogout();
    history.push('/auth/sing-in');

  }


  onDeleteNote(){

    const  { 
      onDeleteNoteRequest, 
      onNotesClearSelected, 
      onNotesToggleDatePicker, 
      notesDescriptionSelect 
    } = this.props;

    if (notesDescriptionSelect){
      onDeleteNoteRequest(notesDescriptionSelect); 
      onNotesClearSelected(); 
      onNotesToggleDatePicker(); 
    }

  }

  onDrop(data) {
      console.log(data)
      // => banana 
  }



  render() {
    
    const { 
        //state,
        pageShowDescriptionNotes,
        onNotesClearSelected, 
        onNotesToggleDatePicker, 
        notesDescriptionSelect, 
        onNotesToggleShowDescription,

        onNotesSetArchivedCheckbox,
        onNotesSetDescription,
        notesList,
        //searchTerm,
        onCreateNoteRequest,
        isCheckedArchiver,
        disabledDatePicker,
        noteShowItem,
        
      } = this.props;

      const { tech } = this.state;
    console.log(this.props.notesDescriptionSelect2);

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

          <HeaderControl 
            changeSortSelect={ this.changeSortSelect } 
            selectValue={ tech } 
            heandlerSearchSubmit={ this.searchSubmit } 
            fieldSearchRef={ this.searchRef }
            heandlerCreateNote={ () => { onNotesClearSelected(); onNotesToggleShowDescription(false);} }
            heandlerChangeDatePicker={ this.changeDatePicker }  
            isDisabledDatePicker={disabledDatePicker}
            heandlerDeleteNote={ this.onDeleteNote }
            isCheckedArchiver={ isCheckedArchiver } 
            heandlerToggleArchived={ this.toggleChangeArchived }
          />

   
            {/*<ListTest  /> */}
          <div className="content-page">
            <div className="wrap">
              <div className="sidebar">
                <NotesListWrapper 
                  notesList={notesList} 
                  notesDescriptionSelect={notesDescriptionSelect}
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
                  pageShowDescriptionNotes={pageShowDescriptionNotes}
                  noteShowItem={noteShowItem}
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
    pageShowDescriptionNotes: state.notes.pageShowDescriptionNotes,
    notesList: getNotesListRender(state),
    notesDescriptionSelect: getSelectedNote(state),
    //searchTerm: state.notes.searchTerm,
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