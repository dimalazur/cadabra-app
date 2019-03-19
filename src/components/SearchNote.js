import React from 'react'
//import classNames from 'classnames';
import PropTypes from 'prop-types'

const SearchNote = ({searchSubmit,fieldRef }) => {

    return (
          <div className="search-holder block-sub-header">
            <div className="search-block">
              <button className="search-btn" onSubmit={ searchSubmit } ></button>
              <input type="text" ref={ fieldRef } onChange={ searchSubmit } name="search" className="search-field" placeholder="Search" />
            </div>
          </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default SearchNote;
