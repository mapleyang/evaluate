import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, TimePicker } from 'antd'
import Highcharts from 'highcharts'
import moment from 'moment';
const format = 'HH:mm';
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
  { label: '省钱', value: 'money' },
  { label: '家庭', value: 'family' },
  { label: '爱人', value: 'lover' },
];

class Plan extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      quitValue: [],
      quitContact: [0],
      dailyTask: [0],
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

  getPlanSteps () {
    let item;
    item = this.getFormItems().map(el => {
      return el.element
    })
    return item;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
              <Form onSubmit={this.handleSubmit}>
                {this.getPlanSteps()}
              </Form>
            </div>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </div>
    );
  }

  getFormItems = () => {
    const { getFieldDecorator } = this.props.form;
    let hrClassName = "";
    if(this.state.quitValue.length === 0) {
      hrClassName = "hr-none";
    }
    else {
      hrClassName = "hr-block";
    }
    let items = [{
      name: "startTime",
      element: <FormItem>
        <div className="plan-steps-item plan-step-1">
          <Row>
            <Col span={8}>
              <img src="./beginning.jpg" />
            </Col>
            <Col span={16}>
              <div className="plan-step-1-content">
                <span>我准备好将在</span> 
                {getFieldDecorator('startTime')(
                  <DatePicker placeholder="" />
                )}
                <span>开启我的戒烟之路</span>
              </div>
            </Col>
          </Row>
        </div>
      </FormItem>
    },{
      name: "",
      element: <FormItem>
          <div className="plan-steps-item plan-step-2">
            <div className="plan-step-2-content">
              <span>我为</span>
              <span className="plan-steps-item-input">
                {this.state.quitValue.toString()}
                <hr className={hrClassName}/>
              </span>
              <span>戒烟。</span>
            </div>
            {getFieldDecorator('quitReason')(
              <CheckboxGroup options={quitOptions} onChange={this.onChange.bind(this)} />
            )}
          </div>
      </FormItem>
    },{
      name: "smokingSence",
      element: <FormItem>
        <div className="plan-steps-item plan-step-3">
          <div className="plan-step-3-content">我抽烟的场景</div>
          <div className="plan-step-trigger">
            <Row className="plan-step-trigger-item">
              <Col span={8}>
                <div className="trigger-item-name">心理</div>
                {getFieldDecorator('smokingEmotion')(
                  <CheckboxGroup options={quitOptions} />
                )}
              </Col>                  
              <Col span={8}>
                <div className="trigger-item-name">习惯</div>
                {getFieldDecorator('smokingHabit')(
                  <CheckboxGroup options={quitOptions} />
                )}
              </Col>                  
              <Col span={8}>
                <div className="trigger-item-name">社交</div>
                {getFieldDecorator('smokingGam')(
                  <CheckboxGroup options={quitOptions} />
                )}
              </Col>                  
            </Row>
          </div>
        </div>
      </FormItem>
    },{
      name: "quitContact",
      element: <FormItem>
        <div className="plan-steps-item plan-step-7">
          <div className="plan-step-7-name">一起戒烟</div>
          <div className="plan-step-7-desc">将每天的抽烟打卡记录分享给身边的家庭和朋友，让关心你的人一起了解、帮助你的戒烟。邀请你身边抽烟的伙伴一起加入，减少抽烟的场景和二手烟的危害。</div>
          {this.getQuitContact()}
          <div className="add-phone"><Icon type="plus-circle-o" onClick={this.addPhoneClick.bind(this)} /></div>
        </div>
      </FormItem>
    },{
      name: "dailyTask",
      element: <FormItem>
        <div className="plan-steps-item plan-step-daily">
          <div className="plan-step-daily-name">来用精彩的生活填充你抽烟的场景吧！</div>
          <div className="plan-step-daily-desc">创建每日需要打卡完成的戒烟任务:</div>
          {this.getDailyTask()}
          <div className="add-task"><Icon type="plus-circle-o" onClick={this.addTask.bind(this)} /></div>
        </div>
      </FormItem>
    },{
      name: "planCreate",
      element: <FormItem>
        <div className="plan-steps-item plan-step-8">
          <Button ghost size="large" htmlType="submit">完成我的计划>></Button>
        </div>
      </FormItem>
    }]
    return items;
  }

  addPhoneClick () {
    let quitContact = this.state.quitContact;
    quitContact.push(this.state.quitContact.length)
    this.setState({
      quitContact: quitContact
    })
  }

  getQuitContact () {
    const { getFieldDecorator } = this.props.form;
    let item;
    item = this.state.quitContact.map(el => {
      return <div className="plan-step-share">
      {getFieldDecorator('quitContact' + el)(
        <Input
          placeholder="Enter your firend cellphone"
          prefix={<Icon type="mobile" />}/>   
      )}
    </div>
    })
    return item;
  }

  addTask () {
    let dailyTask = this.state.dailyTask;
    dailyTask.push(this.state.dailyTask.length);
    this.setState({
      dailyTask: dailyTask
    })
  }

  getDailyTask () {
    const { getFieldDecorator } = this.props.form;
    let item;
    item = this.state.dailyTask.map(el => {
      return <div className="plan-step-daily-operate">
        <Row className="plan-step-daily-content">
          <Col span={10} style={{textAlign: "right"}}>
            {getFieldDecorator('dailyTaskTime' + el)(
              <TimePicker format={format} />
            )}
          </Col>
          <Col span={14}>
            {getFieldDecorator('dailyTaskContent' + el)(
              <Input
                placeholder="Enter your task description"
                prefix={<Icon type="schedule" />}/>   
            )}
          </Col>
        </Row>
      </div>
    })
    return item;
  }
}


export default Plan = Form.create({
})(Plan);