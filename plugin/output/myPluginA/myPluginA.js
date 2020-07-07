/**
 * 与容器通信的连接
 */
const Bridge = require("../../bridge")
const openAPI = Bridge.getBridge()
console.log(openAPI, "openAPI")

Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {
    // 调用容器API
    openAPI.getData().then(a => {
      console.log(a)
    })

    // 容器透传进来的数据
    console.log(this.props.context)
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
