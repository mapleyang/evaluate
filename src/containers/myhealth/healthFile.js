import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, Table, Modal} from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more'
import Tasks from './tasks';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


class HealthFile extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount () {

  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="myplan">
      </div>
    );
  }
}

export default HealthFile = Form.create({
})(HealthFile);