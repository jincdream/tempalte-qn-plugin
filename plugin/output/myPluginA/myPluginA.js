const Bridge = require("../../bridge")
const openAPI = Bridge.getBridge()
console.log(openAPI, "openAPI")
Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {
    // 容器透传进来的数据
    openAPI.getData().then(a => {
      console.log(a)
    })
    console.log(this.props.context)
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
