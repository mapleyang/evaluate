import React, { Component } from 'react'
import './index.scss';
import classnames from "classnames";


class Policy extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: [{
        title: "未完成订单",
        list: []
      },{
        title: "已完成订单",
        list: []
      }]
    }
  }

  componentDidMount () {
  }



  render() {
    return (
      <div className="policy">
        <div className="header">
          保单
        </div>
        <div className="policy-list tab-conten">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    );
  }
}

export default Policy;
