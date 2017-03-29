 import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select, Tabs, Steps } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item; 
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

const stepInfo = [{
	name: "user",
	status: "wait",
},{
	name: "confirm",
	status: "wait",
},{
	name: "pay",
	status: "wait",
},{
	name: "done",
	status: "wait",
}]

class Flow extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
    	step: "user",
    	stepInfo: stepInfo
    }
  }

  componentDidMount () {

  }

  getContent () {
  	let EL = ""
  	switch(this.state.step) {
  		case "user":
  			EL = this.getUserEl();
  			break;
  		case "confirm":
  			EL = this.getConfirmEl();
  			break;
  		case "pay":
  			EL = this.getPayEl();
  			break;
  		case "done":
  			EL = this.getDoneEl();
  			break;
  	}
  	return EL;
  }

  handleSubmit () {}

  stepChange (value, num) {
  	let stepInfo = this.state.stepInfo;
  	this.setState({
  		step: value
  	})
  }

  getUserEl () {
    const { getFieldDecorator } = this.props.form;
  	let item = "";
  	item = <div>
  		<div className="flow-tip"><Icon type="info-circle" />信息提示</div>
	  	<Form onSubmit={this.handleSubmit} className="login-form">
	      <FormItem>
	        {getFieldDecorator('userName', {
	          rules: [{ required: true, message: 'Please input your username!' }],
	        })(
	          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
	        )}
	      </FormItem>
	      <FormItem>
	        {getFieldDecorator('password', {
	          rules: [{ required: true, message: 'Please input your Password!' }],
	        })(
	          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="phone" />
	        )}
	      </FormItem>
	      <FormItem>
	        <Button type="primary" onClick={this.stepChange.bind(this, "confirm", 2)}>
	          下一步
	        </Button>
	      </FormItem>
	    </Form>
	  </div>
  	return item;
  }

  getConfirmEl () {
  	let item = "";
  	item = <div>
  		<div className="flow-tip"><Icon type="info-circle" />信息提示</div>
	  	<Form onSubmit={this.handleSubmit} className="login-form">
	      <FormItem>
	      </FormItem>
	      <FormItem>
	      </FormItem>
	      <FormItem>
	        <Button type="primary" onClick={this.stepChange.bind(this, "user", 1)}>
	          上一步
	        </Button>
	        <Button type="primary" className="next-button" onClick={this.stepChange.bind(this, "pay", 3)}>
	          下一步
	        </Button>
	      </FormItem>
	    </Form>
	  </div>
  	return item;
  }

  getPayEl () {
  	let item = "";
  	item = <div>
  		<div className="flow-tip"><Icon type="info-circle" />信息提示</div>
	  	<Form onSubmit={this.handleSubmit} className="login-form">
	      <FormItem>
	      </FormItem>
	      <FormItem>
	      </FormItem>
	      <FormItem>
	        <Button type="primary" onClick={this.stepChange.bind(this, "confirm", 2)}>
	          上一步
	        </Button>
	        <Button type="primary" className="next-button" onClick={this.stepChange.bind(this, "done", 4)}>
	          下一步
	        </Button>
	      </FormItem>
	    </Form>
	  </div>
  	return item;
  }

  getDoneEl () {
  	let item = "";
  	item = <div>
  		<div className="flow-tip"><Icon type="info-circle" />信息提示</div>
	  	<Form onSubmit={this.handleSubmit} className="login-form">
	      <FormItem>
	      </FormItem>
	      <FormItem>
	      </FormItem>
	      <FormItem>
	        <Button type="primary" onClick={this.stepChange.bind(this, "pay", 3)}>
	          上一步
	        </Button>
	      </FormItem>
	    </Form>
	  </div>
  	return item;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="flow">
      	<div className="flow-mark">
	      	<Steps>
				    <Step status="finish" title="信息填写" icon={<Icon type="user" />} />
				    <Step status="finish" title="订单确认" icon={<Icon type="solution" />} />
				    <Step status="process" title="支付操作" icon={<Icon type="credit-card" />} />
				    <Step status="wait" title="订购完成" icon={<Icon type="smile-o" />} />
				  </Steps>
      	</div>
      	<div className="flow-content">
      		{this.getContent()}
      	</div>
      </div>
    );
  }
}

export default Flow = Form.create({
})(Flow);