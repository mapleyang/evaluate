import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List  } from 'antd-mobile';
const Item = List.Item;


class Flow extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

  infoFillClick (value) {
    location.hash = "/" + value;
  }

  render() {
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">信息填写</div>
        </div>
        <div className="flow-content tab-content">
          <List className="my-list">
            <Item arrow="horizontal" onClick={this.infoFillClick.bind(this, "policyinfo")}>
              投保信息
            </Item>
            <Item
              arrow="horizontal"
              onClick={this.infoFillClick.bind(this, "healthinfo")}>
              健康告知
            </Item>
            <Item
              arrow="horizontal"
              onClick={this.infoFillClick.bind(this, "userhealthinfo")}>
              健康数据上传
            </Item>
          </List>
        </div>
      </div>
    );
  }
}

export default Flow;