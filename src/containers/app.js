import React, { Component } from 'react'
import '../styles/index.scss'
export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      pathname: ""
    }
  }

  getHeader () {
    let header = "";
    let flag = location.hash.indexOf("#/mobile");
    let pathname = "";
    if(flag === 0) {
      pathname = "mobile";
    }
    else {
      header = <Header />
    }
    return header;
  }
				// {this.getHeader()}
  render() {
    return (
      <div className="main">
				<div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
