import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Carousel, Flex } from 'antd-mobile';


class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
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
        <div className="pro-list">
          <Carousel
            className="pro-carousel"
            autoplay={false}
            infinite
            dots={false}
            selectedIndex={1}>
            {this.state.data.map(ii => (
              <a key={ii}>
                <img
                  src="./beginning.jpg" alt=""/>
              </a>
            ))}
          </Carousel>
          <div className="item-title">
            保险推荐
          </div>
          <div className="insurance-list">
            {this.state.data.map((el, index) => {
              return <div>
                <Flex>
                  <Flex.Item className="insurance-img"><img src={"./insurance" + index + ".jpg"} /></Flex.Item>
                  <Flex.Item>保险{index}</Flex.Item>
                </Flex>
              </div>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;