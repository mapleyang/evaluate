import React, { Component } from 'react'
import '../styles/index.scss'
import classnames from "classnames";

export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      currentPage: "",
    }
  }

  componentDidMount () {
    let pathname = location.hash.substr(2, location.hash.indexOf("?") - 2)
    this.setState({
      currentPage: pathname
    })
  }

  menuChoose (value) {
    this.setState({
      currentPage: value
    })
    location.hash = "/" + value
  }

  render() {
    return (
      <div className="main">
				<div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
