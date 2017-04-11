const questions = {
  zh: {
    basic: [{
      name: "",
      category: "", 
      type: "",     
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
      category: "",  
      type: "",      
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
        label: "已婚",
        value: "married"
      },{
        label: "同居",
        value: "cohabitation"
      },{
        label: "离婚",
        value: "divorced"
      },{
        label: "分居",
        value: "separation"
      },{
        label: "丧偶",
        value: "widowed"
      },{
        label: "未婚",
        value: "single "
      },{
        label: "其他",
        value: "others "
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
        label: "其他",
        value: "7"
      }]
    }],
    smoking: [{
      name: "smokingFlag",
      category: "",   
      type: "",       
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
    }],
    smokingOne: [{
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
    }],
    smokingTow: [{
      name: "quitLength",
      category: "",   
      type: "",       
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
      name: "quitDifficulty",
      category: "",   
      type: "",       
      question: "你是否觉得继续戒烟有困难？",
      options: [{
        label: "否，继续戒烟没有困难；",
        value: false
      },{
        label: "是，继续戒烟有困难",
        value: true
      }]
    },{
      name: "smokingLength",
      category: "",   
      type: "",       
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
      name: "cigarette",
      category: "",   
      type: "",       
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
    }],
    smokingThree: [{
      name: "quitLength",
      category: "",   
      type: "",       
      question: "你戒烟多久了？",
      options: [{
        label: "≤2周",
        value: "0.02"
      },{
        label: "3-5周",
        value: "0.05"
      },{
        label: "6-12周",
        value: "0.25"
      },{
        label: "13-26周",
        value: "0.5"
      }]
    },{
      name: "quitWay",
      category: "",  
      type: "",      
      question: "你采用的戒烟方法(可多选)",
      options: [{
        label: "自助戒烟",
        value: "1"
      },{
        label: "尼古丁贴片",
        value: "30"
      },{
        label: "尼古丁咀嚼胶（口香糖）",
        value: "200"
      },{
        label: "安非他酮",
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
        label: "其他",
        value: "400"
      }]
    },{
      name: "quitDifficulty",
      category: "",   
      type: "",       
      question: "你是否觉得继续戒烟有困难？",
      options: [{
        label: "否，继续戒烟没有困难；",
        value: false
      },{
        label: "是，继续戒烟有困难",
        value: true
      }]
    },{
      name: "smokingLength",
      category: "",   
      type: "",       
      question: "你戒烟前吸烟多少年?",
      options: [{
        label: "刚戒烟",
        value: "0"
      },{
        label: "一年",
        value: "1"
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
      name: "cigarette",
      category: "",   
      type: "",       
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
      name: "morning",
      category: "",   
      type: "",       
      question: "你早晨醒来后多长时间吸第一支烟？",
      options: [{
        label: " ≤5分钟",
        value: "5"
      },{
        label: "6-30分钟",
        value: "30"
      },{
        label: "31-60分钟",
        value: "60"
      },{
        label: ">60分钟",
        value: "100"
      }]
    }],
    smokingFour: [{
      name: "smokingLength",
      category: "",   
      type: "",       
      question: "你戒烟前吸烟多少年?",
      options: [{
        label: "刚戒烟",
        value: "0"
      },{
        label: "一年",
        value: "1"
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
      name: "cigarette",
      category: "",   
      type: "",       
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
      name: "quitNumber",
      category: "",   
      type: "",       
      question: "你曾尝试认真戒烟多少次?",
      options: [{
        label: "没尝试过",
        value: "0"
      },{
        label: "1次",
        value: "1"
      },{
        label: "2-4次",
        value: "3"
      },{
        label: "5-9次",
        value: "7"
      },{
        label: "≧10次",
        value: "10"
      }]
    }],
    smokingFourChild: [{
      name: "",
      category: "recentDay",   
      type: "",       
      question: "你最近一次认真戒烟是什么时候?",
      options: [{
        label: "最近7天",
        value: "7"
      },{
        label: "最近8-30天",
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
      name: "recentDayQuit",
      category: "",   
      type: "",       
      question: "你最近一次认真戒烟, 维持了多久不吸烟?",
      options: [{
        label: "≤7天",
        value: "7"
      },{
        label: "8-30天",
        value: "30"
      },{
        label: "1-6月",
        value: "180"
      },{
        label: "7-12月",
        value: "360"
      },{
        label: "≧1年",
        value: "400"
      }]
    },{
      name: "quitWay",
      category: "",   
      type: "",       
      question: "当时用的戒烟方法(可多选) ",
      options: [{
        label: "自助戒烟",
        value: "1"
      },{
        label: "尼古丁贴片",
        value: "30"
      },{
        label: "尼古丁咀嚼胶（口香糖）",
        value: "200"
      },{
        label: "安非他酮",
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
        label: "其他",
        value: "400"
      }]
    },{
      name: "quitImportanceDegree",
      category: "",   
      type: "",       
      question: "成功戒烟对你有多重要?(0表示最小, 10表示最大)",
      options: [{
        label: "0",
        value: "0"
      },{
        label: "1",
        value: "1"
      },{
        label: "2",
        value: "2"
      },{
        label: "3",
        value: "4"
      },{
        label: "5",
        value: "5"
      },{
        label: "6",
        value: "6"
      },{
        label: "7",
        value: "7"
      },{
        label: "8",
        value: "8"
      },{
        label: "9",
        value: "9"
      },{
        label: "10",
        value: "10"
      }]
    },{
      name: "quitDifficultyDegree",
      category: "",   
      type: "",       
      question: "你觉得戒烟有多困难?(0表示最小, 10表示最大)",
      options: [{
        label: "0",
        value: "0"
      },{
        label: "1",
        value: "1"
      },{
        label: "2",
        value: "2"
      },{
        label: "3",
        value: "4"
      },{
        label: "5",
        value: "5"
      },{
        label: "6",
        value: "6"
      },{
        label: "7",
        value: "7"
      },{
        label: "8",
        value: "8"
      },{
        label: "9",
        value: "9"
      },{
        label: "10",
        value: "10"
      }]
    },{
      name: "quitConfidenceDegree",
      category: "",   
      type: "",       
      question: "你有多大信心可以成功戒烟?(0表示最小, 10表示最大)",
      options: [{
        label: "0",
        value: "0"
      },{
        label: "1",
        value: "1"
      },{
        label: "2",
        value: "2"
      },{
        label: "3",
        value: "4"
      },{
        label: "5",
        value: "5"
      },{
        label: "6",
        value: "6"
      },{
        label: "7",
        value: "7"
      },{
        label: "8",
        value: "8"
      },{
        label: "9",
        value: "9"
      },{
        label: "10",
        value: "10"
      }]
    },{
      name: "cigaretteMoney",
      category: "",   
      type: "",       
      question: "过去一个月内,你平均每天花多少钱买烟?",
      options: [{
        label: "≤10/元",
        value: "10"
      },{
        label: "20-40/元",
        value: "30"
      },{
        label: "40-60/元",
        value: "50"
      },{
        label: "",
        value: "4"
      },{
        label: "5",
        value: "5"
      },{
        label: "6",
        value: "6"
      },{
        label: "7",
        value: "7"
      },{
        label: "8",
        value: "8"
      },{
        label: "9",
        value: "9"
      },{
        label: "10",
        value: "10"
      }]
    }]
  },
  en: {
    basic: [{
      name: "",
      category: "", 
      type: "",     
      question: "Gender",
      options: [{
        label: "male",
        value: "1"
      },{
        label: "female",
        value: "0"
      }]
    },{
      name: "",
      category: "",  
      type: "",      
      question: "Birthday",
      options: [{
        label: "test01",
        value: "1"
      },{
        label: "test02",
        value: "0"
      }]
    },{
      name: "",
      category: "",  
      type: "",      
      question: "Marriage",
      options: [{
        label: "Married",
        value: "married"
      },{
        label: "Cohabitation",
        value: "cohabitation"
      },{
        label: "Divorced",
        value: "Ddvorced"
      },{
        label: "Separation",
        value: "separation"
      },{
        label: "Widowed",
        value: "widowed"
      },{
        label: "Single",
        value: "single"
      },{
        label: "Others",
        value: "others"
      }]
    },{
      name: "",
      category: "",   //问题类型
      type: "",       //问答类型
      question: "Occupation",
      options: [{
        label: "OccupationA",
        value: "1"
      },{
        label: "OccupationB",
        value: "0"
      }]
    },{
      name: "",
      category: "",   //问题类型
      type: "",       //问答类型
      question: "Family Income",
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
        label: "Others",
        value: "others"
      }]
    },{
      name: "",
      category: "",   //问题类型
      type: "",       //问答类型
      question: "Education",
      options: [{
        label: "Elementary school",
        value: "elementary"
      },{
        label: "Junior high school",
        value: "junior"
      },{
        label: "Senior high school",
        value: "senior"
      },{
        label: "College",
        value: "college"
      },{
        label: "Master",
        value: "master"
      },{
        label: "Doctor",
        value: "doctor"
      },{
        label: "Others",
        value: "others"
      }]
    }],
    smoking: [{
      name: "smokingFlag",
      category: "",   
      type: "",       
      question: "Do you currently use tobacco?",
      options: [{
        label: "no",
        value: "0"
      },{
        label: "quit，<6 months",
        value: "6"
      },{
        label: "quit，≧6 months",
        value: "10"
      },{
        label: "Yes",
        value: "1"
      }]
    }],
    smokingOne: [{
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
    }],
    smokingTow: [{
      name: "",
      category: "",   
      type: "",       
      question: "How long has it been since you quit?",
      options: [{
        label: "6 ~ 12 months",
        value: "1"
      },{
        label: "13 ~ 24 months",
        value: "2"
      },{
        label: "3 ~ 14 years",
        value: "14"
      },{
        label: "After 15 years",
        value: "15"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "Do you still have any urges to use tobacco or any challenges to remaining tobacco free?",
      options: [{
        label: "No, it don’t have any challenges",
        value: false
      },{
        label: "Yes, it have challenges to remaining tobacco free",
        value: true
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "Before you quit How long have you smoke?",
      options: [{
        label: "just quit",
        value: "0"
      },{
        label: "1 year",
        value: "0"
      },{
        label: "3 years",
        value: "3"
      },{
        label: "5 years",
        value: "5"
      },{
        label: "10 years",
        value: "10"
      },{
        label: "after 10 years",
        value: "20"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How many cigarettes per day do you smoke?",
      options: [{
        label: "≤10 cigarette(s)/day",
        value: "10"
      },{
        label: "11-20 cigarette(s)/day",
        value: "20"
      },{
        label: "21-30 cigarette(s)/day",
        value: "30"
      },{
        label: "≧31 cigarette(s)/day",
        value: "40"
      }]
    }],
    smokingThree: [{
      name: "",
      category: "",   
      type: "",       
      question: "How long has it been since you quit?",
      options: [{
        label: "Within 2 weeks",
        value: "2"
      },{
        label: "3-4 weeks",
        value: "5"
      },{
        label: "5-12 weeks",
        value: "12"
      },{
        label: "13-26 weeks",
        value: "26"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "What method do you choose?(Multiple choices)",
      options: [{
        label: "Quit by yourself",
        value: "self"
      },{
        label: "Nicotine Patch",
        value: "nicotinePatch"
      },{
        label: "nicotineGym",
        value: "nicotineGym"
      },{
        label: "nicotineLozenge",
        value: "nicotineLozenge"
      },{
        label: "Bupropion",
        value: "bupropion"
      },{
        label: "Varenicline",
        value: "varenicline"
      },{
        label: "Counseling",
        value: "counseling"
      },{
        label: "Quit tobacco helpline",
        value: "quitTobaccoHelpline"
      },{
        label: "Smoking cessation clinic",
        value: "smokingCessationClinic"
      },{
        label: "Others",
        value: "others"
      }]
    },{
      name: "",
      category: "",
      type: "", 
      question: "Do you have any challenges to remaining tobacco free?",
      options: [{
        label: "No, it don’t have any challenges.",
        value: false
      },{
        label: "Yes, it have challenges to remaining tobacco free.",
        value: true
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "Before you quit How long have you smoke?",
      options: [{
        label: "now",
        value: "0"
      },{
        label: "1 year",
        value: "0"
      },{
        label: "3 years",
        value: "3"
      },{
        label: "5 years",
        value: "5"
      },{
        label: "10 years",
        value: "10"
      },{
        label: "after 10 years",
        value: "20"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How many cigarettes per day do you smoke?",
      options: [{
        label: "≤10 cigarette(s)/day",
        value: "10"
      },{
        label: "11-20 cigarette(s)/day",
        value: "20"
      },{
        label: "21-30 cigarette(s)/day",
        value: "30"
      },{
        label: "≧31 cigarette(s)/day",
        value: "40"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How soon after you wake up do you smoke your first cigarette?",
      options: [{
        label: "Within 5mins",
        value: "5"
      },{
        label: "≤6-30mins",
        value: "30"
      },{
        label: "31-60mins",
        value: "60"
      },{
        label: "After 60mins",
        value: "100"
      }]
    }],
    smokingFour: [{
      name: "",
      category: "",   
      type: "",       
      question: "Before you quit How long have you smoke?",
      options: [{
        label: "now",
        value: "0"
      },{
        label: "1 year",
        value: "0"
      },{
        label: "3 years",
        value: "3"
      },{
        label: "5 years",
        value: "5"
      },{
        label: "10 years",
        value: "10"
      },{
        label: "after 10 years",
        value: "20"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How many cigarettes per day do you smoke?",
      options: [{
        label: "≤10 cigarette(s)/day",
        value: "10"
      },{
        label: "11-20 cigarette(s)/day",
        value: "20"
      },{
        label: "21-30 cigarette(s)/day",
        value: "30"
      },{
        label: "≧31 cigarette(s)/day",
        value: "40"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How soon after you wake up do you smoke your first cigarette?",
      options: [{
        label: "Within 5mins",
        value: "5"
      },{
        label: "≤6-30mins",
        value: "30"
      },{
        label: "31-60mins",
        value: "60"
      },{
        label: "After 60mins",
        value: "100"
      }]
    },{
      name: "",
      category: "",   
      type: "",       
      question: "How many times have you ever quit seriously?",
      options: [{
        label: "Never",
        value: "0"
      },{
        label: "1 times",
        value: "1"
      },{
        label: "2-4times",
        value: "3"
      },{
        label: "5-9times",
        value: "7"
      },{
        label: "After 10 times",
        value: "10"
      }]
    }]
  }
}


export default questions;