import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Button } from 'antd-mobile';



class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    }
  }

  componentDidMount () {
  }


  startClick () {
    location.hash = "/flow"
  }


  render() {
    return (
      <div className="home" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <Button type="primary" onClick={this.startClick.bind(this)}>开始评测</Button>
      </div>
    );
  }
}

export default Home;
