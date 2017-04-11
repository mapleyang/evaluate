import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs  } from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more';
import Questions from "./questions";
import language from "../../utils/param";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Analysis extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      projectValue: 'a',
      activeKey: "1",
      questions: [],
      analysis: [],
    }
  }

  componentDidMount () {
    this.drawChart();
  }

  drawChart () {
    let chart = new Highcharts.Chart('analysis', {// 图表初始化函数，其中 container 为图表的容器 div   
        chart: {
        type: 'bar'
    },
    title: {
        text: '问卷健康分析'
    },
    xAxis: {
        categories: ['吸烟史', '烟草使用', '家人和环境', '2手烟暴露', '健康状况', '肺癌风险', '慢性疾病']
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '良好',
        data: [1, 0, 0, 0, 0, 0, 0]
    }, {
        name: '轻度',
        data: [0, 0, 0, 0, 0, 0, 0]
    }, {
        name: '重度',
        data: [0, 4, 4, 2, 5, 0, 0]
    }]
    });
  }

  onChange = (e) => {
    this.setState({
      projectValue: e.target.value,
    });
  }

  createPlanClick () {
    if(this.state.projectValue === "d") {
      location.hash = "/plan";
    }
    else {
      location.hash = "/myplan";
    }
  }

  radioChange = (e) => {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let activeKey = parseInt(this.state.activeKey);
    let commons = defaultZH_EN["analysis.questions"].basic.concat(defaultZH_EN["analysis.questions"].smoking);
    let tempQuestions = [];
    console.log(activeKey)
    if((activeKey - 1) === 6) {
      switch(parseInt(e.target.value)) {
        case 6:
          defaultZH_EN["analysis.questions"].smokingTow.forEach(el => {
            commons.push(el)
          })
          break;
        case 10:
          defaultZH_EN["analysis.questions"].smokingThree.forEach(el => {
            commons.push(el)
          })
          break;
        case 1:
          defaultZH_EN["analysis.questions"].smokingFour.forEach(el => {
            commons.push(el)
          })
          break;
        case 0:
          defaultZH_EN["analysis.questions"].smokingOne.forEach(el => {
            commons.push(el)
          })
          break;
      }
      this.setState({
        questions: commons
      })
    }
    let length = commons.length;
    if(this.state.questions.length !== 0) {
      length = this.state.questions.length;
    }
    if(activeKey >= 1 && activeKey < length + 1) {
      this.setState({
        activeKey: (activeKey + 1 ).toString()
      })
    }
    if((activeKey - 1) >= 6) {
      this.getAnalysisValue(activeKey, e.target.value, commons);
    }
  }

  getAnalysisValue (activeKey, value, commons) {
    let array = this.state.questions.length === 0 ? commons : this.state.questions;
    let ele = {
      name: array[activeKey - 1].name,
      value: value
    }
    let analysis = this.state.analysis;
    if((activeKey - 1) === 6) {
      analysis = [];
    }
    analysis.push(ele);
    this.setState({
      analysis: analysis
    })
    this.getAnalysisResult(analysis)
  }


  getAnalysisResult () {

  }

  getQuestions (value) {
    let item = [];
    const { getFieldDecorator } = this.props.form;
    let array = this.state.questions;
    if(this.state.questions.length === 0) {
      array = value.basic.concat(value.smoking)
    }
    else {
    }
    item = array.map((el,index) => {
    // item = this.state.questions.map((el,index) => {
      let key = (index + 1).toString()
      return <TabPane tab="" key={key}>
        <Card title={el.question} style={{ width: 350 }}>
          <RadioGroup onChange={this.radioChange}>
            {el.options.map((sel, sindex) => {
              return <Radio value={sel.value}>{sel.label}</Radio>
            })}
          </RadioGroup>
        </Card>
      </TabPane>
    })
    if(item.length !== 0) {
      console.log(this.state.analysis)
      let finishCard = <TabPane tab="" key={item.length + 1}>
        <Card title="恭喜你完成了你的健康分析，请查看右边你的健康图" style={{ width: 350 }}>
        </Card>
      </TabPane>
      item.push(finishCard)
    }
    return item;
  }

                  // <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
              // {this.getQuestions(Questions)}

  leftClick () {
    let activeKey = parseInt(this.state.activeKey);
    if(activeKey > 1) {
      this.setState({
        activeKey: (activeKey -1 ).toString()
      })
    }
  }

  rightClick () {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let activeKey = parseInt(this.state.activeKey);
    let length = this.state.questions.length;
    if(this.state.questions.length === 0) {
      let commons = defaultZH_EN["analysis.questions"].basic.concat(defaultZH_EN["analysis.questions"].smoking);
      length = commons.length;
    }
    if(activeKey >= 1 && activeKey < length + 1) {
      this.setState({
        activeKey: (activeKey + 1 ).toString()
      })
    }
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="analysis">
        <Row>
          <Col span={14}>
            <div className="analysis-name">健康分析</div>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col span={4} className="analysis-left-arrow">
                  <div className="analysis-left-area" onClick={this.leftClick.bind(this)}>
                    <Icon type="left" />
                  </div>
                </Col>
                <Col span={16}>
                 <Tabs activeKey={this.state.activeKey} >
                  {this.getQuestions(defaultZH_EN["analysis.questions"])}
                </Tabs>
                </Col>
                <Col span={4} className="analysis-right-arrow">
                  <div className="analysis-right-area" onClick={this.rightClick.bind(this)}>
                    <Icon type="right" />
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col span={10}>
            <div className="analysis-name"></div>
            <div className="analysis-chartarea" id="analysis"></div>
            <div className="analysis-name">方案推荐</div>
            <div className="analysis-project">
              <div className="analysis-project-items">
                <RadioGroup value={this.state.projectValue} onChange={this.onChange}>
                  <Radio value="a">方案 1（推荐）</Radio> 
                  <Radio value="b">方案 2</Radio>
                  <Radio value="c">方案 3</Radio>
                  <Radio value="d">自定义方案</Radio>
                </RadioGroup>
              </div>
              <div className="analysis-project-create">
                <Button type="primary" ghost onClick={this.createPlanClick.bind(this)}>创建我的戒烟计划>></Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis = Form.create({
})(Analysis);