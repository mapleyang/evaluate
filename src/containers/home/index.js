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

  getStartClick () {
    location.hash = "/analysis";
    // location.hash = "/test";
  }


  render() {
    return (
      <div className="home">
        <Row className="home-desc">
          <Col span={12} className="home-desc-item">
            <Carousel afterChange={this.onChange.bind(this)} autoplay={true}>
              <div><img src="./test01.png" /></div>
              <div><img src="./test02.png" /></div>
              <div><img src="./test03.png" /></div>
            </Carousel>
          </Col>
          <Col span={12} className="home-desc-item">
            <div className="activity-desc">
              <div className="activity-desc-name">GH戒烟-健康之路</div>
              <div className="activity-desc-content">
                <div><span>&nbsp;&nbsp;&nbsp;是面对所有吸烟或者可能受吸烟影响者的一整套戒烟解决方案。
    根据不同吸烟者的情况，’GH戒烟’能智能地给出个体化戒烟方案，帮助患者成功完成戒烟之旅。此方案建立于国际循证医学的基础上，所有使用或推荐的戒烟方法或技术，均已经大量严格科学研究检验。这些方法和技术已帮助全球，包括中国在内成千上万的吸烟者成功戒烟。</span></div>
              </div>
              <div className="home-start">
                <Button type="primary" ghost size="large" className="home-start-button" onClick={this.getStartClick.bind(this)}>开始健康之路>></Button>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="home-row-fucs">
          <div className="home-fucs-area">
            <div className="home-fucs-block">
              <div className="home-fucs-q"><span>Q</span></div>
            </div>
            <div className="home-fucs-block">
              <div className="home-fucs-u">U</div>
            </div>
            <div className="home-fucs-block">
              <div className="home-fucs-i">I</div>
            </div>
            <div className="home-fucs-block">
              <div className="home-fucs-t">T</div>
            </div>
          </div>
        </Row>
        <div className="home-content"></div>
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default Home;

        // <div className="activity-rules">
        //   <img src="./contents.png" />
        // </div>
