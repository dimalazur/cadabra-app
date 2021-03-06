import React, { Component } from 'react';
import PropTypes from 'prop-types'

class NotesDescription extends Component {



  render() {
  	const { notesSelect, note } = this.props;
		
	return (
	    <div>

	      {(notesSelect === null) ? (
	        <p>Выберите клиента из списка</p> 
	      ) : (
	      		
        	<div className="notesDescription">
	      		<div className="title-holder">
		            <p className="title">{note.title}</p>
		        </div>
		        <div className="notesDetailWrapper">
		            <p className="address">{note.text}</p>
		        </div>
	        </div>
	      )}
	    </div>
	  );
    
  }
}

NotesDescription.propTypes = {
	note: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,
    }),
    notesSelect: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.number,
	])

};

export default NotesDescription;




