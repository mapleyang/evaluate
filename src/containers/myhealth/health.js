import React, { Component } from 'react'
import { Row, Col, Calendar , Timeline, Modal } from 'antd'
import './index.scss'
import Footer from '../footer/index';

class Health extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: "",
      current: 'mail',
    }
  }

  render() {
    return (
      <div className="result myhealth">
        <Row>
          <Col span={18} className="result-content">
            <div></div>
          </Col>
          <Col span={6}>
            <div className="result-list">
              <div className="result-list-name">我的健康列表</div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Health;
