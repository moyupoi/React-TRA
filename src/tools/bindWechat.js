import { saShare } from 'tools/bindMethods'

export function bindWechat (title, desc, img, opts = {}) {
  let ua = navigator.userAgent.toLowerCase()
  if(!ua.match(/MicroMessenger/i)) {
    return
  }
  // opts 分享的字段
  let shareData = {
    title: title,
    desc: desc,
    link: document.documentURI,
    imgUrl: (img || 'http://7s1qwk.com1.z0.glb.clouddn.com/_s/zbjwx2.png'),
    success: function (res) {
      if (opts) {
        switch (res.errMsg) {
          case 'shareTimeline:ok':
            // 朋友圈
            saShare(opts.name, opts.type, '微信朋友圈', document.documentURI)
            break
          case 'sendAppMessage:ok':
            // 微信好友或者群组
            saShare(opts.name, opts.type, '微信分享', document.documentURI)
            break
          case 'shareQQ:ok':
            // QQ
            saShare(opts.name, opts.type, 'QQ分享', document.documentURI)
            break
          case 'shareQZone:ok':
            // QQZone
            saShare(opts.name, opts.type, 'QQ空间', document.documentURI)
            break
          case 'shareWeiboApp:ok':
            // QQ微博
            saShare(opts.name, opts.type, '腾讯微博', document.documentURI)
            break
          default:
            console.log('err')
        }
        // 用户分享后回调函数，这里写SA事件
        // res.errMsg
        // shareTimeline:ok 朋友圈
        // sendAppMessage:ok 微信好友或者群组
        // shareQQ:ok  QQ
        // shareQZone:ok QQZone
        // shareWeiboApp:ok  QQ微博
      }
    }
  }
  wx.ready(function () {
    // 分享微信好友或群组
    wx.onMenuShareAppMessage(shareData)
    // 分享朋友圈
    wx.onMenuShareTimeline(shareData)
    //  分享QQ
    wx.onMenuShareQQ(shareData)
    // 分享腾讯微博
    wx.onMenuShareWeibo(shareData)
    // 分享QQ空间
    wx.onMenuShareQZone(shareData)
  })
}
