import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Radio, Steps, DatePicker, Checkbox, Table, Modal} from 'antd'
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


class Trueth extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      truth: []
    }
  }

  getCard () {
    let item;
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let array = this.state.truth.length === 0 ? defaultZH_EN["knowledge"].truth.question : this.state.truth;
    item = array.map((el,index) => {
      return <div className="truth-card">
        <div className="truth-card-desc">
          <span>{el.label}</span>
        </div>
        <div className="truth-card-operate">
          <Row>
            <Col span={8} className={classnames({
              "truth-card-operate-button": true,
              "truth-card-operate-fabel": true,
              "truth-card-operate-selected": el.selected && el.selected === el.value && el.selected === "fabel",
              "truth-card-operate-mistask": el.selected && el.selected !== el.value && el.selected === "fabel"
            })} onClick={this.truthClick.bind(this, el, index, "fabel")}>神话</Col>
            <Col span={8} className={classnames({
              "truth-card-operate-button": true,
              "truth-card-operate-superstition": true,
              "truth-card-operate-selected": el.selected && el.selected === el.value && el.selected === "superstition",
              "truth-card-operate-mistask": el.selected && el.selected !== el.value && el.selected === "superstition"
            })} onClick={this.truthClick.bind(this, el, index, "superstition")}>迷信</Col>
            <Col span={8} className={classnames({
              "truth-card-operate-button": true,
              "truth-card-operate-truth": true,
              "truth-card-operate-selected": el.selected && el.selected === el.value && el.selected === "truth",
              "truth-card-operate-mistask": el.selected && el.selected !== el.value && el.selected === "truth"
            })} onClick={this.truthClick.bind(this, el, index, "truth")}>真相</Col>
          </Row>
        </div>
      </div>
    })

    return item;
  }

  truthClick (value, num, flag) {
    console.log(flag)
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let truth = this.state.truth.length === 0 ? defaultZH_EN["knowledge"].truth.question : this.state.truth;
    let array = truth.map((el,index) => {
      if(index === num && value.label === el.label) {
        el.selected = flag;
      }
      return el
    })
    this.setState({
      truth: array
    })
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="truth">
        <div className="truth-area">
          {this.getCard()}
        </div>
      </div>
    );
  }
}

export default Trueth = Form.create({
})(Trueth);