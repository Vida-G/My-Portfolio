import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider, AuthCheck } from 'reactfire'; 
import 'firebase/auth'; 
import { firebaseConfig } from './firebaseConfig' 



ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> 
    <BrowserRouter>
          <Home title={'Home'} />
    </BrowserRouter>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
