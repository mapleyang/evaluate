import React, { Component } from 'react'
import './index.less'
import classnames from "classnames";
import { createForm } from 'rc-form';
import AjaxJson from "../../utils/ajaxJson"
import { Icon, List, Button, Picker, InputItem, Progress, Radio, Modal, Checkbox } from 'antd-mobile';
const Item = List.Item;
const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;

const district = [{
  label: "一年",
  value: "1",
  price: 10000
},{
  label: "两年",
  value: "2",
  price: 20000
},{
  label: "五年",
  value: "5",
  price: 50000
},{
  label: "十年",
  value: "10",
  price: 100000
},{
  label: "三十年",
  value: "30",
  price: 300000
}]

const item = [<List className="my-list" renderHeader={() => '请填写您的出生日期_____？'}>
            <Item arrow="horizontal">
              投保信息
            </Item>
          </List>,  <List className="my-list" renderHeader={() => '请填写您的出生日期_____？'}>
             <RadioItem key="0">男</RadioItem>
             <RadioItem key="1">女</RadioItem>
          </List>]



class Flow extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      price: "",
      curreentPage: 1,
      module: false,
      percent: 1
    }
  }

  componentDidMount () {
  }

  headerBackClick () {
    window.history.back()
  }

  infoFillClick (value) {
    location.hash = "/" + value;
  }

  timeRangeChange (value) {
    district.forEach(el => {
      if(value[0] === el.value) {
        this.setState({
          price: el.price
        })   
      }
    })
  }

  nextClick () {
    if(this.state.curreentPage < 3) {
      this.setState({
        curreentPage: this.state.curreentPage + 1,
        percent: this.state.percent + 33
      })
    }
    else {
      location.hash = "/result";
    }
  }

  selectClick () {
   this.setState({
      module: true
    })
  }

  onClose () {
    this.setState({
      module: false
    })
  }


  getList (value) {
    let list = [];
    let item = "";
    let page1 = [<List className="my-list" renderHeader={() => '1、请填写您的出生日期_____？'}>
      <Item key="0">2000年11月10日</Item>
    </List>,  <List className="my-list" renderHeader={() => '2、您的性别？'}>
       <RadioItem key="0">男</RadioItem>
       <RadioItem key="1">女</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '3、您平均每周有几天吃5份(或以上)水果/蔬菜(1份: 水果=1个拳头; 蔬菜=1把)？'}>
       <RadioItem key="0">5-7 天</RadioItem>
       <RadioItem key="1">2-4 天</RadioItem>
       <RadioItem key="2">≤1 天</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '4、您平均每周有几次吃高盐、高糖、高脂食品？'}>
       <RadioItem key="0">≤2次</RadioItem>
       <RadioItem key="1">3-5次</RadioItem>
       <RadioItem key="2">≧6次</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '5、您平均每周有几次吃油炸、腌、熏食品？'}>
       <RadioItem key="0">≤1次</RadioItem>
       <RadioItem key="1">3-4次</RadioItem>
       <RadioItem key="2">≧5次</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '6、您平均每周有多长时间的中等强度体力活动（如快走、骑车、拖地板等）？'}>
       <RadioItem key="0">≤60分钟</RadioItem>
       <RadioItem key="1">60-149 分钟</RadioItem>
       <RadioItem key="2">≧150分钟</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '7、最近12月,您在工作时间的体力活动状况是？'}>
       <RadioItem key="0">静坐为主,基本不活动</RadioItem>
       <RadioItem key="1">静坐为主,较少活动</RadioItem>
       <RadioItem key="2">静坐为主,经常活动</RadioItem>
       <RadioItem key="3">体力劳动</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '8、您是否吸烟？'}>
       <RadioItem key="0">不吸烟, 也无经常二手烟暴露</RadioItem>
       <RadioItem key="1">不吸烟, 经常二手烟暴露</RadioItem>
       <RadioItem key="2">吸烟，已戒（戒烟1年以上）</RadioItem>
       <RadioItem key="3">目前吸烟</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '9、 您平均每日的饮酒？（注：其他不同种类酒的摄入量可参照相同或相近度数的酒）'}>
       <RadioItem key="0">不饮酒</RadioItem>
       <RadioItem key="1">男性：葡萄酒≤600ml或啤酒≤1200ml烈酒≤120ml</RadioItem>
       <RadioItem key="2">女性：葡萄酒≤450ml或啤酒≤900ml烈酒≤90ml</RadioItem>
       <RadioItem key="3">男性：葡萄酒≧600ml或啤酒≧1200ml烈酒≧120ml</RadioItem>
       <RadioItem key="4">女性：葡萄酒≧450ml或啤酒≧900ml或烈酒≧90ml</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '10、 最近1个月,您平均每天的睡眠状况？'}>
       <RadioItem key="0">≧7小时, 且无睡眠障碍</RadioItem>
       <RadioItem key="1">大于7小时,  且无睡眠障碍</RadioItem>
       <RadioItem key="2">≧7小时, 有睡眠障碍</RadioItem>
       <RadioItem key="3">小于7小时,  有睡眠障碍</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '11、 您是否坐车系安全带和骑车戴头盔?'}>
       <RadioItem key="0">少数时候或从不</RadioItem>
       <RadioItem key="1">多数会</RadioItem>
       <RadioItem key="2">每次都会</RadioItem>
       <RadioItem key="3">不坐车也不骑车</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '12、 最近1个月,您是否经常心情低落、沮丧或绝望？'}>
       <RadioItem key="0">是</RadioItem>
       <RadioItem key="1">否</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '13、 最近1个月,您是否经常做事时提不起劲或没有兴趣？'}>
       <RadioItem key="0">是</RadioItem>
       <RadioItem key="1">否</RadioItem>
    </List>];
    let page2 = [<List className="my-list" renderHeader={() => '14、您的身高？'}>
      <Item key="0">170cm</Item>
    </List>,  <List className="my-list" renderHeader={() => '15、您的体重？'}>
      <Item key="0">60kg</Item>
    </List>, <List className="my-list" renderHeader={() => '16、您的腰围？'}>
      <Item key="0">89cm</Item>
    </List>, <List className="my-list" renderHeader={() => '17、您的收缩压（血压高的那个值）？'}>
       <RadioItem key="0">小于120 mm Hg</RadioItem>
       <RadioItem key="1">120-129 mm Hg</RadioItem>
       <RadioItem key="2">130-139 mm Hg</RadioItem>
       <RadioItem key="3">大于等于140 mm Hg</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '18、  您的舒张压（血压低的那个值）？ '}>
       <RadioItem key="0">小于80 mm Hg</RadioItem>
       <RadioItem key="1">80-89 mm Hg</RadioItem>
       <RadioItem key="2">大于等于90mm Hg</RadioItem>
       <RadioItem key="3">未测或不记得</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '19、您的空腹血糖？'}>
       <RadioItem key="0">小于5.6 mmol/L</RadioItem>
       <RadioItem key="1">5.6-6.9 mmol/L</RadioItem>
       <RadioItem key="2">大于等于7 mmol/L</RadioItem>
       <RadioItem key="3">未测或不记得</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '20、 您的总胆固醇(TC)值？'}>
       <RadioItem key="0">小于等于5.2mmol/L</RadioItem>
       <RadioItem key="1">大于5.2mmol/L</RadioItem>
       <RadioItem key="2"> 未测过或忘记</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '21、 您的低密度脂蛋白(LDL-C)值？'}>
       <RadioItem key="0">≤3.1mmol/L</RadioItem>
       <RadioItem key="1">>3.1 mmol/L</RadioItem>
       <RadioItem key="2">未测过或忘记</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '22、您的高密度脂蛋白（HDL-C）值？'}>
       <RadioItem key="0">男性: 小于1.16 mmol/L</RadioItem>
       <RadioItem key="1">女性: 小于1.29 mmol/L</RadioItem>
       <RadioItem key="2">男性: 大于等于1.16 mmol/L</RadioItem>
       <RadioItem key="3">女性: 大于等于 1.29 mmol/L</RadioItem>
       <RadioItem key="3">未测过或忘记</RadioItem>
    </List>];
    let page3 = [<List className="my-list" renderHeader={() => '23、您是否已被诊断患有下列一种或多种慢性疾病 (可多选)？'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>, <List className="my-list" renderHeader={() => '24、您是否有父母或兄弟姐妹被诊断下列一种或多种疾病 （可多选）?'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>];
    switch(value) {
      case 1:
        list = page1;
        break;
      case 2: 
        list = page2;
        break;
      case 3: 
        list = page3;
        break;
    }
    return list
  }




  render() {
    const { getFieldProps } = this.props.form;
    const diseases = ["无","无慢性疾病", "冠心病", "高血压", "房颤", "糖尿病", "慢性阻塞性肺病", "哮喘", "哮喘", "慢性关节炎", "抑郁症", "癌症", "中风（包括短暂性脑缺血发作）", "其他慢性疾病"]
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">问卷内容</div>
        </div>
        <div className="flow-content">
          <Progress className="flow-process" percent={this.state.percent} />  
          {this.getList(this.state.curreentPage)}
          <Button  className="flow-button" style={{margin: "2rem"}} type="ghost" onClick={this.nextClick.bind(this, this.state.curreentPage)}>下一步</Button>
        </div>
         <Modal
          popup
          visible={this.state.module}
          maskClosable={false}
          animationType="slide-up"
        >
          <List renderHeader={() => <div>疾病列表</div>} className="popup-list">
            {diseases.map((i, index) => (
              <CheckboxItem key={index}>
                {i}
              </CheckboxItem>
            ))}
            <List.Item>
              <Button className="module-button" type="primary" onClick={this.onClose.bind(this)}>确定</Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    );
  }
}

export default Flow = createForm()(Flow);