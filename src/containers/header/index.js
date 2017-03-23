import React, { Component } from 'react'
import { Row, Col, Menu, Icon  } from 'antd'
import './index.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      current: 'mail',
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="header-area">
        <Row>
          <Col span={4}><img src="./viewfile.png" /></Col>
          <Col span={16} className="menu-col">
              <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <span>主页</span>
              </Menu.Item>
              <Menu.Item key="compony">
                公司介绍
              </Menu.Item>
              <Menu.Item key="active">
                戒烟活动
              </Menu.Item>
              <Menu.Item key="expert">
                健康专家
              </Menu.Item>
              <Menu.Item key="card">
                戒烟打卡
              </Menu.Item>
              <SubMenu title={<span>更多</span>}>
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={2}>
            <div className="user-login"><Icon type="user" />登陆/注册</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;