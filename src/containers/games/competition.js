import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select, Tabs, Progress} from 'antd'
import Echarts from 'echarts'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Competition extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="game subject">
        <Progress percent={50} status="active" />
      </div>
    );
  }
}

export default Competition;