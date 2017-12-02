import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Icon, List, InputItem, Button  } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;


class Login extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      loginVisble: true
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

  registerClick () {
    location.hash = "/register"
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className="login">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">登录</div>
          <div className="register-content">
            <span onClick={this.registerClick.bind(this)}>我要注册</span>
          </div>
        </div>
        <div className="login-content tab-content">
          <div className="login-form">
            <List renderHeader={() => ''}>
               <InputItem
                {...getFieldProps('userName')}
                placeholder="请输入手机号"
              >
                <div style={{ backgroundImage: 'url(./user.svg)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
              <InputItem
                {...getFieldProps('userName')}
                placeholder="请输入密码"
              >
                <div style={{ backgroundImage: 'url(./password.svg)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
            </List>
            <Button className={classnames({
              "login-button-disabel": this.state.loginVisble
            })} disabled={this.state.loginVisble}>登录</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login = createForm()(Login);