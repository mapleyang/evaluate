import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank, Grid, TabBar, Icon } from 'antd-mobile';
import './index.scss'

class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      dselectedTab: 'redTab',
      hidden: false,
    }
  }

  componentDidMount() {
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="mobile-home">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Q"
            key="Q"
            icon={<div />}
            selectedIcon={<div />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent('Q')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div />}
            selectedIcon={<div />}
            title="U"
            key="U"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('U')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div />}
            selectedIcon={<div />}
            title="I"
            key="I"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('I')}
          </TabBar.Item>
          <TabBar.Item
            icon={<div />}
            selectedIcon={<div />}
            title="T"
            key="T"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent('T')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;