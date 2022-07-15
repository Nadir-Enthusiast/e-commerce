import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const delay = ms => new Promise(res => setTimeout(res, ms));

const root = ReactDOM.createRoot(document.getElementById('root'));
const launch = async() => {
  await delay(2500);
  root.render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </React.StrictMode>
  );
}
launch();