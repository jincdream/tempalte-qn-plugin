/**
 * 容器API注入
 */
import { OpenAPI } from 'mii-open-api'
const plugin = requirePlugin("myPlugin")
// 不可更改的 api 对象
let openAPIs = new OpenAPI("myPlugin", {
  sendCard: async (params) => {
    console.info("sendCard:",params)
    return { success: true }
  },
  openChat: async (params) => {
    console.info("openChat:",params)
    return { success: true }
  }
})
// 注入
plugin.setBridge(openAPIs.get())

// 服务设置
plugin.server.onPost({
  path: "/test/post"
}, async (body)=>{
  console.log("post:",{body})
  my.alert({content: `容器接受到数据: ${JSON.stringify({body})}`})
})

plugin.server.onGet({
  path: "/test/get"
}, async (data)=>{
  console.log("get:",{data})
  return Date.now()
})

Page({
  onLoad(query) {
    // 页面加载
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  navigateToPlugin() {

  }
});
