import React, { Component } from 'react'
//import classNames from 'classnames';
import PropTypes from 'prop-types'

const FilterNote = ({changeSortSelect,tech }) => {
  const handleChange = (e) => {
    changeSortSelect(e.target.value);
  }
    return (
          <div className="sort-drop-down block-sub-header"> 
              <select onChange={ handleChange } value={ tech }>
                <option value = "all" >All</option>
                <option value = "Active" >Active</option>
                <option value = "Archived" >Archived</option>
              </select>
            </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default FilterNote;
