import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Components/Store/store';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

