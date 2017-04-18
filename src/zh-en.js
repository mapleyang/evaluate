import Questions from "./contents/questions"
import Plan from "./contents/plan"
import createPlan from "./contents/createPlan"
import Knowledge from "./contents/knowledge"  
const ZH_EN = {
  "zh": {
    "header.menu.home": "主页",
    "header.menu.active": "无烟世界",
    "header.menu.project": "戒烟方案",
    "header.menu.mark": "戒烟打卡",
    "header.menu.mine": "我的健康之路",
    "header.menu.knowledge": "烟草知识",
    "header.menu.more": "更多",
    "analysis.questions": Questions.zh,
    "analysis.plan": Plan.zh,
    "plan.createPlan": createPlan.zh,
    "knowledge": Knowledge.zh,
  },
  "en": {
    "header.menu.home": "Home",
    "header.menu.active": "Smoke-free World",
    "header.menu.project": "Quit project",
    "header.menu.mark": "Quit mark",
    "header.menu.mine": "My health road",
    "header.menu.knowledge": "Knowledge",
    "header.menu.more": "More",
    "analysis.questions": Questions.en,
    "analysis.plan": Plan.en,
    "plan.createPlan": createPlan.en,
    "knowledge": Knowledge.en,
  }
}

export default ZH_EN;
