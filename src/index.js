import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reduce from './reducers/rootreducer'
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
const store=createStore(reduce);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}><App /></Provider> 
  </React.StrictMode>
);

