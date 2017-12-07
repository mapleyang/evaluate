import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import AjaxJson from "../../utils/ajaxJson"
import { Icon, List, InputItem, ImagePicker, Button  } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;


class UserHealthInfo extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      files: []
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }

  saveClick () {
    const _this = this;
    this.props.form.validateFields((error, value) => {
      if(!error) {
        let url = "/api/policies";  
        let data = {};
        AjaxJson.getResponse(url, data, "POST").then((value) => {
          if(value.status = 2000) {
            window.history.back()
          }
        }, (value) => {})
      }
      else {    //输入提示

      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">健康情况填写</div>
        </div>
        <div className="flow-content tab-content">
          <List renderHeader={() => '个人健康情况'}>
            <InputItem
            {...getFieldProps('weightExponent')}
            clear>
              体重指数
            </InputItem>
            <InputItem
            {...getFieldProps('bloodpressureExponent')}
            clear>
              血压
            </InputItem>
            <InputItem
            {...getFieldProps('pulsepressureExponent')}
            clear>
              脉压
            </InputItem>
            <InputItem
            {...getFieldProps('plateletCount')}
            clear>
              血小板数
            </InputItem>
            <InputItem
            {...getFieldProps('serum')}
            clear>
              甘油三酯
            </InputItem>
          </List>
          <List renderHeader={() => '个人健康资料'}>
            <ImagePicker
              className="img-picker"
              onChange={this.onChange.bind(this)}
              files={this.state.files}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={this.state.files.length < 11}
            />
          </List>
          <Button style={{margin: "2rem"}} type="ghost" onClick={this.saveClick.bind(this)}>保存</Button>
        </div>
      </div>
    );
  }
}

export default UserHealthInfo = createForm()(UserHealthInfo);