import React, { Component } from 'react'
import './index.less'
import classnames from "classnames";
import { createForm } from 'rc-form';
import AjaxJson from "../../utils/ajaxJson"
import Score from "./score";
import { Icon, List, Button, DatePicker, Picker, InputItem, Progress, Radio, Modal, Checkbox  } from 'antd-mobile';
const Item = List.Item;
const RadioItem = Radio.RadioItem;
const CheckboxItem = Checkbox.CheckboxItem;
const alert = Modal.alert;

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

const title = ["行为和生活方式", "体检数据", "慢性疾病和家族史"]


class Flow extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      data: ['', '', ''],
      date: new Date(Date.now()),
      price: "",
      curreentPage: 1,
      module: false,
      percent: 1,
      type: "",
      //
      sex: "0",
      height: "",
      weight: "",
      beltline: "",
      fruit: "",
      solt: "",
      fry: "",
      thew: "",
      workThew: "",
      smoking: "",
      drink: "",
      sleep: "",
      secure: "",
      stress: "",
      turndown: "",
      weak: "",
      pressure: "",
      diastolic: "",
      bloodSugar: "",
      TC: "",
      LDL: "",
      LDL: "",
      owerList: "",
      familyList: "",
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

  getFormFlag () {
    let flag = true;
    if(this.state.curreentPage === 1) {
      let nullList = [];
      let flagList = ["fruit","solt","fry","thew","workThew","smoking", "drink", "sleep", "secure", "stress","turndown", "weak"];
      flagList.forEach((el, index) => {
        if(!this.state[el]) {
          nullList.push(index + 3)
        }
      })
      if(nullList.length !== 0) {
        alert('请完善', "第" + nullList.toString() + "题。", [
          { text: '取消', onPress: () => console.log('cancel')},
          { text: '确定', onPress: () => console.log('ok') },
        ]);
        flag = false;
      }
    }
    else if(this.state.curreentPage === 2) {
      let nullList = [];
      let flagList = ["height","weight","beltline","pressure","diastolic","bloodSugar", "TC", "LDL", "LDL"];
      flagList.forEach((el, index) => {
        if(index < 2 && nullList.length === 0) {
          if(!this.state[el]) {
            nullList.push(index + 15)
          }
        }
        if(index >= 2) {
          if(!this.state[el]) {
            nullList.push(index + 14)
          }
        }
      })
      if(nullList.length !== 0) {
        alert('请完善', "第" + nullList.toString() + "题。", [
          { text: 'Cancel', onPress: () => console.log('cancel')},
          { text: 'OK', onPress: () => console.log('ok') },
        ]);
        flag = false;
      }
    }
    else {
      let nullList = [];
      let flagList = ["owerList","familyList"];
      flagList.forEach((el, index) => {
        if(!this.state[el]) {
          nullList.push(index + 23)
        }
      })
      if(nullList.length !== 0) {
        alert('请完善', "第" + nullList.toString() + "题。", [
          { text: 'Cancel', onPress: () => console.log('cancel')},
          { text: 'OK', onPress: () => console.log('ok') },
        ]);
        flag = false;
      }
    }
    return flag
  }

  nextClick () {
    this.props.form.validateFields((error, val) => {
      if(this.getFormFlag()) {
        window.scrollTo(0, 0);
        if(this.state.curreentPage < 3) {
          this.setState({
            curreentPage: this.state.curreentPage + 1,
            percent: this.state.percent + 33
          })
        }
        else {
          let value = {
            height: this.state.height,
            weight: this.state.weight,
            beltline: this.state.beltline,
            date: this.state.date
          }
          //风险因素
          let factor = this.getRules(value);
          //糖尿病
          let diabetes = this.getDiabetesRules(value);
          //心血管
          let angiocarpy = this.getAngiocarpyRules(value);
          //脑卒中
          let disorder = this.getDisorderRules(value);
          let BMI = value.weight/((value.height/100)*(value.height/100));
          let bodyData = [{
            label: "身高",
            value: value.height
          },{
            label: "体重",
            value: value.weight
          },{
            label: "腰围",
            value: value.beltline
          },{
            label: "BMI(体质指数)",
            value: BMI.toString().slice(0,5)
          },{
            label: "收缩压",
            value: this.getPressure()
          },{
            label: "舒张压",
            value: this.getDiastolic()
          },{
            label: "总胆固醇",
            value: this.getTC()
          },{
            label: "空腹血糖",
            value: this.getBloodSugar()
          },{
            label: "低密度脂蛋白",
            value: this.getLDL()
          },{
            label: "高密度脂蛋白",
            value: this.getHDL()
          }]
          let result = {
            factor: factor,
            diabetes: diabetes,
            angiocarpy: angiocarpy,
            disorder: disorder,
            bodyData: bodyData,
            owerList: this.state.owerList,
            familyList: this.state.familyList
          }
          sessionStorage.setItem("result", JSON.stringify(result));
          location.hash = "/result";
        }
      }
      else {
        //提示
      }
    });
  }

  getPressure () {
    let val;
    if(this.state.pressure === "0") {
      val = "X<120mmHg";
    }
    else if(this.state.pressure === "1") {
      val = "120<=X<130mmHg"
    }
    else if(this.state.pressure === "2") {
      val = "130<=X<140mmHg"
    } 
    else {
      val = "X>=140mmHg"
    }
    return val
  }
  getDiastolic () {
    let val;
    if(this.state.diastolic === "0") {
      val = "X<80mmHg";
    }
    else if(this.state.diastolic === "1") {
      val = "80<=X<90mmHg"
    }
    else if(this.state.diastolic === "2") {
      val = "X<=90mmHg"
    } 
    else {
      val = "未测或不记得"
    }
    return val
  }
  getTC () {
    let val;
    if(this.state.TC === "0") {
      val = "X<5.2mmol/L";
    }
    else if(this.state.TC === "1") {
      val = "X>=5.2mmol/L"
    }
    else {
      val = "未测或不记得"
    }
    return val
  }
  getBloodSugar () {
    let val;
    if(this.state.bloodSugar === "0") {
      val = "X<5.6mmol/L";
    }
    else if(this.state.bloodSugar === "1") {
      val = "5.6<=X<7mmol/L"
    }
    else if(this.state.bloodSugar === "2") {
      val = "X>=7mmol/L"
    }
    else {
      val = "未测或不记得"
    }
    return val
  }
  getLDL () {
    let val;
    if(this.state.LDL === "0") {
      val = "X<=3.1mmol/L";
    }
    else if(this.state.LDL === "1") {
      val = "X>3.1mmol/L"
    }
    else {
      val = "未测或不记得"
    }
    return val
  }
  getHDL () {
    let val;
    if (this.state.sex === "0") {
      if(this.state.HDL === "0") {
        val = "X<1.16mmol/L";
      }
      else if(this.state.HDL === "1") {
        val = "X>=1.16mmol/L"
      }
      else {
        val = "未测或不记得"
      }
    }
    else {
      if(this.state.HDL === "0") {
        val = "X<1.29mmol/L";
      }
      else if(this.state.HDL === "1") {
        val = "X>=1.29mmol/L"
      }
      else {
        val = "未测或不记得"
      }
    }
    return val
  }

  //规则模型
  getRules (value) {
    //超重/肥胖
    //BMI
    let BMI = this.getBMI("factor", value.height, value.weight);
    let beltline = this.getBeltline("factor", value.beltline);
    let fat = BMI + beltline;
    //运动
    let thew = Score.thew.data[parseInt(this.state.thew)].value;
    let workThew = Score.workThew.data[parseInt(this.state.workThew)].value;
    let sport = parseInt(thew) + parseInt(workThew);
    //饮食
    let fruit = Score.fruit.data[parseInt(this.state.fruit)].value;
    let solt = Score.solt.data[parseInt(this.state.solt)].value;
    let fry = Score.fry.data[parseInt(this.state.fry)].value;
    let food = parseInt(fruit) + parseInt(solt) + parseInt(fry);
    //烟草
    let smoking = parseInt(Score.smoking.data[parseInt(this.state.smoking)].value);
    //酒精
    let drink = parseInt(Score.drink.data[parseInt(this.state.drink)].value);
    //睡眠
    let sleep = parseInt(Score.sleep.data[parseInt(this.state.sleep)].value);
    //安全
    let secure = parseInt(Score.secure.data[parseInt(this.state.secure)].value);
    //压力
    let stress = parseInt(Score.stress.data[parseInt(this.state.stress)].value);
    //抑郁
    let turndown = parseInt(Score.turndown.data[parseInt(this.state.turndown)].value);
    let weak = parseInt(Score.weak.data[parseInt(this.state.weak)].value);
    let dumps = turndown + weak;
    //高血压
    let pressure = parseInt(Score.pressure.data[parseInt(this.state.pressure)].value);
    let diastolic = parseInt(Score.diastolic.data[parseInt(this.state.diastolic)].value);
    let hypertension = pressure + diastolic;
    //糖尿病
    let diabetes = parseInt(Score.bloodSugar.data[parseInt(this.state.bloodSugar)].value);
    //血脂异常
    let TC = parseInt(Score.TC.data[parseInt(this.state.TC)].value);
    let LDL = parseInt(Score.LDL.data[parseInt(this.state.LDL)].value);
    let HDL = parseInt(Score.HDL.data[parseInt(this.state.HDL)].value);
    let dyslipidemia = TC + LDL + HDL;
    let factor = {
      fat: fat,
      BMI: BMI,
      beltline: beltline,
      sport: sport,
      food: food,
      smoking: smoking,
      drink: drink,
      sleep: sleep,
      secure: secure,
      stress: stress,
      dumps: dumps,
      hypertension: hypertension,
      diabetes: diabetes,
      dyslipidemia: dyslipidemia
    }
    return factor
  }

  //糖尿病
  getDiabetesRules(value) {
    //BMI
    let BMI = this.getBMI("diabetes", value.height, value.weight);
     let beltline = this.getBeltline("diabetes", value.beltline);
    let fruit = parseInt(Score.fruit.data[parseInt(this.state.fruit)].diabetes);
    let thew = parseInt(Score.thew.data[parseInt(this.state.thew)].diabetes);
    let bloodSugar = parseInt(Score.bloodSugar.data[parseInt(this.state.bloodSugar)].diabetes);
    let diabetes = BMI + fruit + thew + bloodSugar + this.getAge("diabetes");
    this.state.owerList.map(el => {
      if(el === "糖尿病") {
        diabetes += 100;  
      }
      if(el === "高血压") {
        diabetes += 2;
      }
    })
    this.state.familyList.map(el => {
      if(el === "糖尿病") {
        diabetes += 3;
      }
    })
    return diabetes
  }
  //心血管
  getAngiocarpyRules (value) {
    let angiocarpy = 0;
    if(this.state.sex === "0") {
      let smoking = parseInt(Score.smoking.data[parseInt(this.state.smoking)].angiocarpy.male);
      let pressure = parseInt(Score.pressure.data[parseInt(this.state.pressure)].angiocarpy.male);
      let TC = parseInt(Score.TC.data[parseInt(this.state.TC)].angiocarpy.male);
      angiocarpy += TC + smoking + pressure + this.getAge("angiocarpy");
      let BMI = this.getBMI("angiocarpy", value.height, value.weight);
      angiocarpy += BMI;
      this.state.owerList.map(el => {
        if(el === "糖尿病") {
          angiocarpy += 1;
        }
      })
      let result = [0.3, 0.5, 0.6, 0.8, 1.1, 1.5, 2.1,2.9,3.9,5.4,7.3,9.7,12.8,16.8,21.7,27.7,35.3,52.6];
      result.forEach((el, index) => {
        if(angiocarpy === index) {
          angiocarpy = el;
        }
        else if(angiocarpy >= 17 && index === result.length - 1) {
          angiocarpy = el;
        }
      })
    }
    else {
      let smoking = parseInt(Score.smoking.data[parseInt(this.state.smoking)].angiocarpy.female);
      let pressure = parseInt(Score.pressure.data[parseInt(this.state.pressure)].angiocarpy.female);
      let TC = parseInt(Score.TC.data[parseInt(this.state.TC)].angiocarpy.female);
      angiocarpy += TC + smoking + pressure + this.getAge("angiocarpy");
      let BMI = this.getBMI("angiocarpy", value.height, value.weight);
      angiocarpy += BMI;
      this.state.owerList.map(el => {
        if(el === "糖尿病") {
          angiocarpy += 1;
        }
      })
      let result = [0.2, 0.3, 0.5, 0.8, 1.2, 1.8, 2.8,4.4,6.8,10.3,15.6,23,32.7,43.1];
      result.forEach((el, index) => {
        if(angiocarpy === index) {
          angiocarpy = el;
        }
        else if(angiocarpy >= 13 && index === result.length - 1) {
          angiocarpy = el;
        }
      })
    }
    return angiocarpy
  }
  //脑卒中
  getDisorderRules (value) {
    //BMI
    let BMI = this.getBMI("disorder", value.height, value.weight);
    let thew = parseInt(Score.thew.data[parseInt(this.state.thew)].disorder);
    let TC = parseInt(Score.TC.data[parseInt(this.state.TC)].disorder);
    let LDL = parseInt(Score.LDL.data[parseInt(this.state.LDL)].disorder);
    let HDL = parseInt(Score.HDL.data[parseInt(this.state.HDL)].disorder);
    let disorder = BMI + thew + TC + LDL + HDL;
    this.state.owerList.map(el => {
      if(el === "糖尿病") {
        disorder += 10;
      }
      if(el === "房颤") {
        disorder += 10;
      }
      if(el === "高血压") {
        disorder += 10;
      }
      if(el === "中风（包括短暂性脑缺血发作）") {
        disorder += 100;
      }
    })
    this.state.familyList.map(el => {
      if(el === "脑卒中") {
        disorder += 1;
      }
    })
    return disorder
  }

  //获取年龄
  getAge (value) {
    let age;
    let score;
    let birth = new Date(this.state.date);
    let birthYear = birth.getFullYear(); 
    let birthMonth = birth.getMonth() + 1; 
    let birthDay = birth.getDate();   
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let nowDay = now.getDate();
    if(nowYear === birthYear) {
      age = 0;
    }
    else {
      let ageDiff = nowYear - birthYear ; //年之差  
        if(ageDiff > 0){  
          if(nowMonth == birthMonth) {  
            let dayDiff = nowDay - birthDay;//日之差  
            age = dayDiff < 0 ? ageDiff - 1 : ageDiff;
          }  
          else  
          {  
            let monthDiff = nowMonth - birthMonth;//月之差  
            age = monthDiff < 0 ? ageDiff - 1 : ageDiff;
          }  
        }  
        else  
        {  
          age = -1;//返回-1 表示出生日期输入错误 晚于今天  
        }  
    }
    if(value === "angiocarpy") {
      if(age <= 39) {
        score = 0;
      }
      else if(age >= 40 && age <= 44) {
        score = 1;
      }
      else if(age >= 45 && age <= 49) {
        score = 2;
      }
      else if(age >= 50 && age <= 54) {
        score = 3;
      }
      else {
        score = 4;
      }
    }
    if (value === "diabetes") {
      if(age < 45) {
        score = 0;
      }
      else if(age >= 45 && age <= 54) {
        score = 2;
      }
      else if(age >= 55 && age <= 64) {
        score = 3;
      }
      else {
        score = 4;
      }
    }
    return score;
  }

  //BMI 
  getBMI (flag, height, weight) {
    let bmi = weight/((height/100)*(height/100))
    let score = 0;
    if(flag === "factor") {
      if(bmi < 18.5) {
        score = 3;
      }
      else if(bmi >= 18.5 && bmi < 24.0) {
        score = 0;
      }
      else if(bmi >= 24.0 && bmi < 28.0) {
        score = 1;
      }
      else {
        score = 3;
      }
    }
    else if (flag === "diabetes"){
      if(bmi < 18.5) {
        score = 0;
      }
      else if(bmi >= 18.5 && bmi < 24.0) {
        score = 0;
      }
      else if(bmi >= 24.0 && bmi < 28.0) {
        score = 2;
      }
      else {
        score = 5;
      }
    }
    else if (flag === "angiocarpy") {
      if(bmi < 18.5) {
        score = 0;
      }
      else if(bmi >= 18.5 && bmi < 24.0) {
        score = 0;
      }
      else if(bmi >= 24.0 && bmi < 28.0) {
        score = 1;
      }
      else {
        score = 2;
      }
    }
    else {
      if(bmi < 18.5) {
        score = 0;
      }
      else if(bmi >= 18.5 && bmi < 24.0) {
        score = 0;
      }
      else if(bmi >= 24.0 && bmi < 28.0) {
        score = 1;
      }
      else {
        score = 1;
      }
    }
    return score
  }

  //腰围
  getBeltline (flag, beltline) {
    let score = 0;
    if(this.state.sex === "0") {
      if(flag === "factor") {
        if(beltline < 80) {
          score = 0;
        }
        else if (beltline >= 80 && beltline < 90) {
          score = 1;
        }
        else {
          score = 3;
        }
      }
      else {
        if(beltline < 80) {
          score = 0;
        }
        else if (beltline >= 80 && beltline < 90) {
          score = 1;
        }
        else {
          score = 4;
        }
      }
    }
    else {
      if(flag === "factor") {
        if(beltline < 75) {
          score = 0;
        }
        else if (beltline >= 75 && beltline < 85) {
          score = 1;
        }
        else {
          score = 3;
        }
      }
      else {
        if(beltline < 75) {
          score = 0;
        }
        else if (beltline >= 75 && beltline < 85) {
          score = 1;
        }
        else {
          score = 4;
        }
      }
    }
    return score
  }

  selectClick (value) {
   this.setState({
      module: true,
      type: value
    })
  }

  onClose () {
    this.setState({
      module: false
    })
  }

  onRadioChange (flag, value) {
    let state = {};
    state[flag] = value;
    this.setState(
      state
    )
  }


  getList (value) {
    let list = [];
    let item = "";
    const { getFieldProps } = this.props.form;
    let page1 = [<List className="my-list" renderHeader={() => '1、请填写您的出生日期_____？'}>
      <DatePicker
          mode="date"
          minDate={new Date('1920-1-1')}
          value={this.state.date}
          onChange={date => this.setState({ date })}>
        <Item></Item>
        </DatePicker>
    </List>,  <List className="my-list" renderHeader={() => '2、您的性别？'}>
       <RadioItem key="0" checked={"0" === this.state.sex} onChange={this.onRadioChange.bind(this, "sex", "0")}>男</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.sex} onChange={this.onRadioChange.bind(this, "sex", "1")}>女</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '3、您平均每周有几天吃5份(或以上)水果/蔬菜(1份: 水果=1个拳头; 蔬菜=1把)？'}>
       <RadioItem key="0" checked={"0" === this.state.fruit} onChange={this.onRadioChange.bind(this, "fruit", "0")}>5-7 天</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.fruit} onChange={this.onRadioChange.bind(this, "fruit", "1")}>2-4 天</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.fruit} onChange={this.onRadioChange.bind(this, "fruit", "2")}>≤1 天</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '4、您平均每周有几次吃高盐、高糖、高脂食品？'}>
       <RadioItem key="0" checked={"0" === this.state.solt} onChange={this.onRadioChange.bind(this, "solt", "0")}>≤2次</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.solt} onChange={this.onRadioChange.bind(this, "solt", "1")}>3-5次</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.solt} onChange={this.onRadioChange.bind(this, "solt", "2")}>≧6次</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '5、您平均每周有几次吃油炸、腌、熏食品？'}>
       <RadioItem key="0" checked={"0" === this.state.fry} onChange={this.onRadioChange.bind(this, "fry", "0")}>≤1次</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.fry} onChange={this.onRadioChange.bind(this, "fry", "1")}>3-4次</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.fry} onChange={this.onRadioChange.bind(this, "fry", "2")}>≧5次</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '6、您平均每周有多长时间的中等强度体力活动（如快走、骑车、拖地板等）？'}>
       <RadioItem key="0" checked={"0" === this.state.thew} onChange={this.onRadioChange.bind(this, "thew", "0")}>≤60分钟</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.thew} onChange={this.onRadioChange.bind(this, "thew", "1")}>60-149 分钟</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.thew} onChange={this.onRadioChange.bind(this, "thew", "2")}>≧150分钟</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '7、最近12月,您在工作时间的体力活动状况是？'}>
       <RadioItem key="0"  checked={"0" === this.state.workThew} onChange={this.onRadioChange.bind(this, "workThew", "0")}>静坐为主,基本不活动</RadioItem>
       <RadioItem key="1"  checked={"1" === this.state.workThew} onChange={this.onRadioChange.bind(this, "workThew", "1")}>静坐为主,较少活动</RadioItem>
       <RadioItem key="2"  checked={"2" === this.state.workThew} onChange={this.onRadioChange.bind(this, "workThew", "2")}>静坐为主,经常活动</RadioItem>
       <RadioItem key="3"  checked={"3" === this.state.workThew} onChange={this.onRadioChange.bind(this, "workThew", "3")}>体力劳动</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '8、您是否吸烟？'}>
       <RadioItem key="0" checked={"0" === this.state.smoking} onChange={this.onRadioChange.bind(this, "smoking", "0")}>不吸烟, 也无经常二手烟暴露</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.smoking} onChange={this.onRadioChange.bind(this, "smoking", "1")}>不吸烟, 经常二手烟暴露</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.smoking} onChange={this.onRadioChange.bind(this, "smoking", "2")}>吸烟，已戒（戒烟1年以上）</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.smoking} onChange={this.onRadioChange.bind(this, "smoking", "3")}>目前吸烟</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '9、 您平均每日的饮酒？（注：其他不同种类酒的摄入量可参照相同或相近度数的酒）'}>
       <RadioItem key="0" checked={"0" === this.state.drink} onChange={this.onRadioChange.bind(this, "drink", "0")}>不饮酒</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.drink} onChange={this.onRadioChange.bind(this, "drink", "1")}>男性：葡萄酒≤600ml或啤酒≤1200ml烈酒≤120ml；女性：葡萄酒≤450ml或啤酒≤900ml烈酒≤90ml</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.drink} onChange={this.onRadioChange.bind(this, "drink", "2")}>男性：葡萄酒≧600ml或啤酒≧1200ml烈酒≧120ml；女性：葡萄酒≧450ml或啤酒≧900ml或烈酒≧90ml</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '10、 最近1个月,您平均每天的睡眠状况？'}>
       <RadioItem key="0" checked={"0" === this.state.sleep} onChange={this.onRadioChange.bind(this, "sleep", "0")}>≧7小时, 且无睡眠障碍</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.sleep} onChange={this.onRadioChange.bind(this, "sleep", "1")}>&lt;7小时,  且无睡眠障碍</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.sleep} onChange={this.onRadioChange.bind(this, "sleep", "2")}>≧7小时, 有睡眠障碍</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.sleep} onChange={this.onRadioChange.bind(this, "sleep", "3")}>&lt;7小时,  有睡眠障碍</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '11、 您是否坐车系安全带和骑车戴头盔?'}>
       <RadioItem key="0" checked={"0" === this.state.secure} onChange={this.onRadioChange.bind(this, "secure", "0")}>少数时候或从不</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.secure} onChange={this.onRadioChange.bind(this, "secure", "1")}>多数会</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.secure} onChange={this.onRadioChange.bind(this, "secure", "2")}>每次都会</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.secure} onChange={this.onRadioChange.bind(this, "secure", "3")}>不坐车也不骑车</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '12、 最近12个月, 您的压力情况是？'}>
       <RadioItem key="0" checked={"0" === this.state.stress} onChange={this.onRadioChange.bind(this, "stress", "0")}>很小</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.stress} onChange={this.onRadioChange.bind(this, "stress", "1")}>一般</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.stress} onChange={this.onRadioChange.bind(this, "stress", "2")}>较大</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.stress} onChange={this.onRadioChange.bind(this, "stress", "3")}>很大</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '13、 最近1个月,您是否经常心情低落、沮丧或绝望？'}>
       <RadioItem key="0" checked={"0" === this.state.turndown} onChange={this.onRadioChange.bind(this, "turndown", "0")}>是</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.turndown} onChange={this.onRadioChange.bind(this, "turndown", "1")}>否</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '14、 最近1个月,您是否经常做事时提不起劲或没有兴趣？'}>
       <RadioItem key="0" checked={"0" === this.state.weak} onChange={this.onRadioChange.bind(this, "weak", "0")}>是</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.weak} onChange={this.onRadioChange.bind(this, "weak", "1")}>否</RadioItem>
    </List>];
    let page2 = [<List className="my-list" renderHeader={() => '15、您的身高？'}>
      <InputItem extra="cm" onChange={height => this.setState({ height })}/>
      <InputItem extra="kg" onChange={weight => this.setState({ weight })}/>
    </List>, <List className="my-list" renderHeader={() => '16、您的腰围？'}>
      <InputItem extra="cm" onChange={beltline => this.setState({ beltline })}/>
    </List>, <List className="my-list" renderHeader={() => '17、您的收缩压（血压高的那个值）？'}>
       <RadioItem key="0" checked={"0" === this.state.pressure} onChange={this.onRadioChange.bind(this, "pressure", "0")}>&lt;120 mm Hg</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.pressure} onChange={this.onRadioChange.bind(this, "pressure", "1")}>120-129 mm Hg</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.pressure} onChange={this.onRadioChange.bind(this, "pressure", "2")}>130-139 mm Hg</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.pressure} onChange={this.onRadioChange.bind(this, "pressure", "3")}>&ge;140 mm Hg</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '18、  您的舒张压（血压低的那个值）？ '}>
       <RadioItem key="0" checked={"0" === this.state.diastolic} onChange={this.onRadioChange.bind(this, "diastolic", "0")}>&lt;80 mm Hg</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.diastolic} onChange={this.onRadioChange.bind(this, "diastolic", "1")}>80-89 mm Hg</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.diastolic} onChange={this.onRadioChange.bind(this, "diastolic", "2")}>&ge;90mm Hg</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.diastolic} onChange={this.onRadioChange.bind(this, "diastolic", "3")}>未测或不记得</RadioItem>
    </List>,<List className="my-list" renderHeader={() => '19、您的空腹血糖？'}>
       <RadioItem key="0" checked={"0" === this.state.bloodSugar} onChange={this.onRadioChange.bind(this, "bloodSugar", "0")}>&lt;5.6 mmol/L</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.bloodSugar} onChange={this.onRadioChange.bind(this, "bloodSugar", "1")}>5.6-6.9 mmol/L</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.bloodSugar} onChange={this.onRadioChange.bind(this, "bloodSugar", "2")}>&ge;7 mmol/L</RadioItem>
       <RadioItem key="3" checked={"3" === this.state.bloodSugar} onChange={this.onRadioChange.bind(this, "bloodSugar", "3")}>未测或不记得</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '20、 您的总胆固醇(TC)值？'}>
       <RadioItem key="0" checked={"0" === this.state.TC} onChange={this.onRadioChange.bind(this, "TC", "0")}>&le;5.2mmol/L</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.TC} onChange={this.onRadioChange.bind(this, "TC", "1")}>&gt;5.2mmol/L</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.TC} onChange={this.onRadioChange.bind(this, "TC", "2")}> 未测过或忘记</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '21、 您的低密度脂蛋白(LDL-C)值？'}>
       <RadioItem key="0" checked={"0" === this.state.LDL} onChange={this.onRadioChange.bind(this, "LDL", "0")}>&lt;3.1mmol/L</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.LDL} onChange={this.onRadioChange.bind(this, "LDL", "1")}>&gt;3.1 mmol/L</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.LDL} onChange={this.onRadioChange.bind(this, "LDL", "2")}>未测过或忘记</RadioItem>
    </List>, <List className="my-list" renderHeader={() => '22、您的高密度脂蛋白（HDL-C）值？'}>
       <RadioItem key="0" checked={"0" === this.state.HDL} onChange={this.onRadioChange.bind(this, "HDL", "0")}>男性: &gt; 1.16 mmol/L；女性: &gt; 1.29 mmol/L</RadioItem>
       <RadioItem key="1" checked={"1" === this.state.HDL} onChange={this.onRadioChange.bind(this, "HDL", "1")}>男性: &ge; 1.16 mmol/L；女性: &ge; 1.29 mmol/L</RadioItem>
       <RadioItem key="2" checked={"2" === this.state.HDL} onChange={this.onRadioChange.bind(this, "HDL", "2")}>未测过或忘记</RadioItem>
    </List>];
    let page3 = [<List className="my-list" renderHeader={() => '23、您是否已被诊断患有下列一种或多种慢性疾病 (可多选)？'}>
       <Item onClick={this.selectClick.bind(this, "ower")}>{this.state.owerList.length > 0 ? "已选择：" + this.state.owerList.toString() : "请选择："}</Item>
    </List>, <List className="my-list" renderHeader={() => '24、您是否有父母或兄弟姐妹被诊断下列一种或多种疾病 （可多选）?'}>
       <Item onClick={this.selectClick.bind(this, "family")}>{this.state.familyList.length > 0 ? "已选择：" + this.state.familyList.toString() : "请选择："}</Item>
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

  onCheckboxChange = (val) => {
    let list = [];
    let temp = [];
    if(this.state.type === "ower") {
      list = this.state.owerList;
    }
    else {
      list = this.state.familyList;
    }
    let flag = true;
    if(list.length > 0) {
      list.forEach(i => {
        if(i === val) {
          flag = false;
        }
        else {
          temp.push(i)
        }
      })
    }
    flag ? temp.push(val) : temp;
    let ob = {};
    ob[this.state.type + "List"] = temp;
    console.log(ob)
    this.setState(
      ob
    )
  }

  getFlag (value) {
    let flag = false;
    let list = [];
    if(this.state.type === "ower") {
      list = this.state.owerList;
    }
    else {
      list = this.state.familyList;
    }
    if(list.length > 0) {
      list.forEach(el => {
        if(el === value) {
          flag = true;
        }
      })
    }
    return flag
  }


  render() {
    const { getFieldProps } = this.props.form;
    const diseases = ["无慢性疾病", "冠心病", "高血压", "房颤", "糖尿病", "慢性阻塞性肺病", "哮喘", "慢性关节炎", "抑郁症", "癌症", "中风（包括短暂性脑缺血发作）", "其他慢性疾病"]
    return (
      <div className="flow">
        <div className="header flow-header">
          <div className="header-back" onClick={this.headerBackClick.bind(this)}>
            <Icon type="left" size="lg" />
          </div>
          <div className="header-content">{title[this.state.curreentPage - 1]}</div>
        </div>
        <div className="flow-content" ref="scroller">
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
              <CheckboxItem key={index} checked={this.getFlag(i)} onChange={() => this.onCheckboxChange(i)}>
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