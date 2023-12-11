"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/cloudFunction/cloudFunction.js";
  "./pages/cloudObject/cloudObject.js";
  "./pages/secure-network/cloud-function.js";
  "./pages/secure-network/cloud-object.js";
  "./pages/test/test.js";
  "./pages/clientDB/unicloud-db-demo/unicloud-db-demo.js";
  "./pages/clientDB/demo/demo.js";
  "./pages/clientDB/permission-table-simple/permission-table-simple.js";
  "./pages/clientDB/permission-table-compound/permission-table-compound.js";
  "./pages/clientDB/clientDB.js";
  "./pages/user-info/add.js";
  "./pages/user-info/edit.js";
  "./pages/user-info/list.js";
  "./pages/user-info/detail.js";
  "./pages/storage/storage.js";
  "./pages/schema2code/schema2code.js";
  "./pages/clientDB/permission/permission.js";
  "./pages/clientDB/permission-demo/permission-demo.js";
  "./pages/clientDB/permission-demo/readme.js";
  "./pages/clientDB/permission-field-simple/permission-field-simple.js";
  "./pages/clientDB/clientDB-api/clientDB-api.js";
  "./pages/clientDB/validate/validate.js";
  "./pages/validate-demo/add.js";
  "./pages/validate-demo/edit.js";
  "./pages/validate-demo/list.js";
  "./pages/validate-demo/detail.js";
  "./pages/webview/webview.js";
  "./uni_modules/uni-upgrade-center-app/pages/upgrade-popup.js";
  "./pages/cloudFunction/redis/redis.js";
  "./uni_modules/uni-upgrade-center/pages/version/list.js";
  "./uni_modules/uni-upgrade-center/pages/version/add.js";
  "./uni_modules/uni-upgrade-center/pages/version/detail.js";
}
const _sfc_main = {
  onLaunch: async function() {
    console.log("App Launch");
    common_vendor.Bs.initSecureNetworkByWeixin();
  },
  mounted() {
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
