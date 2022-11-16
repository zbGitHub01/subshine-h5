
// 判断项目还是活动
export const getTitle = type => {
  return Number(type) === 0? '阳光工程活动':'阳光工程案例';
};
