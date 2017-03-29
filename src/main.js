import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, browserHistory, Router, Route, IndexRoute } from 'react-router'
import 'antd/dist/antd.less'
import App from "./containers/app"
import Home from "./containers/home/index"
import Login from "./containers/login/index"
import Register from "./containers/login/register"
import Analysis from "./containers/activities/analysis"
import Plan from "./containers/activities/plan"
import Diary from "./containers/myhealth/diary"
import Mark from "./containers/mark/index"
import SelfCure from "./containers/solution/selfcure"
import MsgCure from "./containers/solution/msgcure"
import Mindcure from "./containers/solution/mindcure"
import MedicineCure from "./containers/solution/medicinecure"
import Flow from "./containers/solution/flow"
//mobile
import MHome from "./containers/MHome/index"  
import MTab from "./containers/MHome/tab" 


import Test from "./containers/home/test"

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
      <Route path="/test" component={Test}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/diary" component={Diary}></Route>
      <Route path="/analysis" component={Analysis}></Route>
      <Route path="/plan" component={Plan}></Route>
      <Route path="/mark" component={Mark}></Route>
      <Route path="/selfcure" component={SelfCure}></Route>
      <Route path="/msgcure" component={MsgCure}></Route>
      <Route path="/mindcure" component={Mindcure}></Route>
      <Route path="/medicinecure" component={MedicineCure}></Route>
      <Route path="/flow" component={Flow}></Route>
      <Route path="/mobilehome" component={MHome}></Route>
      <Route path="/mobiletab" component={MTab}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
)
