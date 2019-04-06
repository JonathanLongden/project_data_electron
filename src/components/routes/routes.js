import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from '../index';
import Update from '../beer/update/index';



const Routes = ({ store}) => (
  	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact={true} path="/" render={ ({ match, history }) => <Index match={ match } history={ history }/>} />
				<Route exact={true} path="/:id" render={ ({ match, history }) => <Update match={ match } history={ history } />} /> 		
			</Switch>
    	</Router>
  	</Provider>
)
Routes.propTypes = {
  store: PropTypes.object.isRequired
}
export default Routes;
