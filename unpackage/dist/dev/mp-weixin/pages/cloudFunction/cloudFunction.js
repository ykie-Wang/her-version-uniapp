"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    add() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      common_vendor.Bs.callFunction({
        name: "add",
        data: {
          product: "uniCloud",
          create_time: Date.now()
        }
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `成功添加一条数据，文档id为：${res.result.id}`,
          showCancel: false
        });
        console.log(res);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `添加数据失败，错误信息为：${err.message}`,
          showCancel: false
        });
        console.error(err);
      });
    },
    remove() {
      common_vendor.index.showLoading({
        title: "处理中..."
      });
      common_vendor.Bs.callFunction({
        name: "remove"
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: res.result.msg,
          showCancel: false
        });
        console.log(res);
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
      common_vendor.Bs.callFunction({
        name: "update",
        data: {
          product: "uni-app",
          create_time: Date.now()
        }
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: res.result.msg,
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
      common_vendor.Bs.callFunction({
        name: "get"
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
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
      console.log("请确保自己已经阅读并按照公用模块文档操作 https://uniapp.dcloud.io/uniCloud/cf-common");
      common_vendor.Bs.callFunction({
        name: "use-common"
      }).then((res) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: "云函数use-common返回结果：" + JSON.stringify(res.result),
          showCancel: false
        });
        console.log(res);
      }).catch((err) => {
        common_vendor.index.hideLoading();
        common_vendor.index.showModal({
          content: `云函数use-common执行失败，错误信息为：${err.message}`,
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
  return {
    a: common_vendor.o((...args) => $options.add && $options.add(...args)),
    b: common_vendor.o((...args) => $options.remove && $options.remove(...args)),
    c: common_vendor.o((...args) => $options.update && $options.update(...args)),
    d: common_vendor.o((...args) => $options.get && $options.get(...args)),
    e: common_vendor.o((...args) => $options.useCommon && $options.useCommon(...args)),
    f: common_vendor.o((...args) => $options.toRedisPage && $options.toRedisPage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/cloudFunction/cloudFunction.vue"]]);
wx.createPage(MiniProgramPage);
