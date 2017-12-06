import React, { Component } from 'react'
import './index.scss'
import AjaxJson from "../../utils/ajaxJson"
import classnames from "classnames";
import { Flex } from 'antd-mobile';


class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      insurance: []
    }
  }



  componentWillMount () {
    this.getProductsList();
  }

  componentDidMount () {
    
  }

  insuranceSelect () {
    location.hash = "/flow";
  }

  //获取产品列表
  getProductsList () {
    const _this = this;
    let url = "/api/products";
    let data = {}
    AjaxJson.getResponse(url, data, "GET").then((value) => {
      if(value.status = 2000) {
        _this.setState({
          insurance: value.data
        })
      }
    }, (value) => {})
  }



  render() {
    return (
      <div className="home">
        <div className="header">
          保险产品
        </div>
        <div className="pro-list tab-content">
          <img style={{width: "100%", height: "15rem"}}src="./beginning.jpg"/>
          <div className="item-title">
            保险推荐
          </div>
          <div className="insurance-list">
            {this.state.insurance.map((el, index) => {
              return <div onClick={this.insuranceSelect.bind(this, el)} key={index}>
                <Flex className="insurance-info">
                  <Flex.Item className="insurance-img"><img src={"./insurance" + index + ".jpg"} /></Flex.Item>
                  <Flex.Item className="insurance-intr">
                    <div className="insurance-title">{el.title}</div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">承保年龄</span>
                      <span>{el.age}</span>
                    </div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">保障期限</span>
                      <span>{el.time}</span>
                    </div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">主要保障</span>
                      <span>{el.content}</span>
                    </div>
                  </Flex.Item>
                </Flex>
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;