import React, { Component } from 'react'
import {  Row, Col, Icon, Carousel  } from 'antd'
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

const usList = [{
  img: "shenlei.png",
  name: "申磊",
  position: "软件研发工程师(Web全栈方向)",
  content: "毕业于东北大学，现就职于搜狐集团，主要负责搜狐邮箱PC端和APP开发与维护工作，同时也负责开发与维护搜狐新闻客户端部分H5页面，部门乃至集团首批Hybird应用的倡行者，全程参与了部门Hybird应用从0到1的过程。"
},{
  img: "zhihua.png",
  name: "张志华",
  position: "后端研发工程师",
  content: "毕业于东北大学，毕业之后在去哪儿度假事业部负责移动端后台系统搭建，包括 app 和 h5 两部分。全程参与度假app模块的构建和优化。现就职于美利金融集团，负责美利二手车app后台系统搭建。"
},{
  img: "zhiye.png",
  name: "廖知业",
  position: "系统工程师",
  content: "毕业于东北大学，现就职于北京中体骏彩信息技术有限公司，主要负责体育彩票系统的建设及维护。"
},{
  img: "hongkun.png",
  name: "廖红坤",
  position: "DevOps(运维开发)",
  content: "DevOps(运维开发)，毕业于东北大学，现就职于广州网易游戏公司。主要工作内容包括游戏运维，MySQL SaaS集群运维和 Web 管理平台后端开发。"
},{
  img: "jianlong.png",
  name: "崔剑龙",
  position: "后端开发工程师",
  content: "毕业于东北大学。2016年6月入职美团机票，至今一直负责美团机票旗舰店这块的，独自对接航司旗舰店及接口的开发，维护系统的稳定运行。主要使用Python进行平时的开发工作，后期为了更好的接入美团技术平台的基础组件，正向Java平台迁移，做重构的工作。"
},{
  img: "zhanqiang.png",
  name: "杨占强",
  position: "产品经理",
  content: "毕业于东北大学，曾就职于阿里巴巴集团，主要负责前端产品开发、产品需求管理、产品设计；现专注于医疗健康领域的创新创业，主要负责项目管理、产品规划、市场分析等工作。"
}]

class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      currentPage: "home",
      usIndex: 0
    }
  }

  componentDidMount () {
  }

  menuChoose (value) {
    this.setState({
      currentPage: value
    })
  }

  getUsDetail () {
    let item = "";
    item = usList.map((el, index) => {
      let Ele = "";
      if(index === this.state.usIndex) {
        Ele = <Row className="us-content-row">
          <Col span="10" className="us-content-img">
            <img src={"./" + el.img} />
          </Col>
          <Col span="14" className="us-content-introduce">
            <div className="us-content-detail">
              <span className="us-content-name">{el.name}</span>
              <span>{"，" + el.position}</span>
              <span>{"，" + el.content}</span>
            </div>
          </Col>
        </Row>
      }
      return Ele;
    })
    return item;
  }

  getUsMobileDetail () {
    let item = "";
    item = <Carousel dots={false} autoplay className="us-caousel-detail">
      {usList.map(el => {
        return <div className="us-caousel-row">
          <img src={"./" + el.img} />
          <div>
            <div className="us-content-name">{el.name}</div>
            <div className="us-content-position">{el.position}</div>
          </div>
        </div>
      })}
    </Carousel>
    return item;
  }

  leftClick () {
    if(this.state.usIndex > 0) {
      this.setState({
        usIndex: this.state.usIndex - 1
      })
    }
  }

  rightClick () {
    if(this.state.usIndex < usList.length - 1) {
      this.setState({
        usIndex: this.state.usIndex + 1
      })
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home-main" style={{background: "url('./main.png')", backgroundSize: "100% 100%"}}>
          <div className="header">
            <Row className="header-row">
              <Col span={4} className="header-row-logo">
                <img src="./logo.png"/>
              </Col>
              <Col span={20}>
                <div className="header-menu">
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
              <div className="skill-img" span="8">
                <img src="./ec.png" />
                <div className="skill-name">电商</div>
              </div>
              <div className="skill-img" span="8">
                <img src="./erp.png" />
                <div className="skill-name">erp系统</div>
              </div>
              <div className="skill-img" span="8">
                <img src="./wechat.png" />
                <div className="skill-name">微信公众号/小程序</div>
              </div>
              <div className="skill-img" span="8">
                <img src="./data.png"/>
                <div className="skill-name">大数据</div>
              </div>
              <div className="skill-img" span="8">
                <img src="./mobile.png"/>
                <div className="skill-name">移动端</div>
              </div>
              <div className="skill-img" span="8">
                <img src="./operate.png"/>
                <div className="skill-name">运维</div>
              </div>
            </Row>
          </div>
        </div>
        <div className="about-us">
          <Row className="about-us-area about-us-pc">
            <Col span="6" className={classnames({
              "about-us-arrow": true,
              "about-us-disable": this.state.usIndex === 0
            })}><Icon type="left" onClick={this.leftClick.bind(this)} /></Col>
            <Col className="about-us-content" span="12" style={{background: "url('./us.png')", backgroundSize: "100% 100%"}}>
              {this.getUsDetail()}
            </Col>
            <Col span="6" className={classnames({
              "about-us-arrow": true,
              "about-us-disable": this.state.usIndex === usList.length - 1
            })}><Icon type="right" onClick={this.rightClick.bind(this)} /></Col>
          </Row>
          <Row className="about-us-area about-us-mobile">
            <Col className="about-us-content" span="12" style={{background: "url('./us.png')", backgroundSize: "100% 100%"}}>
              {this.getUsMobileDetail()}
            </Col>
          </Row>
        </div>
        <div className="site-about">
          <div className="site-about-area">
            <Row>
              <Col span="4" className="device-about">
                <div className="stite-about-title">关于我们</div>
                <div className="site-about-content">工作室介绍</div>
                <div className="site-about-content">联系我们</div>
              </Col>
              <Col span="4" className="device-about">
                 <div className="stite-about-title">相关项目</div>
                 <div className="site-about-content">电商</div>
                 <div className="site-about-content">erp系统</div>
                 <div className="site-about-content">微信公众号/小程序</div>
                 <div className="site-about-content">移动端</div>
                 <div className="site-about-content">大数据</div>
                 <div className="site-about-content">运维</div>
              </Col>
              <Col span="4" className="device-about">
                <div className="stite-about-title">优质资源</div>
                <div className="site-about-content">设计</div>
                <div className="site-about-content">运维</div>
                <div className="site-about-content">弹性开发资源</div>
              </Col>
              <Col span="4" className="device-about">
                <div className="stite-about-title"></div>
                <div className="site-about-content">合作电话</div>
                <div className="site-about-content">微信交流群</div>
              </Col>
              <Col className="site-code" span="8">
                <div className="site-code-area">
                  <img src="./code.jpg"/>
                  <div>创工场工作室</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="site-copyright">
          <div className="site-copyright-content">创工场科技有限公司版权所有   © 2017-2017 . All rights reserved.</div>
        </div>
      </div>
    );
  }
}

export default Home;
