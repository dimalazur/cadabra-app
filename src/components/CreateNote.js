import React from 'react'
//import classNames from 'classnames';
import newNotesImg from '../images/New.svg';
import PropTypes from 'prop-types';

const CreateNote = ({ buttonHeandler }) => {

    return (
         <div className="new-notes-holder block-sub-header" >
                <div className="icon-holder">
                  <img src={newNotesImg}/>
                </div>
                <button 
                  type="submit" 
                  className="btn" 
                  onClick={ 
                    buttonHeandler
                  }>New notes</button>
              </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default CreateNote;
