import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from '../redux/store/store';
import { Provider } from 'react-redux';

import 'normalize.css';
import '../css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('app'),
);
