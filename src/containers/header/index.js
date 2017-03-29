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
    location.hash = "/" + e.key;
  }

  loginClick () {
    location.hash = "/login";
  }

  render() {
    return (
      <div className="header-area">
        <Row className="header-row-menu">
          <Col span={4}>
            <img src="./viewfile.png" />
            <div className="header-name"><span>戒烟-健康之路</span></div>
          </Col>
          <Col span={16} className="menu-col">
              <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="home">
                <span>主页</span>
              </Menu.Item>
              <SubMenu title={<span>戒烟活动</span>}>
                <Menu.Item key="analysis">戒烟健康分析</Menu.Item>
                <Menu.Item key="activity1">戒烟活动1</Menu.Item>
                <Menu.Item key="activity2">戒烟活动2</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>戒烟方案</span>}>
                <Menu.Item key="selfcure">自助戒烟</Menu.Item>
                <Menu.Item key="msgcure">短信戒烟</Menu.Item>
                <Menu.Item key="mindcure">心理治疗戒烟</Menu.Item>
                <Menu.Item key="medicinecure">药物戒烟</Menu.Item>
              </SubMenu>
              <Menu.Item key="mark">
                戒烟打卡
              </Menu.Item>
              <SubMenu title={<span>我的健康之路</span>}>
                <Menu.Item key="diary">戒烟日记</Menu.Item>
                <Menu.Item key="result">戒烟成果</Menu.Item>
                <Menu.Item key="health">我的健康</Menu.Item>
                <Menu.Item key="commonweal">戒烟公益</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>烟草知识</span>}>
                <Menu.Item key="disease">烟草-癌症和健康</Menu.Item>
                <Menu.Item key="truth">戒烟-神话和真相</Menu.Item>
                <Menu.Item key="knowledge">戒烟-知识竞赛</Menu.Item>
              </SubMenu>
              <SubMenu title={<span>更多</span>}> 
                <Menu.Item key="harm">吸烟危害</Menu.Item>
                <Menu.Item key="twiceHarm">二手烟危害</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={2}>
            <div className="user-login" onClick={this.loginClick.bind(this)}><Icon type="user" />登陆/注册</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;