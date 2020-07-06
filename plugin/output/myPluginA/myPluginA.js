const Bridge = require("../../bridge")
const openAPI = Bridge.getAPI()
console.log(openAPI,"openAPI")
  // openAPI.getData = {}

Component({
  mixins: [],
  data: {},
  props: {},
  didMount() {
    // 容器透传进来的数据

openAPI.getData({a: 1}).then(a=>{
console.log(a)

})
    console.log(this.props.context)
    
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
