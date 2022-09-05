import React from 'react';
import ReactDOM from 'react-dom';
import InitApp from './Init'
// import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <InitApp />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
