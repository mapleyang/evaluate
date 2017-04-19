import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select, Modal  } from 'antd'
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
      sceneVisible: false,
      markLabel: "label"
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
    this.getCurrentPlan()
  }

  getCurrentPlan () {
    let array = [];
    if(array.length === 0) {
      Modal.info({
        title: '你还有没有创建计划！！！请前往创建',
        content: "",
        okText: "前往",
        onOk() {
          location.hash = "/analysis";
        },
      });
    }
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

  getMarkLabel () {
    let label = "";
    if(this.state.markLabel === "label") {
      label = <span>打卡</span>;
    }
    else {
      label = <Icon type="check" />
    }
    return label;
  }

  markClick () {
    console.log("ads")
    if(this.state.markLabel === "label") {
      this.setState({
        markLabel: "marked"
      })
    }
  }

  getTasks () {
    let item;
    let array = [{
      name: "基础任务",
      options: {
        label: "",
        value: ""
      }
    },{
      name: "戒烟方法",
      options: {
        label: "",
        value: ""
      }
    },{
      name: "公益任务",
      options: {
        label: "",
        value: ""
      }
    },{
      name: "分享任务",
      options: {
        label: "",
        value: ""
      }
    }]
    item = array.map(el => {
      return <div>
          <Row className="mark-task-line">
          <Col span={4} className="mark-task-title">
            <span className="mark-task-name">{el.name}</span>
          </Col>
          <Col span={20}>
            <div className="mark-task-hr"></div>
          </Col>
        </Row>
        <div className="mark-task-area"></div>
      </div>
    })      
    return item
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="mark">
        <Row>
          <Col span={14}>
            {this.getTasks()}
          </Col>
          <Col span={10}>
            <div className="mark-area">
              <div className="mark-button" onClick={this.markClick.bind(this)}>
                {this.getMarkLabel()}
              </div>
              <div className="mark-rule">
                <div>请查看今日的任务，然后进行打卡。</div>
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


            // <Form onSubmit={this.handleSubmit} >
            //   <FormItem>
            //     <span>今天抽烟的根数</span>
            //   </FormItem>
            //   <FormItem>
            //     {getFieldDecorator('slider')(
            //       <Slider onChange={this.sliderChange.bind(this)} marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
            //     )}
            //   </FormItem>
            //   {this.getScenes()}
            //   {this.getAddScene()}
            // </Form>