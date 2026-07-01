/** 浙江省非经营性备案：悬挂「网站备案号」，链接至工信部备案管理系统 */
export const icp = {
  number: "浙ICP备2026047063号-1",
  url: "https://beian.miit.gov.cn/",
} as const;

/** 公安备案：链接至全国互联网安全管理服务平台 */
export const psb = {
  number: "浙公网安备33010802014590号",
  url: "https://beian.mps.gov.cn/#/query/webSearch?code=33010802014590",
  icon: "/beian-ga.png",
} as const;
