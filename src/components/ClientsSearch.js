import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClientsSearch extends Component {

  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange = (event) => {
    //const { onClientsSearch } = this.props
    //onClientsSearch(event.target.value);

  };
  submitForm(){
    console.log('submitForm');
  }

  render() {

    return (
      <div className="search">
      	<form action="/" onSubmit={this.submitForm} className="searchForm" >
          <fieldset className="search-fieldSet">
            <div className="searchForm-field">
              <input
                id="searchClient"
                type="text"
                name="search"
                onChange={this.handleChange} 
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}



ClientsSearch.propTypes = {
  onClientsSearch: PropTypes.func,
};

export default ClientsSearch;




