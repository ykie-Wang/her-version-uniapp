"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    chooseAndUploadFile(file) {
      common_vendor.index.showLoading({
        title: "文件上传中..."
      });
      common_vendor.Bs.chooseAndUploadFile({
        type: "image",
        onChooseFile: (res) => {
          console.log(res);
          const processAll = [];
          for (let i = 0; i < res.tempFiles.length; i++) {
            processAll.push(this.cropImg(res.tempFiles[i]));
          }
          return Promise.all(processAll).then((fileList) => {
            let result = {
              tempFilePaths: []
            };
            result.tempFiles = fileList.map((fileItem, index) => {
              result.tempFilePaths.push(fileItem.path);
              return {
                path: fileItem.path,
                cloudPath: "" + Date.now() + index + "." + fileItem.ext,
                // 云端路径，这里随便生成了一个
                fileType: fileItem.fileType
              };
            });
            return result;
          });
        }
      }).then((res) => {
        console.log(res);
        common_vendor.index.showModal({
          content: JSON.stringify(res),
          showCancel: false
        });
      }).catch((err) => {
        console.log(err);
        common_vendor.index.showModal({
          content: JSON.stringify(err),
          showCancel: false
        });
      }).finally(() => {
        common_vendor.index.hideLoading();
      });
    },
    cropImg(file) {
      return new Promise((resolve, reject) => {
        let ext;
        let filePathProcessed = file.path;
        common_vendor.index.getImageInfo({
          src: file.path,
          success(info) {
            ext = info.type.toLowerCase();
            resolve({
              path: filePathProcessed,
              ext,
              fileType: file.fileType
            });
          },
          fail(err) {
            reject(new Error(err.errMsg || "未能获取图片类型"));
          }
        });
      });
    },
    upload() {
      new Promise((resolve, reject) => {
        common_vendor.index.chooseImage({
          count: 1,
          success: (res) => {
            const path = res.tempFilePaths[0];
            common_vendor.index.getImageInfo({
              src: path,
              success(info) {
                const options = {
                  filePath: path,
                  cloudPath: Date.now() + "." + info.type.toLowerCase()
                };
                resolve(options);
              },
              fail(err) {
                reject(new Error(err.errMsg || "未能获取图片类型"));
              }
            });
          },
          fail: () => {
            reject(new Error("Fail_Cancel"));
          }
        });
      }).then((options) => {
        common_vendor.index.showLoading({
          title: "文件上传中..."
        });
        return common_vendor.Bs.uploadFile({
          ...options,
          onUploadProgress(e) {
            console.log(e);
          }
        });
      }).then((res) => {
        common_vendor.index.hideLoading();
        console.log(res);
        common_vendor.index.showModal({
          content: "图片上传成功，fileId为：" + res.fileID,
          showCancel: false
        });
      }).catch((err) => {
        common_vendor.index.hideLoading();
        console.log(err);
        if (err.message !== "Fail_Cancel") {
          common_vendor.index.showModal({
            content: `图片上传失败，错误信息为：${err.message}`,
            showCancel: false
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_j_link2 = common_vendor.resolveComponent("j-link");
  _easycom_j_link2();
}
const _easycom_j_link = () => "../../components/j-link/j-link.js";
if (!Math) {
  _easycom_j_link();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      text: "参考",
      url: "https://uniapp.dcloud.io/uniCloud/quickstart?id=%e5%b0%8f%e7%a8%8b%e5%ba%8f%e4%b8%ad%e4%bd%bf%e7%94%a8unicloud%e7%9a%84%e7%99%bd%e5%90%8d%e5%8d%95%e9%85%8d%e7%bd%ae"
    }),
    b: common_vendor.o((...args) => $options.upload && $options.upload(...args)),
    c: common_vendor.o(($event) => $options.chooseAndUploadFile())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/wangyuting/code/her-vision-uniapp/her-vision-uniapp/pages/storage/storage.vue"]]);
wx.createPage(MiniProgramPage);
