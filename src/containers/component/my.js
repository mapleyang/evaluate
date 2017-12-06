import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Flex, List } from 'antd-mobile';
const Item = List.Item;

class My extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {

  }

  render() {
    return (
      <div className="my">
        <div className="my-area">
          <div className="my-intr">
            <div className="my-intr-title">
              <img src="./img.jpg" />
            </div>
            <Flex className="my-intr-info">
              <Flex.Item>
                <img src="./label.svg"/>
                <span style={{color: "#fff"}}>我的电子凭证</span>
              </Flex.Item>
              <Flex.Item>
                <img src="./lock.svg"/>
                <span style={{color: "#fff"}}>区块链信息</span>
              </Flex.Item>
            </Flex>
          </div>
          <List renderHeader={() => ''}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >My wallet</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              My Cost Ratio
            </Item>
          </List>
          <div className="my-block">
            <div className="my-block-item" style={{borderBottom: "1px #eee solid" }}>

              <span className="my-block-item-name">我的区块密钥</span>
              <span className="my-block-item-value">4234Eafdaafg</span>
            </div>
            <div className="my-block-item">
              <span className="my-block-item-name">我的区块地址</span>
              <span className="my-block-item-value">qefqq1314vasd</span>
            </div>
          </div>
          <div className="my-block">
            <div className="my-block-item" style={{borderBottom: "1px #eee solid" }}>
              <span className="my-block-item-name">我的保单</span>
            </div>
            <div className="my-block-item" style={{borderBottom: "1px #eee solid" }}>
              <span className="my-block-item-name">我的健康数据</span>
            </div>
            <div className="my-block-item">
              <span className="my-block-item-name">数据授权</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default My;
