/**
 * 与容器通信的连接
 */
const Bridge = require("../../bridge")
const {client} = Bridge
const openAPI = Bridge.getBridge()


Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {
    // 容器透传进来的数据
    console.log("context:",this.props.context)
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    post(){
      // 给容器发送post请求
      client.post({
        path: "/test/post",
        body: {}
      })
    },
    async get(){
      // 给容器发送get请求
      let res = await client.get({
        path: "/test/get",
        data: {}
      })
      console.log(res)
      my.alert({
        content: res
      })
    },
    async sendCard(){
      // 调用容器API
      await openAPI.sendCard({
        itemId: 12345
      })
    },
    async openChat(){
      // 调用容器API
      await openAPI.openChat({
        nick: "随便买买"
      })
    },
  },
});
