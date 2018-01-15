import React, { Component } from 'react'
import './index.less'
import classnames from "classnames"
import AjaxJson from "../../utils/ajaxJson"
import ResultCont from "./content"
import { Icon, List, Button, Flex } from 'antd-mobile';
const Item = List.Item;


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
      result: "",
      factor: [],
      tips: [],
      chronic: [],
      diseases: []
    }
  }

  componentWillMount () {
    let result = JSON.parse(sessionStorage.getItem("result"));
    console.log(result)
    this.setState({
      result: result,
      factor: this.getFactor(result.factor),
      tips: this.getTips(result.factor),
      chronic: this.getChronic(result),
      diseases: this.getDiseases(result)
    })
  }
  //慢病
  getDiseases (result) {
    let diseases = [];
    if(result.owerList.length !== 0) {
      result.owerList.forEach(el => {
        if(el === "无慢性疾病") {
          return diseases
        }
        else if(el === "癌症") {
          let item = {
            name: el,
            content: "希望您能定期就医，让疾病得到最佳治疗。"
          }
          diseases.push(item)
        }
        else if(el === "中风（包括短暂性脑缺血发作）") {
          let item = {
            name: el,
            content: "预防再次中风至关重要。希望您能定期就医，降低复发风险。"
          }
          diseases.push(item)
        }
        else if(el === "其他慢性疾病") {
          let item = {
            name: el,
            content: "希望您能定期就医，让疾病得到良好控制。"
          }
          diseases.push(item)
        }
        else {
          let item = {
            name: el,
            content: el + "是重要的常见慢性病。希望您能定期就医，让疾病得到良好控制。"
          }
          diseases.push(item)
        }
      })
    }
    return diseases
  }
  getChronic (result) {
    let chronic = [];
    //慢病-糖尿病
    let diabetes = {
      name: "糖尿病风险评估",
      rule: ["> 20", "15-20", "12-14", "7-11", "< 7"],
      ruleFlag: "分",
    };
    if(result.diabetes < 7) {
      diabetes.content = ResultCont.diabetes[0].content;
      diabetes.activty = ResultCont.diabetes[0].activty;
      diabetes.position = "15rem";
    }
    else if(result.diabetes >= 7 && result.diabetes < 12) {
      diabetes.content = ResultCont.diabetes[1].content;
      diabetes.activty = ResultCont.diabetes[1].activty;
      diabetes.position = "11rem";
    }
    else if(result.diabetes >= 12 && result.diabetes < 15) {
      diabetes.content = ResultCont.diabetes[2].content;
      diabetes.activty = ResultCont.diabetes[2].activty;
      diabetes.position = "8rem";
    }
    else if(result.diabetes >= 15 && result.diabetes < 20) {
      diabetes.content = ResultCont.diabetes[3].content;
      diabetes.activty = ResultCont.diabetes[3].activty;
      diabetes.position = "5.5rem";
    }
    else if(result.diabetes >= 20 && result.diabetes < 100) {
      diabetes.content = ResultCont.diabetes[4].content;
      diabetes.activty = ResultCont.diabetes[4].activty;
      diabetes.position = "4rem";
    }
    else {
      diabetes.content = ResultCont.diabetes[5].content;
      diabetes.activty = ResultCont.diabetes[5].activty;
      diabetes.position = "1rem";
    }
    chronic.push(diabetes);
    //慢病-缺血性心血管
    let angiocarpy = {
      name: "缺血性心血管发病风险评估",
      rule: ["> 40", "20 -", "10 -", "5 -", "< 5"],
      ruleFlag: "%",
    }
    if(result.angiocarpy < 2) {
      angiocarpy.content = ResultCont.angiocarpy[0].content + result.angiocarpy +"%";
      angiocarpy.activty = ResultCont.angiocarpy[0].activty;
      angiocarpy.position = "15.5rem";
    }
    else if(result.angiocarpy >= 2 && result.angiocarpy < 5){
      angiocarpy.content = ResultCont.angiocarpy[1].content + result.angiocarpy +"%";
      angiocarpy.activty = ResultCont.angiocarpy[1].activty;
      angiocarpy.position = "10.5rem";
    }
    else if(result.angiocarpy >= 5 && result.angiocarpy < 10){
      angiocarpy.content = ResultCont.angiocarpy[2].content + result.angiocarpy +"%";
      angiocarpy.activty = ResultCont.angiocarpy[2].activty;
      angiocarpy.position = "8.5rem";
    }
    else if(result.angiocarpy >= 10 && result.angiocarpy < 20) {
      angiocarpy.content = ResultCont.angiocarpy[3].content + result.angiocarpy +"%";
      angiocarpy.activty = ResultCont.angiocarpy[3].activty;
      angiocarpy.position = "5rem";
    }
    else {
      angiocarpy.content = ResultCont.angiocarpy[4].content + result.angiocarpy +"%";
      angiocarpy.activty = ResultCont.angiocarpy[4].activty;
      angiocarpy.position = "1rem";
    }
    chronic.push(angiocarpy)
    //慢病-脑卒中风险评估
    let disorder = {
      name: "脑卒中风险评估",
      rule: ["≥ 100", "30-99", "10-29", "1-9", "< 1"],
      ruleFlag: "分",
    }
    if(result.disorder <= 1) {
      disorder.content = ResultCont.disorder[0].content;
      disorder.activty = ResultCont.disorder[0].activty;
      disorder.position = "15.2rem";
    }
    else if(result.disorder > 1 && result.disorder < 10) {
      disorder.content = ResultCont.disorder[1].content;
      disorder.activty = ResultCont.disorder[1].activty;
      disorder.position = "11.2rem";
    }
    else if(result.disorder >= 10 && result.disorder < 30) {
      disorder.content = ResultCont.disorder[2].content;
      disorder.activty = ResultCont.disorder[2].activty;
      disorder.position = "8.2rem";
    }
    else if(result.disorder >= 30 && result.disorder < 100) {
      disorder.content = ResultCont.disorder[3].content;
      disorder.activty = ResultCont.disorder[3].activty;
      disorder.position = "5.2rem";
    } 
    else {
      disorder.content = ResultCont.disorder[4].content;
      disorder.activty = ResultCont.disorder[4].activty;
      disorder.position = "0.2rem";
    }
    chronic.push(disorder)
    return chronic;
  }
  //风险因素
  getFactor (factor) {
    let factorList = [];
    let sport = {
      theme: "运动"
    };
    if(factor.sport === 0) {
      sport.feedback = ResultCont.factor.sport[0].content;
      sport.order = ResultCont.factor.sport[0].activty;
      sport.img = "sport-normal";
    }
    else if(factor.sport > 0 && factor.sport < 3) {
      sport.feedback = ResultCont.factor.sport[1].content;
      sport.order = ResultCont.factor.sport[1].activty;
      sport.img = "sport";
    }
    else {
      sport.feedback = ResultCont.factor.sport[2].content;
      sport.order = ResultCont.factor.sport[2].activty;
      sport.img = "sport";
    }
    factorList.push(sport);
    //饮食
    let food = {
      theme: "饮食"
    }
    if(factor.food === 0) {
      food.feedback = ResultCont.factor.food[0].content;
      food.order = ResultCont.factor.food[0].activty;
      food.img = "food-normal";
    }
    else if(factor.food > 1 && factor < 3) {
      food.feedback = ResultCont.factor.food[1].content;
      food.order = ResultCont.factor.food[1].activty;
      food.img = "food";
    }
    else {
      food.feedback = ResultCont.factor.food[2].content;
      food.order = ResultCont.factor.food[2].activty;
      food.img = "food";
    }
    factorList.push(food);
    //烟草
    let smoking = {
      theme: "烟草"
    }
    if(factor.smoking === 0) {
      smoking.feedback = ResultCont.factor.smoking[0].content;
      smoking.order = ResultCont.factor.smoking[0].activty;
      smoking.img = "smoking-normal";
    }
    else if(factor.smoking === 1) {
      smoking.feedback = ResultCont.factor.smoking[1].content;
      smoking.order = ResultCont.factor.smoking[1].activty;
      smoking.img = "smoking";
    }
    else {
      smoking.feedback = ResultCont.factor.smoking[2].content;
      smoking.order = ResultCont.factor.smoking[2].activty;
      smoking.img = "smoking";
    }
    factorList.push(smoking);
    //酒精
    let drink = {
      theme: "酒精"
    }
    if(factor.drink === 0) {
      drink.feedback = ResultCont.factor.drink[0].content;
      drink.order = ResultCont.factor.drink[0].activty;
      drink.img = "drink-normal";
    }
    else if(factor.drink === 1) {
      drink.feedback = ResultCont.factor.drink[1].content;
      drink.order = ResultCont.factor.drink[1].activty;
      drink.img = "drink";
    }
    else {
      drink.feedback = ResultCont.factor.drink[2].content;
      drink.order = ResultCont.factor.drink[2].activty;
      drink.img = "drink";
    }
    factorList.push(drink);
    //睡眠
    let sleep = {
      theme: "睡眠"
    }
    if(factor.sleep === 0) {
      sleep.feedback = ResultCont.factor.sleep[0].content;
      sleep.order = ResultCont.factor.sleep[0].activty;
      sleep.img = "sleep-normal";
    }
    else if(factor.sleep === 1) {
      sleep.feedback = ResultCont.factor.sleep[1].content;
      sleep.order = ResultCont.factor.sleep[1].activty;
      sleep.img = "sleep";
    }
    else {
      sleep.feedback = ResultCont.factor.sleep[2].content;
      sleep.order = ResultCont.factor.sleep[2].activty;
      sleep.img = "sleep";
    }
    factorList.push(sleep);
    //安全带和头盔
    let secure = {
      theme: "安全带和头盔"
    }
    if(factor.secure === 0) {
      secure.feedback = ResultCont.factor.secure[0].content;
      secure.order = ResultCont.factor.secure[0].activty;
      secure.img = "secure-normal";
    }
    else if(factor.secure === 1) {
      secure.feedback = ResultCont.factor.secure[1].content;
      secure.order = ResultCont.factor.secure[1].activty;
      secure.img = "secure";
    }
    else {
      secure.feedback = ResultCont.factor.secure[2].content;
      secure.order = ResultCont.factor.secure[2].activty;
      secure.img = "secure";
    }
    factorList.push(secure);
    //压力
    let stress = {
      theme: "压力"
    }
    if(factor.stress === 0) {
      stress.feedback = ResultCont.factor.stress[0].content;
      stress.order = ResultCont.factor.stress[0].activty;
      stress.img = "stress-normal";
    }
    else if(factor.stress === 1) {
      stress.feedback = ResultCont.factor.stress[1].content;
      stress.order = ResultCont.factor.stress[1].activty;
      stress.img = "stress";
    }
    else {
      stress.feedback = ResultCont.factor.stress[2].content;
      stress.order = ResultCont.factor.stress[2].activty;
      stress.img = "stress";
    }
    factorList.push(stress);
    //抑郁
    let dumps = {
      theme: "抑郁"
    }
    if(factor.dumps === 0) {
      dumps.feedback = ResultCont.factor.dumps[0].content;
      dumps.order = ResultCont.factor.dumps[0].activty;
      dumps.img = "dumps-normal";
    }
    else if(factor.dumps > 0 && factor.dumps < 3) {
      dumps.feedback = ResultCont.factor.dumps[1].content;
      dumps.order = ResultCont.factor.dumps[1].activty;
      dumps.img = "dumps";
    }
    else {
      dumps.feedback = ResultCont.factor.dumps[2].content;
      dumps.order = ResultCont.factor.dumps[2].activty;
      dumps.img = "dumps";
    }
    factorList.push(dumps);
    return factorList
  }

  //获取风险因素
  getTips (factor) {
    let tips = [];
    //超重
    let fat = {
      title: "超重/肥胖",
    }
    if(factor.fat === 0) {
      fat.tip = ResultCont.factor.fat.fat[0].content;
    }
    else if(factor.fat === 1 || factor.fat === 2) {
      fat.tip = ResultCont.factor.fat.fat[1].content;
      fat.flag = "FFC44A";
      tips.push(fat);
    }
    else if(factor.fat === 6){
      fat.tip = ResultCont.factor.fat.content;
      fat.flag = "E82A43";
      tips.push(fat);
    }
    else {
      if(factor.BMI === 3) {
        fat.tip = ResultCont.factor.fat.fat[2].content;
        fat.flag = "FE7E46";
        tips.push(fat);
      }
      else if(factor.beltline === 3){
        fat.tip = ResultCont.factor.fat.weight[2].content;
        fat.flag = "FE7E46";
        tips.push(fat);
      }
    }
    //高血压
    let hypertension = {
      title: "高血压",
    }
    if(factor.hypertension === 0) {
      hypertension.tip = ResultCont.factor.hypertension[0].content;
    }
    else if(factor.hypertension > 0 && factor.hypertension < 3) {
      hypertension.tip = ResultCont.factor.hypertension[1].content;
      hypertension.flag = "FE7E46";
      tips.push(hypertension);
    }
    else {
      hypertension.tip = ResultCont.factor.hypertension[2].content;
      hypertension.flag = "E82A43";
      tips.push(hypertension);
    }
    //糖尿病
    let diabetes = {
      title: "糖尿病"
    }
    if(factor.diabetes === 0) {
      diabetes.tip = ResultCont.factor.diabetes[0].content;
    }
    else if(factor.diabetes === 1) {
      diabetes.tip = ResultCont.factor.diabetes[1].content;
      diabetes.flag = "FE7E46";
      tips.push(diabetes);
    }
    else {
      diabetes.tip = ResultCont.factor.diabetes[2].content;
      diabetes.flag = "E82A43";
      tips.push(diabetes);
    }
    //血脂异常
    let dyslipidemia = {
      title: "血脂异常"
    }
    if(factor.dyslipidemia === 0) {
      dyslipidemia.tip = ResultCont.factor.dyslipidemia[0].content;
    }
    else if(factor.dyslipidemia > 0 && factor.dyslipidemia < 3) {
      dyslipidemia.tip = ResultCont.factor.dyslipidemia[1].content;
      dyslipidemia.flag = "FE7E46";
      tips.push(dyslipidemia);
    }
    else {
      dyslipidemia.tip = ResultCont.factor.dyslipidemia[2].content;
      dyslipidemia.flag = "E82A43";
      tips.push(dyslipidemia);
    }
    return tips
  }

  headerBackClick () {
    window.history.back()
  }

  getPredict () {
    let item;
    let array = [];
    item = <div className="predict">
      <div className="title-area">
        <div className="title-area-content">
          <span>慢病风险预测</span>
        </div>
        <div className="title-area-line"></div>
      </div>
      {this.state.chronic.map(el => {
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
              {el.activty.map(item => {
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
    let element;
    if(this.state.diseases.length === 0) {
      element = <div style={{height: "10rem", textAlign: "center"}}>
        <img style={{width: "5rem"}} src="./static/congratulations.svg" />
        <div style={{color: "#009933", paddingTop: "1rem"}}>恭喜您无慢性疾病</div>
      </div>
    }
    else {
      element = <div className="disease-area">
        {this.state.diseases.map((el, index) => {
          return <div className="disease-list" style={{background: index % 2 ? "#E4838E" : "#C0595C"}}>
            <Flex>
              <Flex.Item className="disease-name">
                <span style={{color: index % 2 ? "#000000" : "#FFFFFF"}}>{el.name}</span>
              </Flex.Item>
              <Flex.Item className="disease-descript" style={{flex: 6}}>
                <span style={{color: index % 2 ? "#000000" : "#FFFFFF"}}>{el.content}</span>
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
    }
    let item;
    item = <div className="disease">
      <div className="title-area">
        <div className="title-area-content">
          <span>慢性疾病</span>
        </div>
        <div className="title-area-line"></div>
      </div>
      {element}
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
              {this.state.factor.map((el, index) => {
                return <Flex className="table-item" style={{background: index % 2 ? "#DDDED0" : "#D0D1C3" }}>
                  <Flex.Item style={{textAlign: "center"}}>
                    <img style={{width: "4rem"}} src={"./static/" + el.img + ".svg"}/>
                    <div>{el.theme}</div>
                  </Flex.Item>
                  <Flex.Item style={{flex: 2}}>{el.feedback}</Flex.Item>
                  <Flex.Item className="table-item-order">{el.order.toString()}</Flex.Item>
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
                <Flex.Item className="line-content" style={{flex: 1.6}}>
                  {this.state.result.bodyData.map(el => {
                    return <div className="line-content-list">
                      {el.label + "：" + el.value}
                    </div>
                  })}
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
                <Flex.Item style={{flex: 1.5}}>
                  <span>结果分析</span><img src="./static/analysis.svg" /> 
                </Flex.Item>
              </Flex>
              {this.state.tips.map(el => {
                return <Flex className="descript-tip">
                  <Flex.Item>
                    <div className="target-list">
                      <div className="target-name">{el.title}</div>
                      <div className="target-flag" style={{background: "#" + el.flag}}>
                      </div>
                    </div>
                  </Flex.Item>
                  <Flex.Item style={{flex: 1.5}}>
                    <div className="target-content">
                      {el.tip}
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