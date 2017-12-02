import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List, InputItem, ImagePicker  } from 'antd-mobile';
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
          <List renderHeader={() => '投保人个人情况'}>
            <InputItem
            {...getFieldProps('height')}
            clear>
              身高
            </InputItem>
            <InputItem
            {...getFieldProps('weight')}
            clear>
              体重
            </InputItem>
          </List>
          <List renderHeader={() => '个人健康资料'}>
            <ImagePicker
              onChange={this.onChange.bind(this)}
              files={this.state.files}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={this.state.files.length < 11}
            />
          </List>
        </div>
      </div>
    );
  }
}

export default UserHealthInfo = createForm()(UserHealthInfo);