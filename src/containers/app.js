import React, { Component } from 'react'
import Header from './header/index';
import Footer from './Footer/index';
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
	render() {
		return (
			<div className="main">
				{this.getHeader()}
				<div>{this.props.children}</div>
      </div>
    );
  }
}
        // <div className="footer"><Footer /></div>