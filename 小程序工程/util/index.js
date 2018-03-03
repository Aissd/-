// JavaScript 工具包
const formatTime = (time) => {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

const formatLocation = (longitude, latitude) => {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

// 数组去重
const uniqueArr = (arr) => {
    return Array.from(new Set(arr)).sort();
}

// 验证数组
const isArray = (obj) => {
    return toString.call(obj) == '[object Array]';
}

/**
 * 构造参数
 * query 参数对象
 * 返回 ?x=1&y=2
 */

const handleParams = (query) => {
    let params = '';
    if (query) {
        params = '?';
        for (let i in query) {
            if (params == '?') {
                params += i + '=' + query[i]
            } else {
                params += '&' + i + '=' + query[i];
            }
        }
    }
    return params;
}

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  uniqueArr: uniqueArr,
  isArray: isArray,
  handleParams: handleParams
}
