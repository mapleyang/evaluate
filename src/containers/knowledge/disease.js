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

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="disease">
        戒烟与癌症
      </div>
    );
  }
}

export default Disease = Form.create({
})(Disease);