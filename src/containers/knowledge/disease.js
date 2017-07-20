import React, { Component } from 'react'
import { Popover, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
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

class Disease extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
     
    }
  }

  getDescribe () {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    let item;
    item = defaultZH_EN["knowledge.disease"].disease.describe.map(el => {
      return <div>
        <div className="disease-desc-title">{el.title}</div>
        <div className="disease-desc-content">{
          el.desc.map(sel => {
            return <div className="desc-content-item"><Icon type="caret-right" />{sel.content}</div>
          })
        }</div>
        <div className="disease-desc-img">
          <img src={el.img} />
        </div>
      </div>
    })
    return item;
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="disease">
        <div className="disease-area">
          <div className="disease-title">{defaultZH_EN["knowledge.disease"].disease.title}</div>
          <div className="disease-desc">
            {this.getDescribe()}
          </div>
        </div>
        <div className="disease-bottom"></div>
      </div>
    );
  }
}

export default Disease = Form.create({
})(Disease);