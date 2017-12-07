import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { createForm } from 'rc-form';
import AjaxJson from "../../utils/ajaxJson"
import { Icon, List, Button, Picker, InputItem } from 'antd-mobile';
const Item = List.Item;

const district = [{
  label: "一年",
  value: "1",
  price: 10000
},{
  label: "两年",
  value: "2",
  price: 20000
},{
  label: "五年",
  value: "5",
  price: 50000
},{
  label: "十年",
  value: "10",
  price: 100000
},{
  label: "三十年",
  value: "30",
  price: 300000
}]

class Flow extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      price: "",
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

  infoFillClick (value) {
    location.hash = "/" + value;
  }

  timeRangeChange (value) {
    district.forEach(el => {
      if(value[0] === el.value) {
        this.setState({
          price: el.price
        })   
      }
    })
  }

  saveClick () {}


  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">信息填写</div>
        </div>
        <div className="flow-content tab-content">
          <List className="my-list" renderHeader={() => '个人信息'}>
            <Item arrow="horizontal" onClick={this.infoFillClick.bind(this, "baseinfo")}>
              投保信息
            </Item>
            <Item
              arrow="horizontal"
              onClick={this.infoFillClick.bind(this, "healthinfo")}>
              健康告知
            </Item>
            <Item
              arrow="horizontal"
              onClick={this.infoFillClick.bind(this, "userhealthinfo")}>
              健康数据上传
            </Item>
          </List>
          <List renderHeader={() => '保险信息'}>
            <Picker 
              data={district} 
              cols={1} 
              {...getFieldProps('timeRange')}
              onOk={this.timeRangeChange.bind(this)}>
              <List.Item arrow="horizontal">保险时常</List.Item>
            </Picker>
            <Item extra={this.state.price + "元"}>保险费用</Item>
          </List>
          <Button style={{margin: "2rem"}} type="ghost" onClick={this.saveClick.bind(this)}>立即投保</Button>
        </div>
      </div>
    );
  }
}

export default Flow = createForm()(Flow);