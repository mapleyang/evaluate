import React, { Component } from 'react';
import { Button, Icon } from 'antd-mobile';
import './index.scss'
class Main extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      day: "5",
      status: false
    }
  }

  componentDidMount() {
  }

  getFucs () {
    let item;
    if(!this.state.status) {
      item = <Button type="ghost" size="small">开始打卡</Button>
    }
    else {
      item = <div>test</div>
    }
    return item;
  }

          // <div className="mobile-calendar-day">{this.state.day}<Icon type="calendar" /></div>
  render() {
    return (
      <div className="mobile-main">
        <div className="mobile-bar"></div>
        <div className="mobile-calendar">
          <div></div>
        </div>
        <div className="mobile-mark"></div>
        <div className="mobile-fucs">
          {this.getFucs()}
        </div>
      </div>
    );
  }
}

export default Main;