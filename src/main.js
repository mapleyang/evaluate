import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import scriptjs from 'scriptjs';
import { hashHistory, Router, Route, IndexRoute, IndexRedirect  } from 'react-router'
import App from "./containers/app"
import Home from "./containers/home/"
import Flow from "./containers/component/flow"
import HealthInfo from "./containers/component/healthInfo"
import UserHealthInfo from "./containers/component/userHealthInfo"
import PolicyInfo from "./containers/component/policyInfo"


const scripts = [];

const ready = () => {


  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home}></Route>
        <Route path="/flow" component={Flow}></Route>
        <Route path="/healthinfo" component={HealthInfo}></Route>
        <Route path="/usehealthinfo" component={UserHealthInfo}></Route>
        <Route path="/policyinfo" component={PolicyInfo}></Route>
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
