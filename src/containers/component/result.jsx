import React, { Component } from 'react'
import './index.less'
import classnames from "classnames";
import AjaxJson from "../../utils/ajaxJson"
import { Icon, List, Button } from 'antd-mobile';
const Item = List.Item;


class Result extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount () {
  }


  render() {
    return (
      <div className="result">
        <div className="logo-area">
          <img src="./static/AIA.jpg" />
        </div>
      </div>
    );
  }
}

export default Result;