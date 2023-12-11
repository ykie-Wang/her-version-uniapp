"use strict";
const common_vendor = require("../../../common/vendor.js");
const db = common_vendor.Bs.database();
const ptDb = db.collection("permission-test");
const alertCode = () => "../../../components/alertCode/alertCode.js";
const uniNoticeBar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _sfc_main = {
  components: {
    uniNoticeBar,
    alertCode
  },
  data() {
    return {
      currentRole: ""
    };
  },
  mounted() {
    common_vendor.index.setStorageSync("uni_id_token", "");
    common_vendor.index.setStorageSync("uni_id_token_expired", "");
  },
  onShow() {
    this.$nextTick(() => {
      this.$refs["set-permission"].init(0);
    });
  },
  methods: {
    toDemo() {
      common_vendor.index.navigateTo({
        url: "./permission-demo"
      });
    },
    previewImage(url) {
      common_vendor.index.previewImage({
        urls: [url]
      });
    },
    addFn() {
      common_vendor.index.showLoading({ mask: true });
      ptDb.add({
        nickname: "默认昵称",
        username: "默认姓名",
        phone: "18888888888"
      }).then((e) => {
        console.log(e);
        common_vendor.index.showModal({
          content: '成功写入一条数据：\n{ "nickname":"默认昵称",\n "username":"默认姓名",\n "phone":"18888888888" }',
          showCancel: false,
          confirmText: "知道了"
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showModal({
          title: "未登录游客不能写入数据",
          content: "请在底部工具条切换其他角色重试",
          showCancel: false,
          confirmText: "知道了"
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    removeFn() {
      common_vendor.index.showLoading({ mask: true });
      ptDb.remove().then((e) => {
        console.log(e, "123");
        common_vendor.index.showModal({
          content: JSON.stringify(e.result),
          showCancel: false,
          confirmText: "知道了"
        });
      }).catch((err) => {
        console.log(JSON.stringify(err));
        common_vendor.index.showModal({
          title: "当前角色没有该权限",
          content: `管理员角色不受schema限制，请在底部工具条切换为管理员角色重试`,
          showCancel: false,
          confirmText: "知道了"
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    updateNickname(self) {
    },
    updateFn(data, where = {}) {
      console.log(data);
      common_vendor.index.showLoading({ mask: true });
      ptDb.where(where).update(data).then((e) => {
        console.log(e);
        common_vendor.index.showModal({
          content: JSON.stringify(e.result),
          showCancel: false,
          confirmText: "知道了"
        });
      }).catch((err) => {
        if ("nickname" in data) {
          common_vendor.index.showModal({
            title: "被拒绝，普通用户角色，只能更新自己创建的数据。",
            content: "请在底部工具条切换为审核员角色重试",
            showCancel: false,
            confirmText: "知道了"
          });
        } else if ("state" in data) {
          common_vendor.index.showModal({
            title: "当前角色无该操作权限",
            content: "请在底部工具条切换为审核员角色重试",
            showCancel: false,
            confirmText: "知道了"
          });
        } else if ("username" in data) {
          if (Object.keys(where).length === 0) {
            common_vendor.index.showModal({
              title: "根据表级updat权限设置，普通用户角色限更新自己的数据",
              content: "请在底部工具条切换为审核员角色重试",
              showCancel: false,
              confirmText: "知道了"
            });
          } else {
            common_vendor.index.showModal({
              title: "被拒绝，更新的数据含字段state==0的数据",
              content: "请在底部工具条切换为审核员角色，将全部数据的state更新为1后重试",
              showCancel: false,
              confirmText: "知道了"
            });
          }
        } else {
          common_vendor.index.showModal({
            title: err.message,
            showCancel: false,
            confirmText: "知道了"
          });
        }
        console.log("错误------", err);
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    getFn(field = "uid,username,nickname,state") {
      common_vendor.index.showLoading({ mask: true });
      ptDb.field(field).get().then((e) => {
        console.log(e);
        if (e.result.data.length) {
          this.$refs.alertCode.open(e.result.data);
        } else {
          common_vendor.index.showModal({
            title: "查询执行成功",
            content: "但目前数据库为空,\n 请滚动页面找到【创建一条数据】点击后重试!",
            showCancel: false,
            confirmText: "知道了"
          });
        }
      }).catch((err) => {
        console.log(err, "err---");
        common_vendor.index.showModal({
          title: "当前角色无权访问含phone字段数据",
          content: "请在底部工具条切换其他角色重试",
          showCancel: false,
          confirmText: "知道了"
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    changePermission(e) {
      console.log(e, "切换完成");
      this.currentRole = e.role;
    }
  }
};
if (!Array) {
  const _easycom_alertCode2 = common_vendor.resolveComponent("alertCode");
  const _component_uniNoticeBar = common_vendor.resolveComponent("uniNoticeBar");
  const _easycom_page_head2 = common_vendor.resolveComponent("page-head");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_show_code2 = common_vendor.resolveComponent("show-code");
  const _easycom_set_permission2 = common_vendor.resolveComponent("set-permission");
  (_easycom_alertCode2 + _component_uniNoticeBar + _easycom_page_head2 + _easycom_uni_section2 + _easycom_show_code2 + _easycom_set_permission2)();
}
const _easycom_alertCode = () => "../../../components/alertCode/alertCode.js";
const _easycom_page_head = () => "../../../components/page-head/page-head.js";
const _easycom_uni_section = () => "../../../components/uni-section/uni-section.js";
const _easycom_show_code = () => "../../../components/show-code/show-code.js";
const _easycom_set_permission = () => "../../../components/set-permission/set-permission.js";
if (!Math) {
  (_easycom_alertCode + _easycom_page_head + _easycom_uni_section + _easycom_show_code + _easycom_set_permission)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("alertCode", "44bded3a-0"),
    b: common_vendor.p({
      showIcon: "true",
      iconType: "info",
      text: "管理员(admin)拥有任何权限,权限控制对其无效。"
    }),
    c: common_vendor.o((...args) => $options.toDemo && $options.toDemo(...args)),
    d: common_vendor.p({
      title: "表级权限控制",
      subTitle: "包括增删改查四种权限，分别称为：create、delete、update、read"
    }),
    e: common_vendor.p({
      title: "根据true和false控制数据库的相关操作",
      type: "circle"
    }),
    f: common_vendor.p({
      codes: {
        "permission": {
          "read": true
        }
      }
    }),
    g: common_vendor.o(($event) => $options.getFn("uid,username,nickname,state")),
    h: common_vendor.p({
      codes: {
        "permission": {
          "delete": false
        }
      }
    }),
    i: common_vendor.o((...args) => $options.removeFn && $options.removeFn(...args)),
    j: common_vendor.p({
      title: "根据操作的用户id、角色和权限数组",
      type: "circle"
    }),
    k: common_vendor.p({
      codes: {
        "permission": {
          "create": "auth.uid != null"
        }
      }
    }),
    l: common_vendor.o(($event) => $options.addFn()),
    m: common_vendor.p({
      title: "根据数据库中的目标数据记录",
      type: "circle"
    }),
    n: common_vendor.p({
      codes: {
        "permission": {
          "create": "auth.uid==doc.uid || AUDITOR in auth.role || UPDATE_USER_INFO in auth.permission"
        }
      }
    }),
    o: common_vendor.o(($event) => $options.updateFn({
      nickname: "新昵称"
    }, "uid == $env.uid")),
    p: common_vendor.o(($event) => $options.updateFn({
      nickname: "新昵称"
    })),
    q: common_vendor.p({
      title: "字段级权限控制"
    }),
    r: common_vendor.p({
      title: "修改指定字段需要特殊角色",
      type: "circle"
    }),
    s: common_vendor.p({
      codes: {
        "properties": {
          "state": {
            "permission": {
              "write": "AUDITOR in auth.role"
            }
          }
        }
      }
    }),
    t: common_vendor.o(($event) => $options.updateFn({
      state: 1
    })),
    v: common_vendor.p({
      title: "修改指定字段时,当前记录的某个字段应当满足某种条件",
      type: "circle"
    }),
    w: common_vendor.p({
      codes: {
        "properties": {
          "username": {
            "permission": {
              "write": "doc.state != 0"
            }
          }
        }
      }
    }),
    x: common_vendor.o(($event) => $options.updateFn({
      username: "新姓名"
    })),
    y: common_vendor.o(($event) => $options.updateFn({
      username: "新姓名"
    }, "uid == $env.uid")),
    z: common_vendor.p({
      title: "控制特殊字段不可读",
      type: "circle"
    }),
    A: common_vendor.p({
      codes: {
        "properties": {
          "phone": {
            "permission": {
              "read": "auth.uid != null"
            }
          }
        }
      }
    }),
    B: common_vendor.o(($event) => $options.getFn("uid,username,nickname,state")),
    C: common_vendor.o(($event) => $options.getFn("uid,username,nickname,state,phone")),
    D: common_vendor.sr("set-permission", "44bded3a-17"),
    E: common_vendor.o($options.changePermission)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-44bded3a"], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/clientDB/permission-demo/readme.vue"]]);
wx.createPage(MiniProgramPage);
