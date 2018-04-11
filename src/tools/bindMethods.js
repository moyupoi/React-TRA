// 判断浏览器
export function browserType () {
  let ua = navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i)) {
    return 'weChat'
  }
  if (ua.match(/AlipayClient/i)) {
    return 'alipay'
  }
}

export function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let dataRegex = new RegExp('^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$')
  var r = window.location.search.substr(1).match(reg)
  if (r != null && !dataRegex.test(r[2])) {
    return unescape(r[2])
  }
}

// 分享
export function saShare (name, type, platform, url) {
  console.log(123)
}
