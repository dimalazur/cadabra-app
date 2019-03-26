import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesDescription from '../components/NotesDescription';

import FormAddNote from '../components/FormAddNote';


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
   
    const {
      pageShowDescriptionNotes, 
      notesDescriptionSelect, 
      noteShowItem 
    } = this.props;

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
            <FormAddNote 
              handleSubmitForm={this.handleSubmit} 
              fieldTitleRef={el => this.titleRef = el} 
              fieldTextRef={el => this.textRef = el} 
            />

        }</div>
      )
     
   
  }
}



PageDescriptionWrapper.propTypes = {
  onCreateNoteRequest: PropTypes.func.isRequired,
  pageShowDescriptionNotes: PropTypes.bool,
  notesDescriptionSelect: PropTypes.number,
  noteShowItem: PropTypes.object
};


export default connect(

)(PageDescriptionWrapper);


