import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './App.scss';
import { configureStore } from '@reduxjs/toolkit';
import { gameReducer } from './store/gameSlice.ts';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
