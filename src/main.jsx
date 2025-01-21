import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from './redux/store.js';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

