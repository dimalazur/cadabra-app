import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import FormLoginWrapper from './containers/FormLoginWrapper'
import FormSignUpWrapper from './containers/FormSignUpWrapper'
import PageUserWrap from './containers/PageUserWrap'
import PrivateRoute from './containers/private_route';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={PageUserWrap} />
            <Route exact path="/auth/sing-up" component={FormSignUpWrapper} />
            <Route exact path="/auth/sing-in" component={FormLoginWrapper} />
          </Switch>
          
          
        </BrowserRouter>
      </div>
    );
  }
}

//export default App;


const AppConnect = connect(
  
)(App);

export default AppConnect



