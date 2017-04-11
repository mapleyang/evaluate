const personInfo = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "性别",
  options: [{
    label: "男",
    value: "1"
  },{
    label: "女",
    value: "0"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "出生日期",
  options: [{
    label: "男",
    value: "1"
  },{
    label: "女",
    value: "0"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "婚姻",
  options: [{
    label: "未婚",
    value: "1"
  },{
    label: "已婚",
    value: "0"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "职业",
  options: [{
    label: "职业A",
    value: "1"
  },{
    label: "职业B",
    value: "0"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "家庭收入",
  options: [{
    label: "<1500",
    value: "1500"
  },{
    label: "1500-3000",
    value: "3000"
  },{
    label: "3001-6000",
    value: "6000"
  },{
    label: "6001-10000",
    value: "10000"
  },{
    label: "10001-20000",
    value: "20000"
  },{
    label: "20001-50000",
    value: "50000"
  },{
    label: ">50000",
    value: "50000"
  },{
    label: "其他",
    value: "100000"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "文化程度",
  options: [{
    label: "小学",
    value: "1"
  },{
    label: "初中",
    value: "2"
  },{
    label: "高中",
    value: "3"
  },{
    label: "本科",
    value: "4"
  },{
    label: "硕士",
    value: "5"
  },{
    label: "博士",
    value: "6"
  },{
    label: "文盲与半文盲",
    value: "0"
  },{
    label: "其他",
    value: "7"
  }]
}]
const questionary = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你是否吸烟？",
  options: [{
    label: "从不吸烟",
    value: "0"
  },{
    label: "已戒烟，<6个月",
    value: "6"
  },{
    label: "已戒烟，≧6个月",
    value: "10"
  },{
    label: "目前吸烟",
    value: "1"
  }]
},{
  name: "",
  category: "",
  type: "",
  question: "和你同住的其他人中有几位吸烟者？",
  options: [{
    label: "丈夫/妻子",
    value: "10",
  },{
    label: "父亲/母亲",
    value: "40"
  },{
    label: "儿子/女儿",
    value: "25"
  },{
    label: "其他",
    value: "25"
  }]
},{
  name: "",
  category: "",
  type: "",
  question: "你是否长期暴露于 2 手烟",
  options: [{
    label: "无",
    value: "0",
  },{
    label: "有，家庭",
    value: "1"
  },{
    label: "有，公共场所",
    value: "1"
  },{
    label: "有, 家庭和公共场所",
    value: "1"
  },{
    label: "有, 其他",
    value: "1"
  }]
}]

const quitLengthone = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你戒烟多久了？",
  options: [{
    label: "6 ~ 12 月",
    value: "1"
  },{
    label: "13 ~ 24 月",
    value: "2"
  },{
    label: "3 ~ 14 年",
    value: "14"
  },{
    label: "≧15年",
    value: "15"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你是否觉得继续戒烟有困难？",
  options: [{
    label: "否，继续戒烟没有困难；",
    value: false
  },{
    label: "是，继续戒烟有困难",
    value: true
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你戒烟前吸烟多少年?",
  options: [{
    label: "刚戒烟",
    value: "0"
  },{
    label: "一年",
    value: "0"
  },{
    label: "三年",
    value: "3"
  },{
    label: "5年",
    value: "5"
  },{
    label: "10年",
    value: "10"
  },{
    label: "≧10年",
    value: "20"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "每天平均吸烟量?",
  options: [{
    label: "≤10 支/日",
    value: "10"
  },{
    label: "11-20 支/日",
    value: "20"
  },{
    label: "21-30 支/日",
    value: "30"
  },{
    label: "≧31 支/日",
    value: "40"
  }]
}]

const quitLengthtwo = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你戒烟多久了？",
  options: [{
    label: "≤2周",
    value: "2"
  },{
    label: "3-5周",
    value: "5"
  },{
    label: "6-12周",
    value: "12"
  },{
    label: "13-26周",
    value: "26"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你采用的戒烟方法(可多选)",
  options: [{
    label: "尼古丁贴片",
    value: "1"
  },{
    label: "尼古丁口香糖",
    value: "30"
  },{
    label: "尼古丁含片",
    value: "200"
  },{
    label: "盐酸安非他酮",
    value: "360"
  },{
    label: "伐尼克兰(畅沛)",
    value: "400"
  },{
    label: "心理咨询",
    value: "400"
  },{
    label: "戒烟热线",
    value: "400"
  },{
    label: "戒烟门诊",
    value: "400"
  },{
    label: "自助戒烟",
    value: "400"
  },{
    label: "其他",
    value: "400"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你戒烟前吸烟多少年?",
  options: [{
    label: "刚戒烟",
    value: "0"
  },{
    label: "一年",
    value: "0"
  },{
    label: "三年",
    value: "3"
  },{
    label: "5年",
    value: "5"
  },{
    label: "10年",
    value: "10"
  },{
    label: "≧10年",
    value: "20"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "每天平均吸烟量?",
  options: [{
    label: "≤10 支/日",
    value: "10"
  },{
    label: "11-20 支/日",
    value: "20"
  },{
    label: "21-30 支/日",
    value: "30"
  },{
    label: "≧31 支/日",
    value: "40"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你早晨醒来后多长时间吸第一支烟？",
  options: [{
    label: ">60分钟",
    value: "100"
  },{
    label: "31-60分钟",
    value: "60"
  },{
    label: "6-30分钟",
    value: "30"
  },{
    label: "≤5分钟",
    value: "5"
  }]
}]

const smoking = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你戒烟前吸烟多少年?",
  options: [{
    label: "刚戒烟",
    value: "0"
  },{
    label: "一年",
    value: "0"
  },{
    label: "三年",
    value: "3"
  },{
    label: "5年",
    value: "5"
  },{
    label: "10年",
    value: "10"
  },{
    label: "≧10年",
    value: "20"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "每天平均吸烟量?",
  options: [{
    label: "≤10 支/日",
    value: "10"
  },{
    label: "11-20 支/日",
    value: "20"
  },{
    label: "21-30 支/日",
    value: "30"
  },{
    label: "≧31 支/日",
    value: "40"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你曾经刻意减少过吸烟吗?",
  options: [{
    label: "有",
    value: true
  },{
    label: "没有",
    value: false
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你曾尝试认真戒烟多少次?",
  options: [{
    label: "没尝试过",
    value: 0
  },{
    label: "1次",
    value: "1"
  },{
    label: "2-5次",
    value: "5"
  },{
    label: "6-10次",
    value: "10"
  },{
    label: ">10次",
    value: "20"
  }]
}]

const noSmoking = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你的配偶是否吸烟?",
  options: [{
    label: "无配偶",
    value: "0"
  },{
    label: "从不吸烟",
    value: "0"
  },{
    label: "已戒烟",
    value: "0"
  },{
    label: "是，≤5支/日",
    value: "5"
  },{
    label: "是，6-10支/日",
    value: "10"
  },{
    label: "是，11-20支/日",
    value: "20"
  },{
    label: "是，≧21支/日",
    value: "30"
  }]
}]

const quitSmokingLength = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "戒烟时间: 年",
  options: [{
    label: "刚戒烟",
    value: "0"
  },{
    label: "一年",
    value: "0"
  },{
    label: "三年",
    value: "3"
  },{
    label: "5年",
    value: "5"
  },{
    label: "10年",
    value: "10"
  },{
    label: "≧10年",
    value: "20"
  }]
}]

const quitSmokingNum = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "戒烟前吸烟量: ",
  options: [{
    label: "≤10 支/日",
    value: "10"
  },{
    label: "11-20 支/日",
    value: "20"
  },{
    label: "21-30 支/日",
    value: "30"
  },{
    label: "≧31 支/日",
    value: "40"
  }]
}]

const smokingSence = [
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你早晨醒来后多长时间吸第一支烟？",
    options: [{
      label: ">60分钟",
      value: "100"
    },{
      label: "31-60分钟",
      value: "60"
    },{
      label: "6-30分钟",
      value: "30"
    },{
      label: "≤5分钟",
      value: "5"
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你是否在许多禁烟场所很难控制吸烟? ",
    options: [{
      label: "否",
      value: "false"
    },{
      label: "是",
      value: "true"
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你认为哪一支烟最不愿意放弃？ ",
    options: [{
      label: "晨起第一支",
      value: "8:00"
    },{
      label: "中午饭后一支",
      value: "12:00"
    },{
      label: "下午闲暇时一支",
      value: "15:00"
    },{
      label: "晚饭后一支烟",
      value: "18:00"
    },{
      label: "睡前一支烟",
      value: "22:00"
    },{
      label: "其他",
      value: "false"
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你每天吸多少支卷烟？",
    options: [{
      label: "≤10",
      value: "10"
    },{
      label: " 11-20",
      value: "20"
    },{
      label: "21-30",
      value: "30"
    },{
      label: "≧31",
      value: "40"
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你早晨醒来后第1个小时是否比其他时间吸烟多？",
    options: [{
      label: "否",
      value: false
    },{
      label: "是",
      value: true
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "您患病在床时仍旧吸烟吗？",
    options: [{
      label: "否",
      value: false
    },{
      label: "是",
      value: true
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你曾经刻意减少过吸烟吗?",
    options: [{
      label: "有",
      value: true
    },{
      label: "没有",
      value: false
    }]
  },
  {
    name: "",
    category: "",   //问题类型
    type: "",       //问答类型
    question: "你曾尝试认真戒烟多少次?",
    options: [{
      label: "没尝试过",
      value: 0
    },{
      label: "1次",
      value: "1"
    },{
      label: "2-5次",
      value: "5"
    },{
      label: "6-10次",
      value: "10"
    },{
      label: ">10次",
      value: "20"
    }]
  }
] 

const quitSmokingCheck = [{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你最近一次认真戒烟是什么时候?",
  options: [{
    label: "最近30天",
    value: "30"
  },{
    label: "1-6月前",
    value: "180"
  },{
    label: "7-12月前",
    value: "360"
  },{
    label: "1年前",
    value: "400"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "你最近一次认真戒烟, 维持了多久不吸烟?",
  options: [{
    label: "≤1天",
    value: "1"
  },{
    label: "1-30天",
    value: "30"
  },{
    label: "1-<7个月",
    value: "200"
  },{
    label: "7-12月",
    value: "360"
  },{
    label: "≧1年",
    value: "400"
  }]
},{
  name: "",
  category: "",   //问题类型
  type: "",       //问答类型
  question: "当时用的戒烟方法(可多选)",
  options: [{
    label: "尼古丁贴片",
    value: "1"
  },{
    label: "尼古丁口香糖",
    value: "30"
  },{
    label: "尼古丁含片",
    value: "200"
  },{
    label: "盐酸安非他酮",
    value: "360"
  },{
    label: "伐尼克兰(畅沛)",
    value: "400"
  },{
    label: "心理咨询",
    value: "400"
  },{
    label: "戒烟热线",
    value: "400"
  },{
    label: "戒烟门诊",
    value: "400"
  },{
    label: "自助戒烟",
    value: "400"
  },{
    label: "其他",
    value: "400"
  }]
}]

const questions = {
  commons: personInfo.concat(questionary),
  quitLengthone: quitLengthone,
  quitLengthtwo: quitLengthtwo,
  smoking: smoking,
  noSmoking: noSmoking,
  quitSmokingNum: quitSmokingNum,
  quitSmokingLength: quitSmokingLength,
  quitSmokingCheck: quitSmokingCheck,
  smokingSence: smokingSence
}

export default questions;