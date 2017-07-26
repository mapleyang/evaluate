import React, { Component } from 'react'
import {  Row, Col, Icon, Carousel  } from 'antd'
import './index.scss'
import classnames from "classnames";
import LeftMenu from "../leftMenu/index"

let typeMenu = [{
  label: "时间",
  value: "time"
},{
  label: "分类",
  value: "classify"
}]

let classifyMenu = [{
  label: "java",
  value: "java"
},{
  label: "运维",
  value: "operate"
},{
  label: "数据库",
  value: "database"
},{
  label: "移动端",
  value: "mobile"
}]

let timeMenu = [{
  label: "2017-07-26",
  value: "2017-07-26"
},{
  label: "2017-07-24",
  value: "2017-07-24"
},{
  label: "2017-05-26",
  value: "2017-05-26"
},{
  label: "2017-03-26",
  value: "2017-03-26"
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
              <LeftMenu menuList={typeMenu} type="horizontal" menuTypeFuc={this.menuTypeFuc.bind(this)}/>
              <LeftMenu menuList={this.state.menuTypeFlag === "time" ? timeMenu : classifyMenu} type="vertical" />
            </Col>
            <Col span={20} className="content-area"></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Projects;
