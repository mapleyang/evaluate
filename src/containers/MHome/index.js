import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank, Grid } from 'antd-mobile';
import './index.scss'

const fucs = [{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '戒烟打卡'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '健康分析'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '我的健康'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '戒烟公益'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '自助戒烟'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '短信戒烟'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '心理戒烟'
},{
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: '药物戒烟'
}]
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `名字${i}`,
}));


class Home extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
    }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);
  }

  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div className="mobile-home">
        <Carousel
          className="my-carousel" autoplay={false} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
          ))}
        </Carousel>
        <WhiteSpace />
        <div>
          <Grid data={fucs} columnNum={3} hasLine={false} />
        </div>
      </div>
    );
  }
}

export default Home;