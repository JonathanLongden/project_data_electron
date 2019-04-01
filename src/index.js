import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//React Router
import { BrowserRouter } from 'react-router-dom'; //is needed to do prop.history.push('/path')
import Routes from './components/routes/routes';

//https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

//import Index from './components/index';
import * as serviceWorker from './serviceWorker';
//https://material-ui.com/


const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;


const enhancer = composeEnhancers(
      //applyMiddleware(logger, thunk,promiseMiddleware())
      applyMiddleware(logger, thunk)
      // other store enhancers if any
);

//create the redux store
const store = createStore(reducer, enhancer);

ReactDOM.render(<BrowserRouter><Routes store={store}/></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
