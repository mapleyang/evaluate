import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List, InputItem, Picker  } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;

const district = [{
  label: "一年",
  value: "1"
},{
  label: "两年",
  value: "2"
},{
  label: "五年",
  value: "5"
},{
  label: "十年",
  value: "10"
},{
  label: "三十年",
  value: "30"
}]


class PolicyInfo extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

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
          <List renderHeader={() => '个人信息'}>
            <InputItem
            {...getFieldProps('applayName')}
            clear>
              投保人姓名
            </InputItem>
            <InputItem
            {...getFieldProps('applayIdCard')}
            clear>
              投保人证件
            </InputItem>
            <InputItem
            {...getFieldProps('benefitName')}
            clear>
              受益人姓名
            </InputItem>
            <InputItem
            {...getFieldProps('benefitIdCard')}
            clear>
              受益人证件
            </InputItem>
          </List>
          <List renderHeader={() => '保险信息'}>
            <Picker data={district} cols={1} {...getFieldProps('policyTime')}>
              <List.Item arrow="horizontal">保险时常</List.Item>
            </Picker>
            <InputItem
            {...getFieldProps('expense', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type="money"
            clear>
              保险费
            </InputItem>
          </List>
        </div>
      </div>
    );
  }
}

export default PolicyInfo = createForm()(PolicyInfo);