import React, { Component } from 'react'
import '../styles/index.scss'
import classnames from "classnames";
import {  Row, Col  } from 'antd'

const menuList = [{
  label: "首页",
  value: "home"
},{
  label: "项目介绍",
  value: "projects"
},{
  label: "技术快报",
  value: "blog"
},{
  label: "合作方式",
  value: "service"
},{
  label: "我们",
  value: "about"
}]

export default class App extends Component {

  constructor(props, context) {
    super(props)
    this.state = {
      currentPage: "",
    }
  }

  componentDidMount () {
    let pathname = location.hash.substr(2, location.hash.indexOf("?") - 2)
    this.setState({
      currentPage: pathname
    })
  }

  menuChoose (value) {
    this.setState({
      currentPage: value
    })
    location.hash = "/" + value
  }

  render() {
    return (
      <div className="main">
        <div className={classnames({
          "home-main": true,
          "desc-home-main": this.state.currentPage !== "home"
        })} style={{background: "url('./main.png')", backgroundSize: "100% 100%"}}>
          <div className={classnames({
            header: true,
            "desc-header": this.state.currentPage !== "home"
          })}>
            <Row className="header-row">
              <Col span={4} className="header-row-logo">
                <img src="./logo.png"/>
              </Col>
              <Col span={20}>
                <div className={classnames({
                  "desc-header-menu": this.state.currentPage !== "home",
                  "header-menu": true,
                })}>
                  {menuList.map((el, index) => {
                    return <span className={classnames({
                      "current-page": this.state.currentPage === el.value,
                      "mobile-item": index > 0
                    })} onClick={this.menuChoose.bind(this, el.value)}>{el.label}</span>
                  })}
                </div>
              </Col>
            </Row>
          </div>
        </div>
				<div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
