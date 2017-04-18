import React, { Component } from 'react'
import { Row, Col, Menu, Icon  } from 'antd'
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import './index.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const languageValue = location.hash.slice(2, 4) === "en" ? "中文" : "EN";

class Header extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      current: 'mail',
      language: languageValue,
      param: "",
    }
  }

  componentDidMount () {
    this.setState({
      param: location.hash.slice(2, 4) !== "en" ? "zh" : "en",
      // param: location.hash.slice(2, 4)
    })
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

  languageCovert (value) {
    let language;
    let route;
    if(location.hash.slice(2,4) === "en") {
      route = location.hash.slice(4, location.hash.indexOf("?"));
    }
    else {
      route = location.hash.slice(1, location.hash.indexOf("?"))
    }
    console.log(route)
    if(value === "EN") {
      language = "中文";
      location.hash = "/en" + route;
    }
    if(value === "中文") {
      language = "EN";
      location.hash = route;
    }
    this.setState({
      language: language
    })
  }

  render() {
    const defaultZH_EN = window.ZH_EN['zh'];
    let param = location.hash.slice(2, 4) === "en" ? "en" : "zh";
    if(this.state.param !== "" && this.state.param !== param ) {
      location.reload();
    }
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
                <span>
                  <FormattedMessage id="header.menu.home" defaultMessage={defaultZH_EN['header.menu.home']}/>
                </span>
              </Menu.Item>
              <SubMenu title={<span><FormattedMessage id="header.menu.active" defaultMessage={defaultZH_EN['header.menu.active']}/></span>}>
                <Menu.Item key="analysis">戒烟健康分析</Menu.Item>
                <Menu.Item key="share">分享&解答</Menu.Item>
                <Menu.Item key="coach">戒烟教练</Menu.Item>
                <Menu.Item key="child">孩子-无烟</Menu.Item>
              </SubMenu>
              <SubMenu title={<span><FormattedMessage id="header.menu.project" defaultMessage={defaultZH_EN['header.menu.project']}/></span>}>
                <Menu.Item key="selfcure">自助戒烟</Menu.Item>
                <Menu.Item key="msgcure">短信戒烟</Menu.Item>
                <Menu.Item key="mindcure">心理戒烟</Menu.Item>
                <Menu.Item key="medicinecure">药物戒烟</Menu.Item>
                <Menu.Item key="medicinecure">诊所戒烟</Menu.Item>
              </SubMenu>
              <Menu.Item key="mark">
                <FormattedMessage id="header.menu.mark" defaultMessage={defaultZH_EN['header.menu.mark']}/>
              </Menu.Item>
              <SubMenu title={<span><FormattedMessage id="header.menu.mine" defaultMessage={defaultZH_EN['header.menu.mine']}/></span>}>
                <Menu.Item key="diary">戒烟日记</Menu.Item>
                <Menu.Item key="myplan">戒烟计划</Menu.Item>
                <Menu.Item key="result">戒烟成果</Menu.Item>
                <Menu.Item key="health">我的健康</Menu.Item>
                <Menu.Item key="commonweal">戒烟公益</Menu.Item>
              </SubMenu>
              <SubMenu title={<span><FormattedMessage id="header.menu.knowledge" defaultMessage={defaultZH_EN['header.menu.knowledge']}/></span>}>
                <Menu.Item key="disease">烟草-癌症和健康</Menu.Item>
                <Menu.Item key="truth">戒烟-神话和真相</Menu.Item>
                <Menu.Item key="compete">戒烟-知识竞赛</Menu.Item>
              </SubMenu>
              <SubMenu title={<span><FormattedMessage id="header.menu.more" defaultMessage={defaultZH_EN['header.menu.more']}/></span>}> 
                <Menu.Item key="harm">吸烟危害</Menu.Item>
                <Menu.Item key="twiceharm">二手烟危害</Menu.Item>
              </SubMenu>
            </Menu>
          </Col>
          <Col span={2}>
            <div className="user-login" onClick={this.loginClick.bind(this)}><Icon type="user" />登陆/注册</div>
          </Col>
          <Col span={2}>
            <div className="language-setting" onClick={this.languageCovert.bind(this, this.state.language)}>{this.state.language}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;