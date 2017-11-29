import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import scriptjs from 'scriptjs';
import { hashHistory, Router, Route, IndexRoute, IndexRedirect  } from 'react-router'
import App from "./containers/app"
import Home from "./containers/home/"

const scripts = [];

const ready = () => {


  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <IndexRedirect to="/home" />
        <Route path="/home" component={Home}></Route>
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
