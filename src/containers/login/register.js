import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Checkbox, Select, DatePicker  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const Option = Select.Option;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Register extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    this.props.form.setFieldsValue({sex: "male"})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //注册接口调用
        fetch("/register?userName=" + values.userName + "&password=" + values.password + "&sex=" + values.sex + "&birthDay" + values.birthDay + "&occupation" + values.occupation)
        .then(response => response.json())
        .then(json => { 
          if(json.success) {
            location.hash = "/login";
          }
        })
      }
      else {
        console.log(err);
      }
    });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-content">
          <img src="./quitsmoking.png" />
          <div className="register-area">
             <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('passwordAgain', {
                  rules: [{ required: true, message: 'Please input your Password!' },{
                    validator: this.checkPassword,
                  }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password Again" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('sex')(
                  <RadioGroup>
                    <Radio value="male">male</Radio>
                    <Radio value="fmale">fmale</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('birthDay')(
                  <DatePicker />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('occupation')(
                  <Select placeholder="请选择您的职业">
                    <Option value="jack">IT</Option>
                    <Option value="lucy">医疗</Option>
                    <Option value="disabled">金融</Option>
                    <Option value="Yiminghe">财务</Option>
                    <Option value="other">其他</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Register
                </Button>
              </FormItem>
            </Form>
          </div>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default Register = Form.create({
})(Register);