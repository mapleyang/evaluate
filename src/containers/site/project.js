import React, { Component } from 'react'
import {  Row, Col, Icon  } from 'antd'
import './index.scss'
import Header from "./header"
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
  content: "软件研发工程师(Web全栈方向)，毕业于东北大学，现就职于搜狐集团，主要负责搜狐邮箱PC端和APP开发与维护工作，同时也负责开发与维护搜狐新闻客户端部分H5页面，部门乃至集团首批Hybird应用的倡行者，全程参与了部门Hybird应用从0到1的过程。"
},{
  img: "zhihua.png",
  name: "张志华",
  content: "后端研发工程师，毕业于东北大学，毕业之后在去哪儿度假事业部负责移动端后台系统搭建，包括app和h5两部分。全程参与度假app模块的构建和优化。现就职于美利金融集团，负责美利二手车app后台系统搭建。"
},{
  img: "zhiye.png",
  name: "廖知业",
  content: "系统工程师，毕业于东北大学，现就职于北京中体骏彩信息技术有限公司，主要负责体育彩票系统的建设及维护。"
},{
  img: "hongkun.png",
  name: "廖红坤",
  content: "DevOps(运维开发)。毕业于东北大学，现就职于广州网易游戏公司。主要工作内容包括游戏运维，MySQL SaaS集群运维和 Web 管理平台后端开发。"
},{
  img: "jianlong.png",
  name: "崔剑龙",
  content: "后端开发工程师，毕业于东北大学。2016年6月入职美团机票，至今一直负责美团机票旗舰店这块的，独自对接航司旗舰店及接口的开发，维护系统的稳定运行。主要使用Python进行平时的开发工作，后期为了更好的接入美团技术平台的基础组件，正向Java平台迁移，做重构的工作。"
},{
  img: "zhanqiang.png",
  name: "杨占强",
  content: "产品经理，毕业于东北大学，曾就职于阿里巴巴集团，主要负责前端产品开发、产品需求管理、产品设计；现专注于医疗健康领域的创新创业，主要负责项目管理、产品规划、市场分析等工作。"
}]

class Project extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMout () {

  }
 

  render() {
    return (
      <div className="project">
        <Header />
      </div>
    );
  }
}

export default Project;
