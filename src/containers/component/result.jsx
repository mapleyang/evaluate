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

const tips = [{
  name: "收缩压",
  color: "",
  content: "您的收缩压目前已经达到临界高血压的范围，需要引起关注。"
},{
  name: "舒张压",
  color: "",
  content: "您的舒张压目前已经达到临界高血压的范围，需要引起关注。"
},{
  name: "低密度脂蛋白（LDL）",
  color: "",
  content: "您的低密度脂蛋白超过正常范围，动脉粥样硬化的发生风险增高。"
},{
  name: "糖尿病",
  color: "",
  content: "您的血糖异常（升高）。糖尿病可引起一系列并发症。希望您能积极采取健康的生活方式， 预防糖尿病。"
}]

const predicts = [{
  name: "糖尿病风险评估",
  rule: ["> 20", "15-20", "12-14", "7-11", "< 7"],
  ruleFlag: "分",
  active: [{
    name: "订阅 GH 活动咨询",
    target: ""
  }],
  content: "未来10年糖尿病风险得糖尿病的可能性为中度升高。",
  position: "9rem"
},{
  name: "缺血性心血管发病风险评估",
  rule: ["> 40", "20 -", "10 -", "5 -", "< 5"],
  ruleFlag: "%",
  active: [{
    name: "就医推荐",
    target: ""
  },{
    name: "专家预约",
    target: ""
  }],
  content: "未来10年缺血性心血管事件发病可能性为高度升高，为33%。",
  position: "4rem"
},{
  name: "脑卒中风险评估",
  rule: ["≥ 100", "30-99", "10-29", "1-9", "< 7"],
  ruleFlag: "分",
  active: [{
    name: "订阅 GH 活动咨询",
    target: ""
  },{
    name: "订阅 GH 戒烟活动",
    target: ""
  }],
  content: "脑卒中可能性为轻度，请继续保持健康生活。",
  position: "15rem"
}]

const diseases = [{
  title: "哮喘",
  descript: "哮喘是重要的常见慢性病。希望您能定期就医，让疾病得到良好控制。",
},{
  title: "抑郁症",
  descript: "抑郁症是重要的常见慢性病。希望您能定期就医，让疾病得到良好控制。"
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

  getPredict () {
    let item;
    item = <div className="predict">
      <div className="title-area">
        <div className="title-area-content">
          <span>慢病风险预测</span>
        </div>
        <div className="title-area-line"></div>
      </div>
      {predicts.map(el => {
        return  <div className="predict-list">
        <div className="predict-list-title">{el.name}</div>
        <Flex className="predict-list-rule">
          <Flex.Item style={{flex: 2.5}}>
            <div>
              <span className="rule-position" style={{width: el.position}}></span>
              <img style={{width: "2rem"}} src="./static/position.svg"/></div>
            <div className="rule-flag">
              <span style={{background: "#E82A43"}}></span>
              <span style={{background: "#FE7E46"}}></span>
              <span style={{background: "#FFC44A"}}></span>
              <span style={{background: "#FFFFCC"}}></span>
              <span style={{background: "#79B25B"}}></span>
            </div>
            <div className="rule-flag-name">
              {el.rule.map(item => {
                return <span className="flag-scale">{item}</span>
              })}
              <span>{el.ruleFlag}</span>
            </div>
            <div className="rule-flag-name">
              <span className="flag-scale">很高危</span>
              <span className="flag-scale">高危</span>
              <span className="flag-scale">中危</span>
              <span className="flag-scale">低危</span>
              <span className="flag-scale">极低危</span>
            </div>
            <div className="predict-active">行动：
              {el.active.map(item => {
                return <span>{item.name}</span>
              })}
            </div>
          </Flex.Item>
          <Flex.Item className="predict-content">{el.content}</Flex.Item>
        </Flex>
      </div>
      })}
    </div>
    return item;
  }

  getDisease () {
    let item;
    item = <div className="disease">
      <div className="title-area">
        <div className="title-area-content">
          <span>慢性疾病</span>
        </div>
        <div className="title-area-line"></div>
      </div>
      <div className="disease-area">
        {diseases.map((el, index) => {
          return <div className="disease-list" style={{background: index % 2 ? "#E4838E" : "#C0595C"}}>
            <Flex>
              <Flex.Item className="disease-name">
                <span style={{color: index % 2 ? "#000000" : "#FFFFFF"}}>{el.title}</span>
              </Flex.Item>
              <Flex.Item className="disease-descript" style={{flex: 6}}>
                <span style={{color: index % 2 ? "#000000" : "#FFFFFF"}}>{el.descript}</span>
              </Flex.Item>
            </Flex>
          </div>
        })}
        <div className="disease-active">
         <Flex style={{height: "inherit"}}>
            <Flex.Item className="active-list">
              <span style={{textDecoration: "underline"}}>专家预约</span>
            </Flex.Item>
            <Flex.Item className="active-list">
              <span style={{textDecoration: "underline"}}>就医推荐</span>
            </Flex.Item>
            <Flex.Item className="active-list" style={{flex: 2}}>
              <span style={{textDecoration: "underline"}}>订阅GH活动资讯</span>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    </div>
    return item;
  }


  render() {
    return (
      <div className="result">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">健康风险评估报告</div>
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
              {risks.map((el, index) => {
                return <Flex className="table-item" style={{background: index % 2 ? "#DDDED0" : "#D0D1C3" }}>
                  <Flex.Item style={{textAlign: "center"}}>
                    <img style={{width: "4rem"}} src={"./static/" + el.img + ".svg"}/>
                    <div>{el.theme}</div>
                  </Flex.Item>
                  <Flex.Item style={{flex: 2}}>{el.feedback}</Flex.Item>
                  <Flex.Item className="table-item-order">{el.order}</Flex.Item>
                </Flex>
              })}
            </div>
          </div>
          <div className="physical">
            <div className="title-area">
              <div className="title-area-content">
                <span>体检数据</span>
              </div>
              <div className="title-area-line"></div>
            </div>
            <div className="result-content">
              <Flex className="body-data" style={{background: "url('./static/body.svg')", backgroundRepeat: "no-repeat", backgroundPosition: "2% 60%", backgroundSize: "20rem"}}>
                <Flex.Item className="line-area">
                  <div className="line-list"><span style={{width: "5rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                  <div className="line-list"><span style={{width: "4rem"}}></span></div>
                </Flex.Item>
                <Flex.Item className="line-content" style={{flex: 1.5}}>
                  <div className="line-content-list">
                    身高：170cm
                  </div>
                  <div className="line-content-list">
                    体重：60kg
                  </div>
                  <div className="line-content-list">
                    BMI（体质指数）：22.03
                  </div>
                  <div className="line-content-list">
                    收缩压：120 ≤ X &lt; 130mmHg
                  </div>
                  <div className="line-content-list">
                    舒张压：80 &lt; X &lt; 90mmHg
                  </div>
                  <div className="line-content-list">
                    腰围：&lt; 80cm
                  </div>
                  <div className="line-content-list">
                    总胆固醇TC：指标正常
                  </div>
                  <div className="line-content-list">
                    空腹血糖FBG：3.0 - 6.1mmol/L
                  </div>
                  <div className="line-content-list">
                    空腹血糖TG：≤ 1.53mmol/L
                  </div>
                  <div className="line-content-list">
                    低密度脂蛋白（LDL）：&gt; 3.1 mml/L
                  </div>
                </Flex.Item>
              </Flex>
            </div>
            <div className="descript">
              <div className="descript-title">
                <span>异常指标反馈</span><img src="./static/tip.svg"/>
              </div>
              <Flex className="descript-tip">
                <Flex.Item>
                  <span>指标</span><img src="./static/target.svg"/>
                </Flex.Item>
                <Flex.Item>
                  <span>结果分析</span><img src="./static/analysis.svg" /> 
                </Flex.Item>
              </Flex>
              {tips.map(el => {
                return <Flex className="descript-tip">
                  <Flex.Item>
                    <div className="target-list">
                      <div className="target-name">{el.name}</div>
                      <div className="target-flag">
                      </div>
                    </div>
                  </Flex.Item>
                  <Flex.Item style={{flex: 1.5}}>
                    <div className="target-content">
                      {el.content}
                    </div>
                  </Flex.Item>
                </Flex>
              })}
            </div>
          </div>
          {this.getPredict()}
          {this.getDisease()}
          <div className="warning">
            <div className="warning-area">
              <Flex>
                <Flex.Item className="warning-img">
                  <img src="./static/warning.svg" />
                </Flex.Item>
                <Flex.Item style={{flex: 3}} className="warning-content">
                   注：本报告的结论和建议不能作为临床诊断和治疗依据，仅供参考。任何医疗行为请遵医嘱。
                </Flex.Item>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;