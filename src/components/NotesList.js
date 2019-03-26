import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NotesListItem from './NotesListItem'
import classNames from 'classnames';

class NotesList extends Component {
  
  render() {

  	const { 
      notesList,
      onNotesSetDescription, 
      notesDescriptionSelect, 
      onNotesToggleShowDescription, 
      onNotesToggleDatePicker, 
      onNotesSetArchivedCheckbox 
    } = this.props

    let cnNotesItem;
    let selectId = ( notesDescriptionSelect !== null ) ? notesDescriptionSelect: '';
    return (
      <div className="NotesList">
      	{notesList.map( ( item, index ) => {

          cnNotesItem = classNames('NotesListItem', {
            'note-active': item.id === selectId,
            'note-archived': item.archived,
          });
      		return ( 
      			<NotesListItem 
              cnItem={cnNotesItem}
      				key={item.id}
      				notes={item}  
      				onNotesSetDescription={ onNotesSetDescription }
              onNotesToggleShowDescription={onNotesToggleShowDescription}
              onNotesToggleDatePicker={onNotesToggleDatePicker}
              onNotesSetArchivedCheckbox={onNotesSetArchivedCheckbox}
      			/>
      		)
      	})}
      </div>
    );
  }
}



NotesList.propTypes = {
  notesList: PropTypes.arrayOf( PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
      due_date: PropTypes.string,
      id: PropTypes.number,
  }) ),
  
  notesDescriptionSelect: PropTypes.number,
  onNotesSetDescription: PropTypes.func.isRequired,
  onNotesToggleShowDescription: PropTypes.func.isRequired,
  onNotesToggleDatePicker: PropTypes.func.isRequired,
  onNotesSetArchivedCheckbox: PropTypes.func.isRequired,

};


export default NotesList;
