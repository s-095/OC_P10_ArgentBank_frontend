import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
/* import { Provider } from 'react-redux';
import { store } from './app/store.js'; */
/* import { AuthProvider } from "./authContext"; */
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
   
  </StrictMode>
);
