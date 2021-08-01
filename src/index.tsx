import React from 'react';
import ReactDOM from 'react-dom';
import './main_styles/index.sass';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginRegister from './pages/LoginRegister/LoginRegister';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact >
          <LoginRegister loginOrRegister="login" />
        </Route>
        <Route path="/register" exact >
          <LoginRegister loginOrRegister="register" />
        </Route>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
