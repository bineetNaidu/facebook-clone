import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './customs/contexts/state.context';
import reducer, { initialState } from './customs/contexts/reducer';

// STATICS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
