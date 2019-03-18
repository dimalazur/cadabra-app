import React, { Component } from 'react';

import { withRouter, Link  } from 'react-router-dom';
import { compose } from 'redux';

import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FormField from '../components/FormField'
import {signUpRequest} from '../actions/actions'
import {authApi} from '../API'
import {authSaga} from '../sagas'


class FormSignUpWrapper extends Component {
  constructor(props) {
    super(props);
    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.confirmRef = React.createRef();
  }

  heandler(){
   const { history, dispatch } = this.props;
    var name = this.nameRef.value,
        email = this.emailRef.current.value,
        password = this.passwordRef.current.value,
        confirm = this.confirmRef.current.value;
        var obj = {
          name,
          email,
          password,
          confirm,
          history
        }
    dispatch({type: 'SIGN_UP_REQUEST', payload: obj })

  }

  render() {
 
    return (
      <React.Fragment>
        <header className="header-main">
          <h1 className="page-title" >Sign Up</h1>
        </header>
        <div className="form-holder FormSignUpWrapper">
        	<form action="/" className="form form-signup" onClick={this.heandler.bind(this)} >

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


/*const mapDispatchToProps = (dispatch) => {
  return {

    onSignUpRequest: () => {
      dispatch(signUpRequest())
    },
   
  }
}*/

export default connect(
  
  
)(FormSignUpWrapper);


/*export default compose(
 
  connect(
    
  ),
  withRouter,
)(FormSignUpWrapper);*/