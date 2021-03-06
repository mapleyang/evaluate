const Content = {
  factor: {
    food: [{
      score: 0,
      content: "您的饮食很健康。饮食对健康至关重要，希望您能继续保持健康饮食习惯。",
      activty: ["订阅健康饮食资讯"]
    }, {
      score: 2,
      content: "您每周蔬菜和水果摄入量低于推荐标准。多摄入蔬菜水果可以降低疾病风险，建议您能增加蔬菜水果摄入。",
      activty: ["订阅健康饮食资讯"]
    }, {
      score: 3,
      content: "您每周蔬菜和水果摄入量显著低于推荐标准。多摄入蔬菜水果可以降低疾病风险，建议您能增加蔬菜水果摄入。",
      activty: ["订阅健康饮食资讯"]
    }],
    sport: [{
      score: 0,
      content: "您每周的体力活动量达到推荐标准。运动对健康至关重要，希望您能继续保持运动习惯。",
      activty: ["订阅GH活动资讯"]
    },{
      score: 2,
      activty: ["订阅GH活动资讯"],
      content: "您每周的体力活动量低于推荐标准。运动对健康至关重要，希望您能增加体力活动。",
    },{
      score: 3,
      activty: ["订阅GH活动资讯"],
      content: "您每周的体力活动量显著低于推荐标准。运动对健康至关重要，希望您能增加体力活动。",
    }],
    smoking: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "恭喜您不吸烟也无2手烟暴露。吸烟可以引起很多严重疾病，希望您能保持不吸烟的好习惯。"
    },{
      score: 1,
      activty: ["我想戒烟"],
      content: "您不吸烟但有经常的2手烟暴露。2手烟也可引起多种严重疾病，希望您能采取措施减少2手烟的暴露。"
    },{
      score: 3,
      activty: ["我想戒烟"],
      content: "您目前吸烟。吸烟可以引起多种严重疾病。为了您的健康，希望您能考虑戒烟。"
    }],
    drink: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "您不饮酒。过度饮酒可以引起多种严重疾病，希望您能保持不过度饮酒的好习惯。"
    },{
      score: 1,
      activty: ["订阅GH活动资讯"],
      content: "您没有过度饮酒。过度饮酒可以引起多种严重疾病，希望您能保持不过度饮酒的好习惯。"
    },{
      score: 3,
      activty: ["我想戒烟"],
      content: "您有过度饮酒。过度饮酒可以引起多种严重疾病，。为了您的健康，希望您能考虑戒烟"
    }],
    sleep: [{
      score: 0,
      activty: ["订阅睡眠健康资讯"],
      content: "恭喜您有健康的睡眠。睡眠对健康至关重要。希望您能继续保持健康的睡眠习惯。"
    }, {
      score: 1,
      activty: ["订阅睡眠健康资讯"],
      content: "您的睡眠时间不足。长期睡眠不足可引起很多健康问题。希望您能做出改变，保证充足睡眠时间",
    },{
      score: 3,
      activty: ["订阅睡眠健康资讯"],
      content: "您有睡眠障碍。睡眠障碍可以影响生活质量，也可以增加其他疾病风险。希望您及时就医。"
    }],
    secure: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "恭喜您有系安全带/戴头盔的好习惯。坐车系安全带和骑车戴头盔可以降低50%交通事故伤害。希望您能继续保持这一良好习惯。"
    }, {
      score: 1,
      activty: ["订阅安全资讯"],
      content: "您有时不系安全带/不戴头盔。坐车系安全带和骑车戴头盔可以降低50%交通事故伤害。希望您能每次坐车系安全带/骑车戴头盔。",
    },{
      score: 3,
      activty: ["订阅安全资讯"],
      content: "您经常不系安全带/不戴头盔。坐车系安全带和骑车戴头盔可以降低50%交通事故伤害。希望您能每次坐车系安全带/骑车戴头盔。"
    }],
    stress: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "您的压力不大。长期慢性压力过大可导致健康问题。希望您能继续良好地管理好压力。"
    }, {
      score: 1,
      activty: ["订阅压力管理资讯"],
      content: "您的压力较大。长期慢性压力过大可导致健康问题。希望您能关注您的压力状况，管理好您的压力。",
    },{
      score: 3,
      activty: ["订阅压力管理资讯"],
      content: "您的压力很大。长期慢性压力过大可导致健康问题。希望您能尽早采取措施，管理好您的压力。"
    }],
    dumps: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "恭喜您抑郁筛查为阴性。抑郁为常见疾患。"
    }, {
      score: 2,
      activty: ["就医推荐", "专家预约"],
      content: "您抑郁筛查为阳性。建议去医院检查，以排除抑郁症可能。",
    },{
      score: 3,
      activty: ["就医推荐", "专家预约"],
      content: "您抑郁筛查为阳性。建议去医院检查，以排除抑郁症可能。"
    }],
    fat: {
      weight: [{
        score: 0,
        activty: ["订阅GH活动资讯"],
        content: "您的BMI(身高体重指数）在正常范围。保持正常的BMI对健康非常重要。希望您能继续保持。"
      },{
        score: 1,
        activty: ["订阅体重管理资讯"],
        content: "您超重。超重会增加心血管疾病，糖尿病，以及多种癌症的风险。希望您能控制摄入，增加运动，逐渐达到健康体重。"
      },{
        score: 3,
        activty: ["订阅体重管理资讯"],
        content: "您的BMI(身高体重指数）达到肥胖。肥胖可增加心血管疾病，糖尿病，以及多种癌症的风险。希望您能控制摄入，增加运动，逐渐达到健康体重。"
      }],
      fat: [{
        score: 0,
        activty: ["订阅GH活动资讯"],
        content: "您的BMI(身高体重指数）在正常范围。保持正常的BMI对健康非常重要。希望您能继续保持。"
      },{
        score: 1,
        activty: ["订阅体重管理资讯"],
        content: "您超重。超重会增加心血管疾病，糖尿病，以及多种癌症的风险。希望您能控制摄入，增加运动，逐渐达到健康体重。"
      },{
        score: 3,
        activty: ["订阅体重管理资讯"],
        content: "您有中心型肥胖。中心型肥胖可增加心血管疾病，糖尿病等风险。希望您能增加运动，逐渐达到健康腰围。"
      }],
      content: "您的BMI(身高体重指数）达到肥胖。肥胖可增加心血管疾病，糖尿病，以及多种癌症的风险。希望您能控制摄入，增加运动，逐渐达到健康体重。",
      activty: ["订阅体重管理资讯"],
    },
    hypertension: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "您的血压正常。高血压是脑卒中等严重疾病的重要风险因素。健康的生活方式有助于预防高血压。"
    },{
      score: 2,
      activty: ["订阅GH活动资讯"],
      content: "您为高血压前期。高血压是脑卒中等严重疾病的重要风险因素。希望您能积极采取健康的生活方式， 预防高血压。"
    },{
      score: 3,
      activty: ["就医推荐"],
      content: "您的血压值达到高血压标准。高血压是脑卒中等严重疾病的重要风险因素。希望您能及时就医，将血压控制在正常范围。"
    }],
    diabetes: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "您的血糖正常。糖尿病可引起一系列并发症。健康的生活方式， 尤其健康体重有助于预防糖尿病。"
    },{
      score: 1,
      activty: ["订阅GH活动资讯"],
      content: "您的血糖异常（升高）。糖尿病可引起一系列并发症。希望您能积极采取健康的生活方式， 预防糖尿病。"
    },{
      score: 3,
      activty: ["就医推荐"],
      content: "您的血糖值值达到糖尿病标准。糖尿病可引起包括心脑血管疾病在内的一系列并发症。希望您能及时就医，将血糖控制在正常范围。"
    }],
    dyslipidemia: [{
      score: 0,
      activty: ["订阅GH活动资讯"],
      content: "您的血脂正常。血脂异常可增加心脑血管疾病的风险。健康的生活方式， 尤其是健康饮食有助于预防血脂异常。"
    },{
      score: 2,
      activty: ["订阅GH活动资讯"],
      content: "您的血脂正常。血脂异常可增加心脑血管疾病的风险。健康的生活方式， 尤其是健康饮食有助于预防血脂异常。"
    },{
      score: 3,
      activty: ["就医推荐"],
      content: "您的血脂异常。血脂异常可增加心脑血管疾病的风险。健康的生活方式， 尤其是健康饮食有助于控制血脂异常。"
    }]
  },
  diabetes: [{
    score: 7,
    content: "10年内得2型糖尿病风险： ≤1%",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 11,
    content: "10年内得2型糖尿病风险： 4%",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 14,
    content: "10年内得2型糖尿病风险： 17%",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 20,
    content: "10年内得2型糖尿病风险： 33%",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 100,
    content: "10年内得2型糖尿病风险： 50%",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 101,
    content: "患有糖尿病",
    activty: [{
      name: "就医推荐",
      target: ""
    }]
  }],
  angiocarpy: [{
    score: 4,
    content: "10年内缺血性心血管病事件发病风险：",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 5,
    content: "10年内缺血性心血管病事件发病风险：",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 10,
    content: "10年内缺血性心血管病事件发病风险：",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 20,
    content: "10年内缺血性心血管病事件发病风险：",
    activty: [{
      name: "就医推荐",
      target: ""
    },{
      name: "专家预约",
      target: ""
    }]
  },{
    score: 40,
    content: "10年内缺血性心血管病事件发病风险：",
    activty: [{
      name: "就医推荐",
      target: ""
    },{
      name: "专家预约",
      target: ""
    }]
  }],
  disorder: [{
    score: 0,
    content: "脑卒中(中风)风险极低",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 10,
    content: "脑卒中(中风)风险低",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 30,
    content: "脑卒中(中风)风险中危",
    activty: [{
      name: "订阅GH活动资讯",
      target: ""
    }]
  },{
    score: 100,
    content: "脑卒中(中风)风险高",
    activty: [{
      name: "就医推荐",
      target: ""
    },{
      name: "专家预约",
      target: ""
    }]
  },{
    score: 101,
    content: "脑卒中(中风)风险很高",
    activty: [{
      name: "就医推荐",
      target: ""
    },{
      name: "专家预约",
      target: ""
    }]
  }]
}

export default Content;