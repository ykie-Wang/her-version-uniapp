"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      loadMore: {
        contentdown: "",
        contentrefresh: "",
        contentnomore: ""
      }
    };
  },
  onPullDownRefresh() {
    this.$refs.udb.loadData({
      clear: true
    }, () => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  onReachBottom() {
    this.$refs.udb.loadMore();
  },
  methods: {
    handleItemClick(id) {
      common_vendor.index.navigateTo({
        url: "./detail?id=" + id
      });
    },
    fabClick() {
      common_vendor.index.navigateTo({
        url: "./add",
        events: {
          // 监听新增数据成功后, 刷新当前页面数据
          refreshData: () => {
            this.$refs.udb.loadData({
              clear: true
            });
          }
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_unicloud_db2 = common_vendor.resolveComponent("unicloud-db");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_load_more2 + _easycom_unicloud_db2 + _easycom_uni_fab2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_unicloud_db = () => "../../node-modules/@dcloudio/uni-components/lib/unicloud-db/unicloud-db.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_load_more + _easycom_unicloud_db + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.w(({
      data,
      pagination,
      loading,
      hasMore,
      error
    }, s0, i0) => {
      return common_vendor.e({
        a: error
      }, error ? {
        b: common_vendor.t(error.message)
      } : data ? {
        d: common_vendor.f(data, (item, index, i1) => {
          return {
            a: common_vendor.t(item._id),
            b: index,
            c: common_vendor.o(($event) => $options.handleItemClick(item._id), index),
            d: "12f3e062-2-" + i0 + "-" + i1 + "," + ("12f3e062-1-" + i0)
          };
        }),
        e: common_vendor.p({
          showArrow: true,
          clickable: true
        }),
        f: "12f3e062-1-" + i0 + ",12f3e062-0"
      } : {}, {
        c: data,
        g: "12f3e062-3-" + i0 + ",12f3e062-0",
        h: common_vendor.p({
          status: loading ? "loading" : hasMore ? "more" : "noMore"
        }),
        i: i0,
        j: s0
      });
    }, {
      name: "d",
      path: "a",
      vueId: "12f3e062-0"
    }),
    b: common_vendor.sr("udb", "12f3e062-0"),
    c: common_vendor.p({
      collection: "user-info,book,opendb-city-china",
      field: "username,gender,birth_date,weight,mobile,email,url,favorite_book_id{title},address_code{name},party_member,hobby,comment"
    }),
    d: common_vendor.sr("fab", "12f3e062-4"),
    e: common_vendor.o($options.fabClick),
    f: common_vendor.p({
      horizontal: "right",
      vertical: "bottom",
      ["pop-menu"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/user-info/list.vue"]]);
wx.createPage(MiniProgramPage);
