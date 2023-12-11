"use strict";
const common_vendor = require("../../common/vendor.js");
let canUse = true, cloudObjectDemo;
if (common_vendor.Bs.importObject) {
  cloudObjectDemo = common_vendor.Bs.importObject("cloud-object-demo");
} else {
  canUse = false;
}
const _sfc_main = {
  data() {
    return {
      canUse
    };
  },
  methods: {
    add() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      cloudObjectDemo.add({
        product: "uniCloud",
        create_time: Date.now()
      }).then((res) => {
        console.log(res);
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `成功添加一条数据，文档id为：${res.id}`,
          showCancel: false
        });
      }).catch((err) => {
        console.error(err);
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `添加数据失败，错误信息为：${err.message}`,
          showCancel: false
        });
      });
    },
    remove() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      cloudObjectDemo.remove().then((res) => {
        console.log(res);
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: res.msg,
          showCancel: false
        });
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `删除失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    update() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      cloudObjectDemo.update({
        product: "uni-app",
        create_time: Date.now()
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: res.msg,
          showCancel: false
        });
        console.log(res);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `更新操作执行失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    get() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      cloudObjectDemo.get().then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询成功，获取数据列表为：${JSON.stringify(res)}`,
          showCancel: false
        });
        console.log(res);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    useCommon() {
      cloudObjectDemo.useCommon().then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: "云对象使用公共模块返回结果：" + JSON.stringify(res),
          showCancel: false
        });
        console.log(res);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `云对象使用公共模块执行失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    toRedisPage() {
      common_vendor.index.navigateTo({
        url: "/pages/cloudFunction/redis/redis"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.canUse
  }, $data.canUse ? {
    b: common_vendor.o((...args) => $options.add && $options.add(...args)),
    c: common_vendor.o((...args) => $options.remove && $options.remove(...args)),
    d: common_vendor.o((...args) => $options.update && $options.update(...args)),
    e: common_vendor.o((...args) => $options.get && $options.get(...args)),
    f: common_vendor.o((...args) => $options.useCommon && $options.useCommon(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/cloudObject/cloudObject.vue"]]);
wx.createPage(MiniProgramPage);
