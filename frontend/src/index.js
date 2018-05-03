import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';



const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
