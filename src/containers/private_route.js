import React from 'react';
//import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem('userLogin')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/auth/sing-in' }} />
        //: <Redirect to={{ pathname: '/auth/sing-in', state: { from: props.location } }} />
    )}
  />
);

/*PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};*/

export default PrivateRoute;