import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShowsState from './context/shows/ShowsState';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ShowsState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
