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
}];

const data = [{
  key: '1',
  Time: 'John Brown',
  Place: 32,
  sence: 'New York No. 1 Lake Park',
  level: 'New York No. 1 Lake Park',
}, {
  key: '2',
  Time: 'Jim Green',
  Place: 42,
  sence: 'London No. 1 Lake Park',
  level: 'London No. 1 Lake Park',
}, {
  key: '3',
  Time: 'Joe Black',
  Place: 32,
  sence: 'Sidney No. 1 Lake Park',
  level: 'Sidney No. 1 Lake Park',
}]; 

class Diary extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
     
    }
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
                  <Icon type="schedule" /><span>2017-04-19</span>
                </div>
              </div>
            </Col>
            <Col span={18}>
              <div className="record-table">
                <Table columns={columns} dataSource={data} />
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