import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './tailwind.css'; // import here
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
