import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank, Grid, TabBar, Icon } from 'antd-mobile';
import './index.scss';
import Main from "./main";

class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      dselectedTab: 'redTab',
      hidden: false,
      tab: "main"
    }
  }

  componentDidMount() {
  }

  renderContent(pageText) {
    let page;
    switch(pageText) {
      case "main":
        page = <Main />
        break;
      case "find":
        page = <div>test</div>
        break;
    }
    return page;
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
            title="首页"
            key="index"
            icon={<Icon type="home" />}
            selectedIcon={<Icon type="home" />}
            selected={this.state.tab === 'main'}
            onPress={() => {
              this.setState({
                tab: 'main',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent("main")}
          </TabBar.Item>
          <TabBar.Item
            title="发现"
            icon={<Icon type="compass" />}
            selectedIcon={<Icon type="compass" />}
            key="find"
            selected={this.state.tab === 'find'}
            onPress={() => {
              this.setState({
                tab: 'find',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('find')}
          </TabBar.Item>
          <TabBar.Item
            title="我的"
            icon={<Icon type="user" />}
            selectedIcon={<Icon type="user" />}
            key="mine"
            dot
            selected={this.state.tab === 'mine'}
            onPress={() => {
              this.setState({
                tab: 'mine',
              });
            }}
          >
            {this.renderContent('mine')}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default Home;