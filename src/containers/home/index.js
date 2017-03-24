import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: "",
      current: 'mail',
    }
  }

  componentDidMount () {
  }

  handleSubmit(e) {
    let _this = this;
    const hide = message.loading('请耐心等待', 0);
    setTimeout(hide, 2000);
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let url = "/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=";
        location.href = url;
        // fetch("/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=")
        // .then(response => response.json())
        // .then(json => { 
        //   console.log(json)
        // })
      }
    })
  }

  handleClick (e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  onChange(a, b, c) {
    console.log(a, b, c);
  }


  render() {
    return (
      <div className="home">
        <Carousel afterChange={this.onChange.bind(this)} autoplay={true}>
          <div><img src="./test01.png" /></div>
          <div><img src="./test02.png" /></div>
          <div><img src="./test03.png" /></div>
        </Carousel>
        <div className="activity-desc">
          <div className="activity-desc-name">活动主题</div>
          <div className="activity-desc-content">activity description</div>
        </div>
        <div className="activity-rules">
          <img src="./contents.png" />
        </div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default Home;