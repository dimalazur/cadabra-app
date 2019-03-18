import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesDescription from '../components/NotesDescription';

import { getSelectedNote, getNoteShowItem } from '../selectors'
import FormField from '../components/FormField';

/*import { notesAdd } from '../actions'*/

class PageDescriptionWrapper extends Component {
  constructor(props) {
    super(props);

    this.titleRef = React.createRef();
    this.textRef = React.createRef();
  }

  /*handleChange = ({ target: { name, value } }) => {
    console.log('handleChange');
    this.setState({[name]: value});

  };*/


  handleSubmit = (event) => {

    event.preventDefault();

    let date = new Date();
    let day = ( date.getDate() >= 10) ? date.getDate() : '0'+ date.getDate();
    let month = (date.getMonth()+1 >= 10) ? date.getMonth()+1 : '0'+ (date.getMonth()+1);
    let year = date.getFullYear();

    const { onCreateNoteRequest } = this.props;
    var title = this.titleRef.value,
        text = this.textRef.value;
    if( title.trim() && text.trim() ){

      let newNote = {
        'title': title,
        'text': text,
        'archived': false,
        'due_date': year+'-'+month+'-'+day
      }
      onCreateNoteRequest(newNote);
      this.titleRef.value = '';
      this.textRef.value = '';
    }

  };
   


  render() {
   
    const {pageShowDescriptionNotes,notesDescriptionSelect, noteShowItem,state} = this.props;

    /*
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
    */

    return (
        <div className="PageDescriptionWrapper">{
          (pageShowDescriptionNotes) ? 
            /*<NotesDetailWrapper  
              notesDescriptionSelect={notesDescriptionSelect} 
              note={noteShowItem} 
            />*/
            <div className="NotesDescriptionWrapper">
              <NotesDescription  notesDescriptionSelect={notesDescriptionSelect} note={noteShowItem} />
            </div>
          : 
            <form action="/" className="form form-signup" onSubmit={this.handleSubmit}>
              <div className="form-field">
                <FormField 
                  fieldRef={el => this.titleRef = el}
                  id='titleNewNote' 
                  type='text' 
                  name='titleNote' 
                  placeholder='Title' 
                />
                <FormField 
                  fieldRef={el => this.textRef = el}
                  id='detailsNewNote' 
                  type='text'  
                  name='detailsNote' 
                  placeholder='Details' 
                  
                />
                <button type="submit" className="btn btn-primary">Button add</button>
              </div>
            </form>

        }</div>
      )
     
   
  }
}



PageDescriptionWrapper.propTypes = {
  onCreateNoteRequest: PropTypes.func.isRequired,
  pageShowDescriptionNotes: PropTypes.bool,
  notesDescriptionSelect: PropTypes.number,
  noteShowItem: PropTypes.object,
  searchTerm:PropTypes.object
};


export default connect(

)(PageDescriptionWrapper);


