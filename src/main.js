import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import scriptjs from 'scriptjs';
import $ from "jquery"
import { hashHistory, Router, Route, IndexRoute, IndexRedirect  } from 'react-router'
import App from "./containers/app"
import Home from "./containers/home/"
import Flow from "./containers/component/flow"
import HealthInfo from "./containers/component/healthInfo"
import UserHealthInfo from "./containers/component/userHealthInfo"
import BaseInfo from "./containers/component/baseInfo"
import Login from "./containers/component/login"
import Register from "./containers/component/register"
import Logout from "./containers/component/logout"



const scripts = [];

const ready = () => {


  ReactDOM.render(
    <Router history={hashHistory}>  
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/logout" component={Logout}></Route>
        <Route path="/flow" component={Flow}></Route>
        <Route path="/healthinfo" component={HealthInfo}></Route>
        <Route path="/userhealthinfo" component={UserHealthInfo}></Route>
        <Route path="/baseinfo" component={BaseInfo}></Route>
      </Route>
    </Router>,
    document.getElementById('root')
  )
};

if (scripts.length) {
  scriptjs(scripts, ready);
} else {
  ready();
}
