import React, { Component } from 'react'
import {  Row, Col, Icon, Carousel  } from 'antd'
import './index.scss'
import classnames from "classnames";
import LeftMenu from "../leftMenu/index"

let menuList = [{
  label: "电商平台",
  value: "ec"
},{
  label: "erp系统",
  value: "erp"
},{
  label: "微信公众号/小程序",
  value: ""
},{
  label: "移动端",
  value: "mobile"
},{
  label: "大数据",
  value: "data"
},{
  label: "IT 运维",
  value: "operate"
}]

class Projects extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      usIndex: 0
    }
  }

  componentDidMount () {
  }

  render() {
    return (
      <div className="project-desc">
        <div className="props-content">
          <Row className="desc-row">
            <Col span={4}>
              <LeftMenu menuList={menuList} type="vertical" />
            </Col>
            <Col span={20} className="content-area"></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Projects;
