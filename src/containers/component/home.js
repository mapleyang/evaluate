import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";


class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
  }



  render() {
    return (
      <div className="home">
        <div className="header">
          保险产品
        </div>
      </div>
    );
  }
}

export default Home;
