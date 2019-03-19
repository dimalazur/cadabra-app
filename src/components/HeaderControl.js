import React from 'react'
import PropTypes from 'prop-types';

import FilterNote from './FilterNote';
import SearchNote from './SearchNote';
import CreateNote from './CreateNote';
import ChangeDataNote from './ChangeDataNote';
import DeleteNote from './DeleteNote';
import CheckboxArchiveNote from './CheckboxArchiveNote';

const HeaderControl = ({ 
  changeSortSelect, 
  selectValue, 
  fieldSearchRef, 
  heandlerSearchSubmit, 
  heandlerCreateNote,
  heandlerChangeDatePicker,
  isDisabledDatePicker,
  heandlerDeleteNote,
  isCheckedArchiver,
  heandlerToggleArchived
   }) => {

    return (
        <div className="sub-header">
            <div className="wrap">
              <FilterNote changeSortSelect={ changeSortSelect } value={ selectValue } />
              <SearchNote searchSubmit={ heandlerSearchSubmit } fieldRef={ fieldSearchRef } />
              <CreateNote buttonHeandler={ heandlerCreateNote } />
              <ChangeDataNote changeDatePicker={ heandlerChangeDatePicker }  disabledDatePicker={isDisabledDatePicker}/>
              <DeleteNote onDeleteNote={ heandlerDeleteNote } />
              <CheckboxArchiveNote isCheckedArchiver={ isCheckedArchiver } toggleChangeArchived={ heandlerToggleArchived }/>
            </div>
          </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default HeaderControl;
