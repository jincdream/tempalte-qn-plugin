import {OpenAPI} from 'mii-open-api'
var plugin = requirePlugin("myPlugin");
let openAPIs = new OpenAPI("myPlugin",{
  getUser: async()=>{
    return {nick: "jinc"}
  },
  getData: async()=>{
    return {data: 123}
  }
})
plugin.setBridge(openAPIs.get())

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
