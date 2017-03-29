import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select  } from 'antd'
import Highcharts from 'highcharts'
import './index.scss'
import Footer from '../footer/index';
import HighchartsMore from 'highcharts-more'
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
      projectValue: 'a'
    }
  }

  componentDidMount () {
    let chart = new Highcharts.Chart('analysis', {// 图表初始化函数，其中 container 为图表的容器 div   
      data: {
            table: 'freq',
            startRow: 1,
            endRow: 17,
            endColumn: 7
        },
        chart: {
            polar: true,
            type: 'column'
        },
        title: {
            text: '健康分析'
        },
        pane: {
            size: '85%'
        },
        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 100,
            layout: 'vertical'
        },
        xAxis: {
            tickmarkPlacement: 'on'
        },
        yAxis: {
            min: 0,
            endOnTick: false,
            showLastLabel: true,
            title: {
                text: '频率 (%)'
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            },
            reversedStacks: false
        },
        tooltip: {
            valueSuffix: '%'
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false,
                groupPadding: 0,
                pointPlacement: 'on'
            }
        },
        series: [{
            name: '类型1',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                   1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                   27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                   26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                   24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                   22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                   10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: '类型2',
            data: [null, null, null, null, null, null, null, null, null, null,
                   5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                   4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                   15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                   33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                   35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                   21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });
  }

  onChange = (e) => {
    this.setState({
      projectValue: e.target.value,
    });
  }

  createPlanClick () {
    location.hash = "/plan";
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
            <div className="analysis-name"></div>
            <div className="analysis-chartarea" id="analysis"></div>
            <div className="analysis-name">方案推荐</div>
            <div className="analysis-project">
              <div className="analysis-project-items">
                <RadioGroup value={this.state.projectValue} onChange={this.onChange}>
                  <Radio value="a">方案 1（推荐）</Radio> 
                  <Radio value="b">方案 2</Radio>
                  <Radio value="c">方案 3</Radio>
                </RadioGroup>
              </div>
              <div className="analysis-project-create">
                <Button type="primary" ghost onClick={this.createPlanClick.bind(this)}>创建我的戒烟计划>></Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis = Form.create({
})(Analysis);