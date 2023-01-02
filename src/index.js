import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/lib/App';

/**
 * @file root folder of the application
 * @author Jean Marie Vianey RABEMANALINA
 * @see <a href="https://github.com/vianey-jean/modal_rjmv"></a>
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


