import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, browserHistory, Router, Route, IndexRoute } from 'react-router'
import 'antd/dist/antd.less'
import App from "./containers/app"
import Home from "./containers/home/index"
import Login from "./containers/login/index"
import Register from "./containers/login/register"


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
