import React, { Component } from 'react'
import { Table, Popover, Spin, message, Form, Icon, Input, Button, Row, Col, Radio, Carousel, Slider, Select ,Card ,Tabs, Modal  } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import language from "../../utils/param";
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};


const columns = [{
  title: 'Time',
  dataIndex: 'Time',
  key: 'Time',
}, {
  title: 'Place',
  dataIndex: 'Place',
  key: 'Place',
}, {
  title: 'What I was doing',
  dataIndex: 'sence',
  key: 'sence',
}, {
  title: 'Craving level',
  dataIndex: 'level',
  key: 'level',
},{
  title: 'Feeling ',
  dataIndex: 'Feeling',
  key: 'Feeling',
},{
  title: 'What I did',
  dataIndex: 'solve',
  key: 'solve',
},{
  title: 'effective',
  dataIndex: 'effective',
  key: 'effective',
},{
  title: 'try next',
  dataIndex: 'nextTry',
  key: 'nextTry',
}];

const data = [{
  key: '1',
  Time: 'John Brown',
  Place: 32,
  sence: 'New York No. 1 Lake Park',
  level: 'New York No. 1 Lake Park',
  Feeling: "test",
  solve: "test",
  effective: "test",
  nextTry: "test"
}, {
  key: '2',
  Time: 'Jim Green',
  Place: 42,
  sence: 'London No. 1 Lake Park',
  level: 'London No. 1 Lake Park',
  Feeling: "test",
  solve: "test",
  effective: "test",
  nextTry: "test"
}, {
  key: '3',
  Time: 'Joe Black',
  Place: 32,
  sence: 'Sidney No. 1 Lake Park',
  level: 'Sidney No. 1 Lake Park',
  Feeling: "test",
  solve: "test",
  effective: "test",
  nextTry: "test"
}]; 

class Diary extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      currentDiary: "2017-04-19",
      diaryList: [{
        label: "2017-04-01",
        value: "2017-04-01",
      },{
        label: "2017-04-02",
        value: "2017-04-02",
      },{
        label: "2017-04-03",
        value: "2017-04-03",
      }]
    }
  }

  diaryItemClick (value) {
    this.setState({
      currentDiary: value.value
    })
  }

  getListItem () {
    let item;
    item = this.state.diaryList.map(el => {
      return <div className="record-list-item" onClick={this.diaryItemClick.bind(this, el)}>{el.label}</div>
    })
    return item;
  }

  render() {
    const defaultZH_EN = window.ZH_EN[language.getLanguage()];
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="record">
        <div className="record-area">
          <Row>
            <Col span={6}>
              <div className="record-list">
                <div className="record-list-current">
                  <Icon type="schedule" /><span>{this.state.currentDiary}</span>
                </div>
                <div className="record-list-items">
                  {this.getListItem()}
                </div>
              </div>
            </Col>
            <Col span={18}>
              <div className="record-table">
                <Table columns={columns} dataSource={data} pagination={false} />
                <Button className="record-secen-add">新增</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Diary = Form.create({
})(Diary);