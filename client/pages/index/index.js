var plugin = requirePlugin("myPlugin");
import ActionCore from "action-core"

class OpenAPI extends ActionCore {
  constructor(bizCode, apis) {
    super()
    this.install("openAPI", async function ({ data, target }) {
      let fn = apis[target] || async function (args) { console.log(args); return { success: true } }
      return await fn(data)
    })
    this.bizCode = bizCode
    return new Proxy({}, {
      set: () => false,
      defineProperty: () => false,
      getPrototypeOf: () => false,
      setPrototypeOf: () => false,
      deleteProperty: () => false,
      apply: () => false,
      get: (obj, props) => {
        return async (data) => {
          console.log(obj, props, data)
          return await this.run({
            type: "openAPI",
            target: props,
            bizCode,
            data
          })
        }
      }
    })
  }
}
plugin.setBridge(new OpenAPI(plugin.code))
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
