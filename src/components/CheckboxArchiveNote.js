import React from 'react'
//import classNames from 'classnames';
import PropTypes from 'prop-types';

const CheckboxArchiveNote = ({ isCheckedArchiver, toggleChangeArchived }) => {

    return (
         <div className="checkbox-holder block-sub-header" >
                <label className="checkbox">
                  <input type="checkbox" 
                    checked={ isCheckedArchiver }
                    onChange={toggleChangeArchived}
                  />
                  <div className="checkbox__text">Archive</div>
                </label>
              </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default CheckboxArchiveNote;
