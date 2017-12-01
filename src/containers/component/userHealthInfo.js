import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List  } from 'antd-mobile';
const Item = List.Item;


class UserHealthInfo extends Component {
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
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              投保信息
            </Item>
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
            >
              健康告知
            </Item>
            <Item
              arrow="horizontal"
              multipleLine
              onClick={() => {}}
              platform="android"
            >
              健康数据上传
            </Item>
          </List>
        </div>
      </div>
    );
  }
}

export default UserHealthInfo;