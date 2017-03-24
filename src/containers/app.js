import React, { Component } from 'react'
import Header from './header/index';
import Footer from './Footer/index';
import '../styles/index.scss'
export default class App extends Component {
	render() {
		return (
			<div className="main">
				<Header />
				<div>{this.props.children}</div>
      </div>
    );
  }
}
        // <div className="footer"><Footer /></div>