const createPlan = {
  zh: {
    smokingSence: {
      title: "找出吸烟诱因",
      extra: "最开始戒烟最好避免诱因。在戒烟后，也可采用其他应对办法。",
      emotional: {
        title: "情绪诱因",
        options: [{
          label: "压力大时",
          value: "stressed"
        },{
          label: "焦虑时",
          value: "anxious"
        },{
          label: "情绪低落时",
          value: "down"
        },{
          label: "孤单时",
          value: "lonely"
        },{
          label: "无聊时",
          value: "boring"
        },{
          label: "吵架后",
          value: "fight"
        }]
      },
      habitual: {
        title: "习惯诱因",
        options: [{
          label: "早晨起床后",
          value: "up"
        },{
          label: "吃完饭",
          value: "meal"
        },{
          label: "工作间休",
          value: "workBreak"
        },{
          label: "看电视时",
          value: "tv"
        },{
          label: "饮酒时",
          value: "alcohol"
        },{
          label: "饮咖啡时",
          value: "coffee"
        },{
          label: "做爱后",
          value: "sex"
        },{
          label: "通话时",
          value: "phone"
        }]
      },
      social: {
        title: "社交诱因",
        options: [{
          label: "聚餐",
          value: "dinner"
        },{
          label: "聚会",
          value: "party"
        },{
          label: "节假日",
          value: "festival"
        },{
          label: "看到他人吸烟",
          value: "someone"
        },{
          label: "上酒吧",
          value: "bar"
        }]
      }
    }
  },
  en: {
    smokingSence: {
      title: "Identify Your Smoking Triggers",
      extra: "最开始戒烟最好避免诱因。在戒烟后，也可采用其他应对办法。",
      emotional: {
        title: "Emotional",
        options: [{
          label: "Feeling stressed",
          value: "stressed"
        },{
          label: "Feeling anxious",
          value: "anxious"
        },{
          label: "Feeling lonely",
          value: "lonely"
        },{
          label: "Feeling down",
          value: "down"
        },{
          label: "Feeling boring",
          value: "boring"
        },{
          label: "Cooling off after a fight",
          value: "fight"
        }]
      },
      habitual: {
        title: "Habitual",
        options: [{
          label: "After get up",
          value: "up"
        },{
          label: "Finishing a meal",
          value: "meal"
        },{
          label: "Work break",
          value: "workBreak"
        },{
          label: "Watching TV",
          value: "tv"
        },{
          label: "Drinking alcohol",
          value: "alcohol"
        },{
          label: "Drinking coffee",
          value: "coffee"
        },{
          label: "After having sex",
          value: "sex"
        },{
          label: "Talking on the phone",
          value: "phone"
        }]
      },
      social: {
        title: "Social",
        options: [{
          label: "Dinner Party",
          value: "dinner"
        },{
          label: "Party",
          value: "party"
        },{
          label: "During festival",
          value: "festival"
        },{
          label: "Seeing someone else smoking",
          value: "someone"
        },{
          label: "Going to a bar",
          value: "bar"
        }]
      }
    }
  }
}

export default createPlan;