import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './main/mainStyles/reset.css'
import './main/mainStyles/common.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);