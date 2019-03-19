import React from 'react';
import PropTypes from 'prop-types';
import FormField from './FormField';

const FormAddNote = ({handleSubmitForm, fieldTitleRef, fieldTextRef }) => {
  return (

        <form action="/" className="form form-signup" onSubmit={handleSubmitForm}>
          <div className="form-field">
            <FormField 
              fieldRef={fieldTitleRef}
              id='titleNewNote' 
              type='text' 
              name='titleNote' 
              placeholder='Title' 
            />
            <FormField 
              fieldRef={fieldTextRef}
              id='detailsNewNote' 
              type='text'  
              name='detailsNote' 
              placeholder='Details' 
              
            />
            <button type="submit" className="btn btn-primary">Button add</button>
          </div>
        </form>
    )
}


/*
PageDescriptionWrapper.propTypes = {
  onCreateNoteRequest: PropTypes.func.isRequired,
  pageShowDescriptionNotes: PropTypes.bool,
  notesDescriptionSelect: PropTypes.number,
  noteShowItem: PropTypes.object,
  searchTerm:PropTypes.object
};
*/

export default FormAddNote;


