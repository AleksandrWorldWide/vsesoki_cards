import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Components/App/App';


ReactDOM.render(
  <React.StrictMode>
    <App title = {'all drinks'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

