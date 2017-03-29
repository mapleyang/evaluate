import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Mark extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      scenes: [],
      sceneVisible: false
    }
  }

  componentDidMount () {
    const { getFieldDecorator } = this.props.form;
    let scenesInit = [];
    let scene = <div><FormItem>
        <span>抽烟的场景1</span>
      </FormItem>
      <FormItem>
        {getFieldDecorator('input1')(
          <Input />
        )}
      </FormItem>
    </div>
    scenesInit.push(scene);
    this.setState({
      scenes: scenesInit
    })
  }

  sliderChange (value) {
    if(value > 0) {
      this.setState({
        sceneVisible: true
      })
    }
    else {
      this.setState({
        sceneVisible: false
      })
    }
  }

  getScenes () {
    let scenes = [];
    if(this.state.sceneVisible) {
      scenes = this.state.scenes;
    }
    return scenes;
  }

  addScenes () {
    const { getFieldDecorator } = this.props.form;
    let scenes = this.state.scenes;
    if(this.state.scenes.length !== 0) {
      let index = this.state.scenes.length + 1;
      let scene = <div>
        <FormItem>
          <span>抽烟的场景{index}</span>
        </FormItem>
        <FormItem>
          {getFieldDecorator('input' + index)(
            <Input />
          )}
        </FormItem>
      </div>
      scenes.push(scene);
      this.setState({
        scenes: scenes
      })
    }
  }

  getAddScene () {
    let add = "";
    if(this.state.sceneVisible) {
      add = <FormItem>
        <a onClick={this.addScenes.bind(this)}>添加新场景</a>
      </FormItem>
    }
    return add;
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="mark">
        <Row>
          <Col span={14}>
            <Form onSubmit={this.handleSubmit} >
              <FormItem>
                <span>今天抽烟的根数</span>
              </FormItem>
              <FormItem>
                {getFieldDecorator('slider')(
                  <Slider onChange={this.sliderChange.bind(this)} marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                )}
              </FormItem>
              {this.getScenes()}
              {this.getAddScene()}
            </Form>
          </Col>
          <Col span={10}>
            <div className="mark-area">
              <div className="mark-button">
                <div className="mark-button-name">打卡</div>
              </div>
              <div className="mark-rule">
                <div>打卡规则</div>
                <div>短信通知监督人</div>
                <div>分享朋友圈</div>
                <div>戒烟日记记录</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Mark = Form.create({
})(Mark);