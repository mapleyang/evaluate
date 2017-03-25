import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select  } from 'antd'
import Echarts from 'echarts'
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

class Analysis extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="analysis">
        <Row>
          <Col span={14}>
            <div className="analysis-name">健康分析</div>
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout}>
                <span>1、一天抽烟的数量</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                {getFieldDecorator('slider')(
                  <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                <span>2、一天抽烟的数量</span>
              </FormItem>
              <FormItem
                {...formItemLayout}
              >
                {getFieldDecorator('radio-group')(
                  <RadioGroup>
                    <Radio value="a">item 1</Radio>
                    <Radio value="b">item 2</Radio>
                    <Radio value="c">item 3</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">Submit</Button>
              </FormItem>
            </Form>
          </Col>
          <Col span={10}>
            <div className="analysis-name">健康得分</div>
            <div className="analysis-chartarea"></div>
            <div className="analysis-name">方案推荐</div>
            <div className="analysis-project"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis = Form.create({
})(Analysis);