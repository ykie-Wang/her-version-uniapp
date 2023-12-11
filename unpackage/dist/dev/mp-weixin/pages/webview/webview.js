"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  async onLoad({ url, title }) {
    this.url = url;
    title ? common_vendor.index.setNavigationBarTitle({ title }) : "";
  },
  data() {
    return {
      url: ""
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.url
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/webview/webview.vue"]]);
wx.createPage(MiniProgramPage);
