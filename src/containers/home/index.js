import React, { Component } from 'react'
import {  Row, Col  } from 'antd'
import './index.scss'
import classnames from "classnames";

const menuList = [{
  label: "首页",
  value: "home"
},{
  label: "项目介绍",
  value: "project"
},{
  label: "技术快报",
  value: "skill"
},{
  label: "合作方式",
  value: "cooperate"
},{
  label: "我们",
  value: "about"
}]

class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      currentPage: "home",
    }
  }

  componentDidMout () {

  }

  menuChoose (value) {
    this.setState({
      currentPage: value
    })
  }

  render() {
    return (
      <div className="home">
        <div className="home-main" style={{background: "url('./main.jpg')", backgroundSize: "100% 100%"}}>
          <div className="header">
            <Row className="header-row">
              <Col span={4} className="header-row-logo">
                <img src="./logo.png"/>
              </Col>
              <Col span={20}>
                <div className="header-menu">
                  {menuList.map(el => {
                    return <span className={classnames({
                      "current-page": this.state.currentPage === el.value
                    })} onClick={this.menuChoose.bind(this, el.value)}>{el.label}</span>
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="project">
          <div className="project-content">
            <img src="./project.png"/>
          </div>
        </div>
        <div className="logo-area">
          <img src="./logo-show.png" />
        </div>
        <div className="skill-area">
          <div className="skill-list">
            <Row className="skill-row">
              <Col className="skill-img" span="8">
                <img src="./ec.png" />
              </Col>
              <Col className="skill-img" span="8">
                <img src="./erp.png" />
                </Col>
              <Col className="skill-img" span="8">
                <img src="./wechat.png" />
              </Col>
            </Row>
            <Row className="skill-row">
              <Col className="skill-img" span="8">
                <img src="./data.png"/>
              </Col>
              <Col className="skill-img" span="8">
                <img src="./mobile.png"/>
              </Col>
              <Col className="skill-img" span="8">
                <img src="./operate.png"/>
              </Col>
            </Row>
          </div>
        </div>
        <div className="about-us">

        </div>
      </div>
    );
  }
}

export default Home;
