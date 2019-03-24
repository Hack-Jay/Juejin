// url parse : https://juejin.im/post/5c75d34851882564965edb23
const urlParse = (url) => {
  let urlP = url.startsWith("https://") ? url.replace('https://', '') : url
  urlP = urlP.split('/')
  return urlP[urlP.length - 1]
}

const getDateTimeStamp = (strtime) => {
  let date = new Date(strtime);
  return date.getTime()
}

const timeago = (dateTimeStamp) => {
  // dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  let minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
  let hour = minute * 60;
  let day = hour * 24;
  let week = day * 7;
  let halfamonth = day * 15;
  let month = day * 30;

  let now = new Date().getTime(); //获取当前时间毫秒
  let diffValue = now - dateTimeStamp; //时间差

  if (diffValue < 0) {
    return;
  }

  let minC = diffValue / minute; //计算时间差的分，时，天，周，月
  let hourC = diffValue / hour;
  let dayC = diffValue / day;
  let weekC = diffValue / week;
  let monthC = diffValue / month;

  let result
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else
    result = "刚刚";
  return result;
}

const timeFormat = (strTime) => {
  const time = getDateTimeStamp(strTime)
  const result = timeago(time)
  return result
}

export {
  urlParse,
  timeFormat
}
