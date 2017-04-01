import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox } from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more'
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const quitOptions = [
  { label: '健康', value: 'health' },
  { label: '省钱', value: 'monkey' },
  { label: '家庭', value: 'family' },
  { label: '爱人', value: 'lover' },
];

class Plan extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      quitValue: ["健康"]
    }
  }

  componentDidMount () {
  }

  onChange (value) {
    let array = [];
    if(value.length !== 0) {
      value.map(el => {
        quitOptions.forEach(sel => {
          if(el === sel.value) {
            array.push(sel.label)
          }
        })
      })
    }
    this.setState({
      quitValue: array
    })
  }

  onEmotionalChange = (e) => {
    console.log(e.target)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    let hrClassName = "";
    if(this.state.quitValue.length === 0) {
      hrClassName = "hr-none";
    }
    else {
      hrClassName = "hr-block";
    }
    return (
      <div className="plan">
        <div className="plan-title">
          <div className="plan-title-name">开始我的戒烟计划</div>
          <div className="plan-title-desc">boosts your chances of success. Build a quit plan to get ready and find out what to expect along the way. Complete 7 easy steps to get your personalized quit plan.</div>
        </div>
        <Row className="plan-steps">
          <Col span={20}>
            <div className="plan-steps-content">
              <div className="plan-steps-item plan-step-1">
                <Row>
                  <Col span={8}>
                    <img src="./beginning.jpg" />
                  </Col>
                  <Col span={16}>
                    <div className="plan-step-1-content">
                      <span>我准备好将在</span> 
                      <DatePicker placeholder="" />
                      <span>开启我的戒烟之路</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="plan-steps-item plan-step-2">
                <div className="plan-step-2-content">
                  <span>我为</span>
                  <span className="plan-steps-item-input">
                    {this.state.quitValue.toString()}
                    <hr className={hrClassName}/>
                  </span>
                  <span>戒烟。</span>
                </div>
                <CheckboxGroup options={quitOptions} defaultValue={['health']} onChange={this.onChange.bind(this)} />
              </div>
              <div className="plan-steps-item plan-step-3">
                <div className="plan-step-3-content">我抽烟的场景</div>
                <div className="plan-step-trigger">
                  <Row className="plan-step-trigger-item">
                    <Col span={8}>
                      <div className="trigger-item-name">心理</div>
                      <CheckboxGroup options={quitOptions} defaultValue={['health']} onChange={this.onEmotionalChange} />
                    </Col>                  
                    <Col span={8}>
                      <div className="trigger-item-name">习惯</div>
                      <CheckboxGroup options={quitOptions} defaultValue={['health']} onChange={this.onEmotionalChange} />
                    </Col>                  
                    <Col span={8}>
                      <div className="trigger-item-name">社交</div>
                      <CheckboxGroup options={quitOptions} defaultValue={['health']} onChange={this.onEmotionalChange} />
                    </Col>                  
                  </Row>
                </div>
              </div>
              <div className="plan-steps-item"></div>
              <div className="plan-steps-item"></div>
              <div className="plan-steps-item"></div>
              <div className="plan-steps-item plan-step-7">
                <div className="plan-step-7-name">一起戒烟</div>
                <div className="plan-step-7-desc">将每天的抽烟打卡记录分享给身边的家庭和朋友，让关心你的人一起了解、帮助你的戒烟。邀请你身边抽烟的伙伴一起加入，减少抽烟的场景和二手烟的危害。</div>
                <div className="plan-step-share">
                  <Input
                    placeholder="Enter your firend cellphone"
                    prefix={<Icon type="mobile" />}/>   
                </div>
                <div className="add-phone"><Icon type="plus-circle-o" /></div>
              </div>
              <div className="plan-steps-item plan-step-8">
                <Button ghost size="large">完成我的计划>></Button>
              </div>
            </div>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Plan = Form.create({
})(Plan);


            // <Steps direction="vertical">
            //   <Step />
            //   <Step />
            //   <Step /> 
            //   <Step /> 
            //   <Step /> 
            //   <Step /> 
            //   <Step /> 
            // </Steps>