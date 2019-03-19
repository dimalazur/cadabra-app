import React from 'react'
//import classNames from 'classnames';
import deleteImg from '../images/Can.svg';
import PropTypes from 'prop-types';




const DeleteNote = ({ onDeleteNote }) => {

    return (
        <div className="note-delete block-sub-header" >
                <div className="icon-holder">
                  <img src={deleteImg}/>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-subheader" 
                  onClick={ onDeleteNote }>Delete</button>
              </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default DeleteNote;
