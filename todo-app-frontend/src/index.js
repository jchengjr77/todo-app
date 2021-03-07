import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// easypeasy store imports
import { StoreProvider } from 'easy-peasy';
import store from './store/store';

// Geist UI import
import { GeistProvider, CssBaseline } from '@geist-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
