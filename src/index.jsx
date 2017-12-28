import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router, Route, IndexRoute  } from 'react-router'
import App from "./containers/app"
import Home from "./containers/home/"
import Flow from "./containers/component/flow"
import Result from "./containers/component/result"

ReactDOM.render(
  <Router history={hashHistory}>  
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/home" component={Home}></Route>
        <Route path="/flow" component={Flow}></Route>
        <Route path="/result" component={Result}></Route>
      </Route>
    </Router>
, document.getElementById('root'));