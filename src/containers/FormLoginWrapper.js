import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import FormField from '../components/FormField'
import { signInRequest } from '../actions/actions'


class FormLoginWrapper extends Component {

  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  heandler(event){
    event.preventDefault();
   const { history, onSignInRequest } = this.props;
    const email = this.emailRef.value;
     const password = this.passwordRef.value;

    //const { dispatch } = this.props;
   // dispatch({type: 'SIGN_IN_REQUEST', payload: obj })
   onSignInRequest({email, password, history});

  }

  render() {
  

    return (
      <React.Fragment>

        <header className="header-main">
          <h1 className="page-title" >Sign In</h1>
        </header>
        <div className="form-holder FormLoginWrapper">
        	<form action="/" className="form form-login"  onSubmit={this.heandler.bind(this)} >
              <div className="searchForm-field">
                <FormField id='emailLogin' fieldRef={el => this.emailRef = el} type='email' name='e-mail' placeholder='E-Mail' />
                <FormField id='passwordLogin' fieldRef={el => this.passwordRef = el} type='password' name='password' placeholder='Password' />
              </div>
            <div className="btn-row">
              <button type="submit" className="btn btn-primary" >Sign In</button>
              <Link to="/auth/sing-up" className="btn">Sign Up</Link>
            </div>
          </form>
        </div>

      </React.Fragment>
    );
  }
}




const mapDispatchToProps = (dispatch) => {
  return {
    onSignInRequest: (payload) => {
      dispatch(signInRequest(payload))
    }
  }
}

const FormLoginWrapperConnect = connect(
  null,
  mapDispatchToProps
)(FormLoginWrapper);

export default FormLoginWrapperConnect;