import React, { Component } from 'react'
import { Row, Col, Calendar , Timeline, Modal } from 'antd'
import './index.scss'
import Footer from '../footer/index';
import moment from 'moment';
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
      value: moment('2017-07-22')
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

  eventCheck (value) {
    if(value.listData.length !== 0) {
      Modal.info({
        title: '任务详情',
        content: (
          <div className="events">
            {
              value.listData.map(item =>
                <li key={item.content}>
                  <span className={`event-${item.type}`}>●</span>
                  {item.content}
                </li>
              )
            }
          </div>
        ),
        onOk() {},
      });
    }
    else {
      let content;
      let clickDate = new Date(value.date);
      let currentDate = new Date();
      if(clickDate.getTime() > currentDate.getTime()) {
        content = "当前没有戒烟任务,赶紧去设置这天的戒烟任务。";
      }
      else if(clickDate.getTime() < currentDate.getTime()) {
        content = "当前没有戒烟任务。";
      }
      clickDate.getTime()
      currentDate.getTime()
      Modal.info({
        title: '任务详情',
        content: (
          <div className="events">
            <li>{content}</li>
          </div>
        ),
        onOk() {},
      });
    }
  }

  render() {
    console.log(this.state.value + "haha")
      const getListData = (value) => {
      let dateInfo = {
        listData: [],
        date: value
      };
      console.log(value.date())
      console.log(value.year())
      switch (value.date()) {
        case 8:
          dateInfo.listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'normal', content: 'This is usual event.' },
          ]; break;
        case 10:
          dateInfo.listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'normal', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ]; break;
        case 15:
          dateInfo.listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'normal', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ]; break;
        case 30:
        dateInfo.listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'normal', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]; break;
        default:
      }
      return dateInfo;
    }
    const dateCellRender = (value) => {
      const dateInfo = getListData(value);
      return (
        <ul className="events" onClick={this.eventCheck.bind(this, dateInfo)}>
          {
            dateInfo.listData.map(item =>
              <li key={item.content}>
                <span className={`event-${item.type}`}>●</span>
                {item.content}
              </li>
            )
          }
        </ul>
      );
    }

    const getMonthData = (value) => {
      if (value.month() === 8) {
        return 1394;
      }
    }

    const monthCellRender = (value) => {
      const num = getMonthData(value);
      return num ? <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div> : null;
    }
    return (
      <div className="diary">
        <Row>
          <Col span={18}>
            <div className="calendar-area">
              <Calendar dateCellRender={dateCellRender}  monthCellRender={monthCellRender} />
            </div>
          </Col>
          <Col span={6}>
            <div className="calendar-desc">
              <div className="calendar-desc-title">计划规则说明</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Diary;


        // <div className="diary-content">
        //   <Timeline>
        //     {this.getTimeItem()}
        //   </Timeline>
        // </div>