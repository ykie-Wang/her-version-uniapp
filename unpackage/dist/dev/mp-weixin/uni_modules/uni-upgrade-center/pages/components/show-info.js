"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    content: String,
    top: {
      type: [Number, String],
      default: -60
    },
    left: {
      type: [Number, String],
      default: -100
    },
    width: {
      type: [Number, String],
      default: 200
    }
  },
  data() {
    return {
      showStableInfo: false,
      arrowStyle: {}
    };
  },
  methods: {
    mouseenter(e) {
      this.showStableInfo = true;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.mouseenter),
    b: common_vendor.o(($event) => $data.showStableInfo = false),
    c: common_vendor.p({
      type: "info"
    }),
    d: $data.showStableInfo
  }, $data.showStableInfo ? {
    e: common_vendor.t($props.content),
    f: `${$props.top}px`,
    g: `${$props.left}px`,
    h: `${$props.width}px`
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dfd997fc"], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/uni_modules/uni-upgrade-center/pages/components/show-info.vue"]]);
wx.createComponent(Component);
