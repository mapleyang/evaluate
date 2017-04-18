import React, { Component } from 'react'
import { Progress, Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, Table, Modal} from 'antd'
import './index.scss'
import classnames from "classnames"
import language from "../../utils/param";
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;
const Step = Steps.Step;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


class Complete extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      truth: []
    }
  }

  getQuestions () {
    let item;
    let array = [{
      label: "100 万 ",
      value: "100"
    },{
      label: "200 万 ",
      value: "200"
    },{
      label: "540 万",
      value: "540"
    },{
      label: "800 万",
      value: "800"
    }];
    item = array.map((el,index) => {
      return <Radio value={el.value}>{el.label}</Radio>
    })
    return item;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="compete">
        <div className="compete-progress">
          <Progress percent={50} status="active" showInfo={false} />
        </div>
        <div className="compete-questions">
          <div>1. 2008 年，全球因烟草所造成的死亡人数达： </div>
          <RadioGroup>
            {this.getQuestions()}
          </RadioGroup>
        </div>
      </div>
    );
  }
}

export default Complete = Form.create({
})(Complete);