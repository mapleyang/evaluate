import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select, Tabs  } from 'antd'
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

class SelfCure extends Component {
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

  startClick () {
    location.hash = "/flow";
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
      <div className="solution selfcure">
        <Row className="cure-main">
          <Col span={14} className="cure-image">
            image
          </Col>
          <Col span={10}>
            <div className="cure-main-desc">
              <div className="cure-main-name">自助戒烟</div>
              <div className="cure-main-content">xxxxxxxxxxx</div>
              <Button className="cure-join" type="primary" onClick={this.startClick.bind(this)}>立即戒烟</Button>
            </div>
          </Col>
        </Row>
        <Row className="cure-detail">
          <div className="cure-detail-content">
            <Tabs defaultActiveKey="2">
              <TabPane tab={<span><Icon type="exception" />治疗说明</span>} key="1">
                Tab 1
              </TabPane>
              <TabPane tab={<span><Icon type="solution" />套餐说明</span>} key="2">
                Tab 2
              </TabPane>
              <TabPane tab={<span><Icon type="medicine-box" />服务说明</span>} key="3">
                Tab 2
              </TabPane>
            </Tabs>
          </div>
        </Row>
      </div>
    );
  }
}

export default SelfCure = Form.create({
})(SelfCure);