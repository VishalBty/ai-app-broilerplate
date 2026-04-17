import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';

// Framework7 core
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import 'framework7/css/bundle';

Framework7.use(Framework7React);

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
