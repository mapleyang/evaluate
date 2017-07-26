import React, { Component } from 'react'
import {  Row, Col, Icon, Carousel  } from 'antd'
import './index.scss'
import classnames from "classnames";
import LeftMenu from "../leftMenu/index"

let menuList = [{
  label: "工作室介绍",
  value: "company"
},{
  label: "团队介绍",
  value: "team"
}]

class Projects extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      menuTypeFlag: "time"
    }
  }

  componentDidMount () {
  }

  menuTypeFuc (value) {
    this.setState({
      menuTypeFlag: value
    })
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
