import React, { Component } from 'react'
import '../styles/index.scss'
import classnames from "classnames";

export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    if(!sessionStorage.getItem("user")) {
      location.hash = "/login"
    }
  }


  render() {
    return (
      <div className="main">
				<div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
