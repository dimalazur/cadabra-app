import React, { Component } from 'react'
//import classNames from 'classnames';
import PropTypes from 'prop-types'

class FormField extends Component {


  render() {

    let {id, name, type, placeholder, isError,value, fieldRef} = this.props;
    let onChange = ( this.props.onChange ) ? this.props.onChange : null;

    return (
            <div className="field-holder">
              <input
                className="field"
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={fieldRef}
              />
              { (isError)? <span className="error">Some error here</span> : '' }
            </div>
    );
  }
}



/*ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};*/

export default FormField;




