import React, { Component } from 'react'
import './index.less'
import classnames from "classnames";
import { Button } from 'antd-mobile';


class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: true,
    }
  }

  componentDidMount () {
  }


  startClick () {
    location.hash = "/flow"
  }


  render() {
    return (
      <div className="home" style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <img src="./static/evaluate.jpg" />
        <div className="button-area">
          <Button className="start-button" type="primary" onClick={this.startClick.bind(this)}>开始评测</Button>
        </div>
        <div className="tip-content">
          <p>欢迎您参加健康风险评估! 完成问卷约需10分钟。提交问卷后系统会自动生成您的健康风险报告。</p>
          <p>完整准确的信息将直接影响评估结果。填写前，请将体检报告准备在手。您所提供的健康信息属于您的个人隐私，将仅用于您的健康评估，及去身份的团体分析之用。任何第三方，包括您的雇主和保险公司不会获取您的个人数据。</p>
        </div>
      </div>
    );
  }
}

export default Home;
