import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Flex } from 'antd-mobile';

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
        <div className="header">
          我的
        </div>
        <div className="my-area tab-content">
          <div className="my-intr">
            <div className="my-intr-title">
              <img src="./img.jpg" />
              <div>
                <div className="my-intr-title-item">mapple</div>
                <div className="my-intr-title-item">1833255****</div>
              </div>
            </div>
            <Flex className="my-intr-info">
              <Flex.Item>
                <img src="./label.svg"/>
                <span>我的电子凭证</span>
              </Flex.Item>
              <Flex.Item>
                <img src="./lock.svg"/>
                <span>区块链信息</span>
              </Flex.Item>
            </Flex>
          </div>
          <div className="my-block">
            <div className="my-block-item" style={{borderBottom: "1px #ddd solid" }}>
              <span className="my-block-item-name">我的区块密钥</span>
              <span className="my-block-item-value">4234Eafdaafg</span>
            </div>
            <div className="my-block-item">
              <span className="my-block-item-name">我的区块地址</span>
              <span className="my-block-item-value">qefqq1314vasd</span>
            </div>
          </div>
          <div className="my-block">
            <div className="my-block-item" style={{borderBottom: "1px #ddd solid" }}>
              <span className="my-block-item-name">我的保单</span>
            </div>
            <div className="my-block-item" style={{borderBottom: "1px #ddd solid" }}>
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
