import React, { Component } from 'react'
import './index.scss'
import classnames from "classnames";
import { Carousel, Flex } from 'antd-mobile';


class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      insurance: [{
        title: '太健康·百万全家桶',
        age: "90天至60周岁",
        time: "1年",
        content: "住院医疗保险金 100万/人特许医疗 可选赔付比例 100%"
      },{
        title: "心安•怡住院医疗保险",
        age: "0至60周岁",
        time: "1年",
        content: "病种由原60中提升至88种、续保年龄延长至80周岁"
      },{
        title: "少儿超能宝两全保险",
        age: "0-17周岁",
        time: "30年",
        content: "身故或全残保险金 10万元/份 重大疾病保险金"
      }]
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
        <div className="pro-list tab-content">
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
            {this.state.insurance.map((el, index) => {
              return <div>
                <Flex className="insurance-info">
                  <Flex.Item className="insurance-img"><img src={"./insurance" + index + ".jpg"} /></Flex.Item>
                  <Flex.Item className="insurance-intr">
                    <div className="insurance-title">{el.title}</div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">承保年龄</span>
                      <span>{el.age}</span>
                    </div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">保障期限</span>
                      <span>{el.time}</span>
                    </div>
                    <div className="insurance-item">
                      <span className="insurance-item-title">主要保障</span>
                      <span>{el.content}</span>
                    </div>
                  </Flex.Item>
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