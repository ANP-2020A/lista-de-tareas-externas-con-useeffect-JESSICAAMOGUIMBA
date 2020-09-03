import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
/*
{
firstName: 'Samy',
    lastName: 'Gómez'
},
{
    firstName: 'Fernando',
        lastName: 'Trujillo'
},
{
    firstName: 'Charlotte',
        lastName: 'Ballagán'
}*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
);
