"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputValue: "uniCloud-secure-network"
    };
  },
  methods: {
    getBySecretType(secretType) {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      common_vendor.Bs.callFunction({
        name: "secure-network",
        data: {
          value: this.inputValue
        },
        secretType,
        success: (res) => {
          common_vendor.index.showModal({
            content: JSON.stringify(res.result),
            showCancel: false
          });
        },
        fail: (err) => {
          common_vendor.index.showModal({
            content: err.message,
            showCancel: false
          });
          console.error(err);
        },
        complete: () => {
          common_vendor.index.hideLoading();
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.inputValue,
    b: common_vendor.o(($event) => $data.inputValue = $event.detail.value),
    c: common_vendor.o(($event) => $options.getBySecretType("both")),
    d: common_vendor.o(($event) => $options.getBySecretType("request")),
    e: common_vendor.o(($event) => $options.getBySecretType("response"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/secure-network/cloud-function.vue"]]);
wx.createPage(MiniProgramPage);
