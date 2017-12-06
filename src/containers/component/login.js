import React, { Component } from 'react'
import './index.scss'
import AjaxJson from "../../utils/ajaxJson"
import classnames from "classnames";
import { Icon, List, InputItem, Button  } from 'antd-mobile';
import { createForm } from 'rc-form';
import md5 from "md5";
const Item = List.Item;


class Login extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      loginVisble: false
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

  loginClick () {
    const _this = this;
    this.props.form.validateFields((error, value) => {
      if(!error) {
        let url = "/api/common/login";  
        let timestamp = Date.now();
        let data = {
          mobile: value.mobile,
          password: md5(value.password),
          timestamp: timestamp,
          verfiyCode: "",
          sig: md5(value.mobile + value.password + timestamp)
        };
        AjaxJson.getResponse(url, data, "POST").then((value) => {
          if(value.status = 2000) {
            sessionStorage.setItem("user", true);
            location.hash = "/"
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
                type="phone"
                {...getFieldProps('mobile', {
                    rules: [{ required: true, message: '请输入手机号' }],
                  })}
                placeholder="请输入手机号"
              >
                <div style={{ backgroundImage: 'url(./Phone.svg)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
              <InputItem
                type="password"
                {...getFieldProps('password', {
                  rules: [{ required: true, message: '请输入手机号' }],
                })}
                placeholder="请输入密码"
              >
                <div style={{ backgroundImage: 'url(./password.svg)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
            </List>
            <Button type="primary" className={classnames({
              "login-button": true,
              "login-button-disabel": this.state.loginVisble
            })} onClick={this.loginClick.bind(this)}>登录</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login = createForm()(Login);