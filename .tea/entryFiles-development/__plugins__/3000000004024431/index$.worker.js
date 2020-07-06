require('@alipay/appx-compiler/lib/sjsEnvInit');
AFAppX.Plugin({ config: {
  "publicComponents": {
    "plugin-a": "output/myPluginA/myPluginA"
  }
},
mod: function() {return require('../../../../plugin/bridge');},
run: function(){
require('../../../../plugin/output/myPluginA/myPluginA?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
},
});