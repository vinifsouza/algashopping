import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeView from './views/Home.view'

function App () {
  return <div>
    Olá, mundo.
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HomeView />
  </React.StrictMode>,
  document.getElementById('root')
);
