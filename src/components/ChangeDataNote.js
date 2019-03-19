import React from 'react'
//import classNames from 'classnames';
import dateImg from '../images/I.svg';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChangeDataNote = ({ changeDatePicker, disabledDatePicker }) => {

    return (
        <div className="due-date block-sub-header" >
                <div className="icon-holder">
                  <img src={dateImg}/>
                </div>
                <DatePicker
                  onChange={ changeDatePicker }
                  dateFormat="dd.MM.yy"
                  placeholderText="Due Date"
                  disabled={ disabledDatePicker }
                />
              </div>
    );

}


/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default ChangeDataNote;
