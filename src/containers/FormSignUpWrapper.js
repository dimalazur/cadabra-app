import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import FormField from '../components/FormField'
import {signUpRequest} from '../actions/actions'


class FormSignUpWrapper extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmRef = React.createRef();
  }

  heandler(){
   const { history, onSignUnRequest } = this.props;
    let name = this.nameRef.value;
    let email = this.emailRef.current.value;
    let password = this.passwordRef.current.value;
    let confirm = this.confirmRef.current.value;
   // dispatch({type: 'SIGN_UP_REQUEST', payload: obj });
    onSignUnRequest({
          name,
          email,
          password,
          confirm,
          history
        });

  }

  render() {
 
    return (
      <React.Fragment>
        <header className="header-main">
          <h1 className="page-title" >Sign Up</h1>
        </header>
        <div className="form-holder FormSignUpWrapper">
        	<form action="/" className="form form-signup" onSubmit={this.heandler.bind(this)} >

              <div className="form-field">
                <FormField id='nameSignUp' fieldRef={el => this.nameRef = el} type='text' name='name' placeholder='Name' />
                <FormField id='emailSignUp' fieldRef={this.emailRef} type='email' name='e-mail' placeholder='E-Mail' isError="true" />
                <FormField id='passwordSignUp' fieldRef={this.passwordRef} type='password' name='password' placeholder='Password' />
                <FormField id='confirmPasswordSignUp' fieldRef={this.confirmRef} type='password' name='confirmPassword' placeholder='Confirm' />
              </div>
            
            <div className="btn-row">
              <Link to="/auth/sing-in" className="btn">Sign In</Link>
              
              <button type="submit" className="btn btn-primary" >Sign Up</button>
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
      dispatch(signUpRequest(payload))
    }
  }
}

const FormSignUpWrapperConnect = connect(
  null,
  mapDispatchToProps
)(FormSignUpWrapper);

export default FormSignUpWrapperConnect;