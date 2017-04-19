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

class User extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      account: [{
        label: "账号",
        value: "1234346456"
      },{
        label: "昵称",
        value: "mapple"
      }],
      user: [{
        label: "姓名",
        value: "xxx"
      },{
        label: "生日",
        value: "2007-12-12"
      },{
        label: "职业",
        value: "医疗"
      }]
    }
  }

  getContent (value) {
    let item;
    let array = [];
    if(value === "account") {
      array = this.state.account;
    }
    else {
      array = this.state.user;
    }
    item = array.map(el => {
      return <div className="user-info-item">
        <span className="user-info-label">{el.label + ":" }</span>
        <span className="user-info-value">{el.value}</span>
      </div>
    })
    return item;
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="user">
        <div className="user-info">
          <div className="user-info-title">账号信息</div>
          <div className="user-info-content">
            {this.getContent("account")}
          </div>
          <div className="user-info-title">
            <span>用户资料</span>
            <span><Icon type="edit" /></span>
          </div>
          <div className="user-info-content">
            {this.getContent("user")}
          </div>
        </div>
      </div>
    );
  }
}

export default User = Form.create({
})(User);