import React, { Component } from 'react'
import './index.less'
import classnames from "classnames";
import AjaxJson from "../../utils/ajaxJson"
import { Icon, List, Button, Flex } from 'antd-mobile';
const Item = List.Item;

const risks = [{
  theme: "运动",
  img: "sport",
  feedback: "您每周的体力活动量低于推荐标准。运动对健康至关重要，希望您能增加体力活动。",
  order: "订阅GH活动资讯"
},{
  theme: "饮食",
  img: "food",
  feedback: "您每周蔬菜和水果摄入量低于推荐标准。多摄入蔬菜水果可以降低疾病风险，建议您能增加蔬菜水果摄入。",
  order: "订阅健康饮食资讯"
},{
  theme: "烟草",
  img: "smoke",
  feedback: "您目前吸烟。吸烟可以引起多种严重疾病。为了您的健康，希望您能考虑戒烟。",
  order: "参加GH戒烟活动"
},{
  theme: "酒精",
  img: "wine",
  feedback: "您没有过度饮酒。过度饮酒可以引起多种严重疾病，希望您能保持不过度饮酒的好习惯。",
  order: "订阅GH活动资讯"
},{
  theme: "睡眠",
  img: "sleep",
  feedback: "您有睡眠障碍。睡眠障碍可以影响生活质量，也可以增加其他疾病风险。希望您及时就医。",
  order: "就医推荐"
},{
  theme: "压力",
  img: "stress",
  feedback: "您的压力管理良好。",
  order: ""
},{
  theme: "抑郁",
  img: "dumps",
  feedback: "您抑郁筛查为阳性。建议去医院检查，以排除抑郁症可能。",
  order: "订阅GH活动资讯"
}]


class Result extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }


  render() {
    return (
      <div className="result">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">张三健康风险评估报告</div>
        </div>
        <div className="result-list">
          <div className="risk">
            <div className="title-area">
              <div className="title-area-content">
                <span>健康风险因素</span>
              </div>
              <div className="title-area-line"></div>
            </div>
            <div className="result-content">
              <Flex className="table-title">
                <Flex.Item style={{textAlign: "center"}}>主题</Flex.Item>
                <Flex.Item style={{flex: 2}}>反馈</Flex.Item>
                <Flex.Item>行动</Flex.Item>
              </Flex>
              {risks.map(el => {
                return <Flex className="table-item">
                  <Flex.Item style={{textAlign: "center"}}>
                    <img style={{width: "4rem"}} src={"./static/" + el.img + ".svg"}/>
                    <div>{el.theme}</div>
                  </Flex.Item>
                  <Flex.Item style={{flex: 2}}>{el.feedback}</Flex.Item>
                  <Flex.Item className="table-item-order">{el.order}</Flex.Item>
                </Flex>
              })}
              <div style={{height: "2rem"}}></div>
            </div>
          </div>
          <div className="risk">
            <div className="title-area">
              <div className="title-area-content">
                <span>体检数据</span>
              </div>
              <div className="title-area-line"></div>
            </div>
            <div className="result-content">
              <Flex className="table-title">
                <Flex.Item style={{textAlign: "center"}}>
                  <img src="./static/body.svg" />
                </Flex.Item>
                <Flex.Item>反馈</Flex.Item>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;