import React, { Component } from 'react'
import {  Row, Col, Icon, Menu  } from 'antd'
import './index.scss'
import classnames from "classnames";


class LeftMenu extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      horizontalFlag: this.props.type !== "vertical" ? this.props.menuList[0].value : "",
      menuList: this.props.menuList,
      selectedKeys: this.props.menuList[0].value
    }
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.menuList[0].value !== this.state.menuList[0].value) {
      this.setState({
        menuList: nextProps.menuList,
        selectedKeys: nextProps.menuList[0].value
      })
    }
  }

  horizontalMenuClick (value) {
    this.setState({
      horizontalFlag: value
    })
    this.props.menuTypeFuc(value)
  }

  menuSelect (value) {
    this.setState({
      selectedKeys: value.key
    })
  }

  getMenuItem () {
    let item = "";
    if(this.props.type === "vertical") {
      item = <Menu
        selectedKeys={[this.state.selectedKeys]}
        onSelect={this.menuSelect.bind(this)}>
        {this.state.menuList.map(el => {
          return <Menu.Item key={el.value}>
            <Icon type="pie-chart" />
            <span>{el.label}</span>
          </Menu.Item>
        })}
      </Menu>
    }
    else {
      item = <Row className="horizontal">
        {this.state.menuList.map(el => {
          return <Col span={12} className={classnames({
            "horizontal-menu": true,
            "horizontal-menu-selected": el.value === this.state.horizontalFlag
          })} onClick={this.horizontalMenuClick.bind(this, el.value)}>{el.label}</Col>
        })}
      </Row>
    }
    return item
  }

  render() {
    return (
      <div className="left-menu">
        {this.getMenuItem()}
      </div>
    );
  }
}

export default LeftMenu;
