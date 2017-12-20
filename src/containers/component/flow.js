import React, { Component } from 'react'
import './index.scss'
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
      percent: 0
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
    this.setState({
      curreentPage: this.state.curreentPage + 1,
      percent: this.state.percent + 15
    })
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
      <Item arrow="horizontal">
        投保信息
      </Item>
    </List>,  <List className="my-list" renderHeader={() => '2、您的性别？'}>
       <RadioItem key="0">男</RadioItem>
       <RadioItem key="1">女</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '3、您是否吸烟？'}>
       <RadioItem key="0">不吸烟</RadioItem>
       <RadioItem key="1">吸烟、已戒（戒烟1年以上）</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '4、您是饮酒？'}>
       <RadioItem key="0">不饮酒</RadioItem>
       <RadioItem key="1">少量饮酒</RadioItem>
       <RadioItem key="2">饮酒过量</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '4、在过去的一个月，您是否要服药才能入睡？'}>
       <RadioItem key="0">几乎每天</RadioItem>
       <RadioItem key="1">有时</RadioItem>
       <RadioItem key="2">非常少或没有</RadioItem>
    </List>];
    let page2 = [<List className="my-list" renderHeader={() => '5、您每周有几天吃早餐？'}>
      <RadioItem key="0">多余5天</RadioItem>
      <RadioItem key="1">4-5天</RadioItem>
      <RadioItem key="2">2-3天</RadioItem>
      <RadioItem key="3">少于2天</RadioItem>
    </List>,  <List className="my-list" renderHeader={() => '6、您的荤素搭配？'}>
       <RadioItem key="0">荤素搭配</RadioItem>
       <RadioItem key="1">素食</RadioItem>
       <RadioItem key="2">其他</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '7、您是否吸烟？'}>
       <RadioItem key="0">吸烟</RadioItem>
       <RadioItem key="1">吸烟、已戒（戒烟1年以上）</RadioItem>
       <RadioItem key="2">不吸烟</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '8、您平均每周有几天吃杂粮食物？'}>
       <RadioItem key="0">5-7天</RadioItem>
       <RadioItem key="1">3-4天</RadioItem>
       <RadioItem key="2">1-2天</RadioItem>
       <RadioItem key="3">少于1天或不吃</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '9、您平均每周有几天吃水果？'}>
       <RadioItem key="0">5-7天</RadioItem>
       <RadioItem key="1">2-4天</RadioItem>
       <RadioItem key="2">少于2天或不吃</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '10、您平均每周有几天吃油炸食品？'}>
       <RadioItem key="0">5-7天</RadioItem>
       <RadioItem key="1">3-4天</RadioItem>
       <RadioItem key="2">1-2天</RadioItem>
       <RadioItem key="3">少于1天或不吃</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '11、您平均每周有几天吃腌、熏食物？'}>
       <RadioItem key="0">5-7天</RadioItem>
       <RadioItem key="1">3-4天</RadioItem>
       <RadioItem key="2">1-2天</RadioItem>
       <RadioItem key="3">少于1天或不吃</RadioItem>
    </List>];
    let page3 = [<List className="my-list" renderHeader={() => '12、您每周有几次持续30分钟以上的中等强度身体活动（如快走、骑车、太极拳、休闲游泳等）？'}>
      <RadioItem key="0">0次</RadioItem>
      <RadioItem key="1">1-2次</RadioItem>
      <RadioItem key="2">3-4次</RadioItem>
      <RadioItem key="3">5次以上</RadioItem>
    </List>,  <List className="my-list" renderHeader={() => '13、未来半年内，您是否会增加一项运动/或提高每周运动频率？'}>
      <RadioItem key="0">是</RadioItem>
      <RadioItem key="1">否</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '14、您的工作性质？'}>
       <RadioItem key="0">静坐为主</RadioItem>
       <RadioItem key="1">轻度活动</RadioItem>
       <RadioItem key="2">体力活动</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '15、您的刷牙习惯？'}>
       <RadioItem key="0">刷牙</RadioItem>
       <RadioItem key="1">不刷牙</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '16、您平均每周有几天吃水果？'}>
       <RadioItem key="0">小于5小时</RadioItem>
       <RadioItem key="1">5-7小时</RadioItem>
       <RadioItem key="2">7-9小时</RadioItem>
       <RadioItem key="3">大于9小时</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '17、您对生活感到满意？'}>
       <RadioItem key="0">很满意</RadioItem>
       <RadioItem key="1">比较满意</RadioItem>
       <RadioItem key="2">一般</RadioItem>
       <RadioItem key="3">不太满意</RadioItem>
       <RadioItem key="4">不满意</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '18、您与家人和朋友是什么关系？'}>
       <RadioItem key="0">紧密</RadioItem>
       <RadioItem key="1">良好</RadioItem>
       <RadioItem key="2">一般</RadioItem>
       <RadioItem key="3">疏远</RadioItem>
       <RadioItem key="4">不确定</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '19、最近一年您或您的家人是否遭遇重大疾病或分离？'}>
       <RadioItem key="0">紧密</RadioItem>
       <RadioItem key="1">良好</RadioItem>
       <RadioItem key="2">一般</RadioItem>
       <RadioItem key="3">疏远</RadioItem>
       <RadioItem key="4">不确定</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '19、最近一年您是否感受到较大的压力，从而引起紧张、焦虑或情绪低落？'}>
       <RadioItem key="0">经常</RadioItem>
       <RadioItem key="1">有时</RadioItem>
       <RadioItem key="2">偶尔</RadioItem>
       <RadioItem key="3">很少</RadioItem>
       <RadioItem key="4">从不</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '19、最近一年您是否感受到较大的压力，从而引起紧张、焦虑或情绪低落？'}>
       <RadioItem key="0">经常</RadioItem>
       <RadioItem key="1">有时</RadioItem>
       <RadioItem key="2">偶尔</RadioItem>
       <RadioItem key="3">很少</RadioItem>
       <RadioItem key="4">从不</RadioItem>
    </List>];
    let page4 = [<List className="my-list" renderHeader={() => '20、最近一年您感受压力对健康的影响程度？'}>
      <RadioItem key="0">很大</RadioItem>
      <RadioItem key="1">比较大</RadioItem>
      <RadioItem key="2">一般</RadioItem>
      <RadioItem key="3">有一些影响</RadioItem>
      <RadioItem key="4">没有影响</RadioItem>
    </List>,  <List className="my-list" renderHeader={() => '21、与同龄人相比，您人为您的身体健康状况如何？'}>
      <RadioItem key="0">很好</RadioItem>
      <RadioItem key="1">好</RadioItem>
      <RadioItem key="2">较差</RadioItem>
      <RadioItem key="3">很差</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '22、您亲属中有被确诊为：'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>, <List className="my-list" renderHeader={() => '23、您最近两周是否有下列疾病？'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>, <List className="my-list" renderHeader={() => '24、您是否患有或既往有下列疾病？'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>];
    let page5 = [<List className="my-list" renderHeader={() => '25、您定期接受健康体检吗？'}>
      <RadioItem key="0">从来没有/不清楚</RadioItem>
      <RadioItem key="1">定期体检</RadioItem>
    </List>,  <List className="my-list" renderHeader={() => '26、您的身高_____(cm)？'}>
      <RadioItem key="0">很好</RadioItem>
      <RadioItem key="1">好</RadioItem>
      <RadioItem key="2">较差</RadioItem>
      <RadioItem key="3">很差</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '27、请填写您的体重_____(kg)'}>
       <Item onClick={this.selectClick.bind(this)}>请选择：</Item>
    </List>, <List className="my-list" renderHeader={() => '28、您的腰围(cm)是？'}>
      <RadioItem key="0">80-90 cm</RadioItem>
      <RadioItem key="1">小于 80 cm</RadioItem>
      <RadioItem key="2">大于 90 cm</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '29、您的收缩压是_____ mmHg？'}>
      <RadioItem key="0">小于 120</RadioItem>
      <RadioItem key="1">120 - 130</RadioItem>
      <RadioItem key="2">130 - 140</RadioItem>
      <RadioItem key="3">140 - 160</RadioItem>
      <RadioItem key="4">160 - 180</RadioItem>
      <RadioItem key="5">大于 180</RadioItem>
      <RadioItem key="6">不清楚</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '30、您的舒张压是_____ mmHg？'}>
      <RadioItem key="0">小于 80</RadioItem>
      <RadioItem key="1">80 - 90</RadioItem>
      <RadioItem key="2">大于 90</RadioItem>
      <RadioItem key="3">不清楚</RadioItem>
    </List>];
    let page6 = [<List className="my-list" renderHeader={() => '31、您的总胆固醇指标是______mmol/L？'}>
      <RadioItem key="0">小于等于5.2</RadioItem>
      <RadioItem key="1">大于5.2</RadioItem>
      <RadioItem key="2">不清楚，但我属于正常</RadioItem>
      <RadioItem key="3">不清楚，但我属于不正常</RadioItem>
    </List>,  <List className="my-list" renderHeader={() => '32、您的高度脂蛋白指标是_____mmol/L？'}>
      <RadioItem key="0">小于 1.16</RadioItem>
      <RadioItem key="1">1.16 - 1.42</RadioItem>
      <RadioItem key="2">大于 1.42</RadioItem>
      <RadioItem key="3">不清楚，但我属于正常</RadioItem>
      <RadioItem key="4">不清楚，但我属于不正常</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '33、您的甘油三指标指标是_____mmol/L？'}>
      <RadioItem key="0">小于等于 1.53</RadioItem>
      <RadioItem key="1">大于 1.53</RadioItem>
      <RadioItem key="3">不清楚，但我属于正常</RadioItem>
      <RadioItem key="4">不清楚，但我属于不正常</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '34、您的低密度脂蛋白指标是_____mmol/L？'}>
      <RadioItem key="0">小于等于 3.1</RadioItem>
      <RadioItem key="1">大于 3.1</RadioItem>
      <RadioItem key="3">不清楚，但我属于正常</RadioItem>
      <RadioItem key="4">不清楚，但我属于不正常</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '35、您的空腹血糖指标是_____mmol？'}>
      <RadioItem key="0">小于等于 3.9</RadioItem>
      <RadioItem key="1">3.9 - 6.1</RadioItem>
      <RadioItem key="2">大于 6.1</RadioItem>
      <RadioItem key="3">不清楚，但我属于正常</RadioItem>
      <RadioItem key="4">不清楚，但我属于不正常</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '36、如果您的《健康风险评估报告》 显示您为健康高风险人群，请问您是否愿意参加公司后续为您提供的健康促进活动？'}>
      <RadioItem key="0">愿意</RadioItem>
      <RadioItem key="1">不愿意</RadioItem>
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
      case 4: 
        list = page4;
        break;
      case 5: 
        list = page5;
        break;
      case 6: 
        list = page6;
        break;
    }
    return list
  }




  render() {
    const { getFieldProps } = this.props.form;
    const diseases = ["无","高血压", "高血脂", "先天性心脏病", "冠心病", "心肌梗塞", "慢性肠胃炎", "结肠胃炎", "哮喘", "甲状腺疾病", "糖尿病", "老年痴呆", "多发性硬化病"]
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
          <Button style={{margin: "2rem"}} type="ghost" onClick={this.nextClick.bind(this, this.state.curreentPage)}>下一步</Button>
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
              <Button type="primary" onClick={this.onClose.bind(this)}>确定</Button>
            </List.Item>
          </List>
        </Modal>
      </div>
    );
  }
}

export default Flow = createForm()(Flow);