import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NotesList from '../components/NotesList'

import { 
          notesSetDescription, 
          notesToggleShowDescription, 
          notesToggleDatePicker, 
          notesSetArchivedCheckbox 
        } from '../actions/actions'



class NotesListWrapper extends Component {
  render() {

    const { 
             
            notesList, 
            notesDescriptionSelect, 
            searchTerm, 
            onNotesSetDescription, 
            onNotesToggleShowDescription, 
            onNotesToggleDatePicker,
            onNotesSetArchivedCheckbox
          } = this.props
    
    let notesListrender = (searchTerm === null) ? notesList : searchTerm;
    
    return (
      <div className="NotesListWrapper" >
      	<NotesList 
         notesList = {notesListrender} 
          notesDescriptionSelect = {notesDescriptionSelect} 
          onNotesSetDescription = {onNotesSetDescription}
          onNotesToggleShowDescription = {onNotesToggleShowDescription}
          onNotesToggleDatePicker = {onNotesToggleDatePicker}
          onNotesSetArchivedCheckbox = {onNotesSetArchivedCheckbox}
        />
      </div>
    );
  }
}

/*
const mapStateToProps = (state) => {
  return {
   notesList: state.notes.notesList,
   notesDescriptionSelect: state.notes.notesDescriptionSelect,
   searchTerm: state.notes.searchTerm,
  }
}*/


/*const mapDispatchToProps = (dispatch) => {
  return {
    onNotesSetDescription: (id) => {
      dispatch(notesSetDescription(id))
    },
    onNotesToggleShowDescription: (payload) => {
      dispatch(notesToggleShowDescription(payload))
    },
    onNotesToggleDatePicker: () => {
      dispatch(notesToggleDatePicker())
    },
    onNotesSetArchivedCheckbox: (payload) => {
      dispatch(notesSetArchivedCheckbox(payload))
    },


  }
}*/



NotesListWrapper.propTypes = {
  notesList: PropTypes.arrayOf( PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      due_date: PropTypes.string,
      id: PropTypes.number,
  }) ),
  onNotesSetDescription: PropTypes.func.isRequired,
  onNotesToggleShowDescription: PropTypes.func.isRequired,
  onNotesToggleDatePicker: PropTypes.func.isRequired,
  onNotesSetArchivedCheckbox: PropTypes.func.isRequired,
  notesDescriptionSelect: PropTypes.number,
  searchTerm:PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ])

};



export default NotesListWrapper;

