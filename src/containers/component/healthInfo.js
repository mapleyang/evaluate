import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List ,Checkbox, TextareaItem } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;


class HealthInfo extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: [{
        name: "angiocarpy",
        label: "心血管系统疾病",
        value: "1",
      }, {
        name: "breathing",
        label: "呼吸系统疾病",
        value: "2"
      }, {
        name: "digestive",
        label: "消化系统疾病",
        value: "3"
      }, {
        name: "disability",
        label: "残疾或功能障碍",
        value: "4"
      }],
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

   onChange = (val) => {
    console.log(val);
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">保险健康告知</div>
        </div>
        <div className="flow-content tab-content">
          <List renderHeader={() => '是否曾患有或接受治疗过下列疾病？'}>
            {this.state.data.map(el => (
              <CheckboxItem 
              {...getFieldProps(el.name)}
              onChange={() => this.onChange(el.value)}>
                {el.label}
              </CheckboxItem>
            ))}
          </List>
          <List renderHeader={() => '是否有其他疾病？'}>
            <TextareaItem
              {...getFieldProps('count', {
                initialValue: '请描述您的患病情况...',
              })}
              rows={5}
              count={100}
            />
          </List>
          <AgreeItem className="agree-content" data-seed="statementId">
            声明：本人承诺完全知晓本人的健康状况，确认健康告知内容属实。如有隐瞒或不实告知，保险公司有权解除保险合同，对于合同解除前发生的任何事故，保险公司不承担任何责任，并不退还保险费。
          </AgreeItem>
        </div>
      </div>
    );
  }
}

export default HealthInfo = createForm()(HealthInfo);