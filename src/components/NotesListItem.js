import React, { Component } from 'react';
import PropTypes from 'prop-types'


class NotesListItem extends Component {
  
  render() {
  	const {notes ,cnItem, onNotesSetDescription, onNotesToggleShowDescription, onNotesToggleDatePicker, onNotesSetArchivedCheckbox } = this.props;

    return (
    	<div className={cnItem} 
          onClick={() => { 
            onNotesSetDescription(notes); 
            onNotesToggleShowDescription(true); 
            onNotesToggleDatePicker(); 
            onNotesSetArchivedCheckbox(notes.archived);
          } 
          }>    	
			     <div className="note-title">
			        	{notes.title} 
			        </div>
			        <div className="note-description">
                <p className="desc-text">{notes.text}</p>
                <p className="note-date">{notes.due_date}</p>
			        	
			        </div>
		  
    	</div>
    );
  }
}


NotesListItem.propTypes = {

  notes: PropTypes.shape({
    	title: PropTypes.string,
    	text: PropTypes.string,
    	due_date: PropTypes.string,
  }).isRequired,
  cnItem: PropTypes.string,
  onNotesSetDescription: PropTypes.func.isRequired,
  onNotesToggleShowDescription: PropTypes.func.isRequired,
  onNotesToggleDatePicker: PropTypes.func.isRequired,
  onNotesSetArchivedCheckbox: PropTypes.func.isRequired,

};

/*NotesListItem.propTypes = {

  cnItem: PropTypes.string,
  onClientsSetEditableClient: PropTypes.func,
  client: PropTypes.shape({
      address: PropTypes.shape({
        street: PropTypes.string,
        city: PropTypes.string,
        zipCode: PropTypes.string,
        country: PropTypes.string
      }),
      contact: PropTypes.shape({
        email: PropTypes.string,
        phone: PropTypes.string
      }),
      general: PropTypes.shape({
        avatar: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
      }),
      job: PropTypes.shape({
        company: PropTypes.string,
        title: PropTypes.string
      }),

  }),
};*/

export default NotesListItem;
