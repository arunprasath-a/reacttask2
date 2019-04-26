import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import login from './login';
import logout from './logout';
import 'bootstrap/dist/css/bootstrap.min.css';



const routing =(
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={login}></Route>
        <Route path ="/logout/:userName" component={logout}></Route>
        </Switch>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
