import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Timeline } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Diary extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: "",
      current: 'mail',
    }
  }

  getTimeItem () {
    let item = "";
    let arr = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,4,3,3,2,1];
    item = arr.map((el, index) => {
      let name = "";
      if(index % 2) {
        console.log(index)
        name = "timeline-left"
      }
      return <Timeline.Item className={name}>
        <p>2015-09-01</p>
        <p>xxxxxxxxxxx</p>
        <p>xxxxxxxxxxx</p>
      </Timeline.Item>
    })
    return item;
  }


  render() {
    return (
      <div className="diary">
        <div className="diary-content">
          <Timeline>
            {this.getTimeItem()}
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Diary;