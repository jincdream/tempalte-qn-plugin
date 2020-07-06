
const g = typeof global !== 'undefined' ? global : self;
g.appXPluginsConfig = g.appXPluginsConfig || {};
g.appXPluginsConfig['3000000004024431'] = {
  "publicComponents": {
    "plugin-a": "output/myPluginA/myPluginA"
  }
};

require('../../../../plugin/output/myPluginA/myPluginA?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
