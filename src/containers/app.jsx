import React, { Component } from 'react'
import '../styles/index.less'

export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }


  render() {
    return (
      <div className="main">
				<div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
