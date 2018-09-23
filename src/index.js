import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import countReducer from './store/reducers/counter';
import resReducer from './store/reducers/result';


const reducer = combineReducers({
    count: countReducer,
    res: resReducer
});

const logger = store => {
  return next => {
    return action => {
        console.log('Middleware', action);
        next(action);
    }
  };
};

const store = createStore(reducer);

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
