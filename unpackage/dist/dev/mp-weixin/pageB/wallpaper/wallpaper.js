(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pageB/wallpaper/wallpaper"],{

/***/ 170:
/*!****************************************************************************************************!*\
  !*** C:/Users/1/Documents/HBuilderProjects/guHub/main.js?{"page":"pageB%2Fwallpaper%2Fwallpaper"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _wallpaper = _interopRequireDefault(__webpack_require__(/*! ./pageB/wallpaper/wallpaper.vue */ 171));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_wallpaper.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 171:
/*!*********************************************************************************!*\
  !*** C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallpaper.vue?vue&type=template&id=850610ca&scoped=true& */ 172);
/* harmony import */ var _wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallpaper.vue?vue&type=script&lang=js& */ 174);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallpaper.vue?vue&type=style&index=0&id=850610ca&lang=scss&scoped=true& */ 176);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 47);

var renderjs





/* normalize component */

var component = Object(_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "850610ca",
  null,
  false,
  _wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pageB/wallpaper/wallpaper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 172:
/*!****************************************************************************************************************************!*\
  !*** C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=template&id=850610ca&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wallpaper.vue?vue&type=template&id=850610ca&scoped=true& */ 173);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_template_id_850610ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 173:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=template&id=850610ca&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    tnNavBar: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-nav-bar/tn-nav-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-nav-bar/tn-nav-bar")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-nav-bar/tn-nav-bar.vue */ 221))
    },
    tnModal: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-modal/tn-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-modal/tn-modal")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-modal/tn-modal.vue */ 236))
    },
    tnWaterfall: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-waterfall/tn-waterfall */ "tuniao-ui/components/tn-waterfall/tn-waterfall").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-waterfall/tn-waterfall.vue */ 257))
    },
    tnLazyLoad: function () {
      return __webpack_require__.e(/*! import() | tuniao-ui/components/tn-lazy-load/tn-lazy-load */ "tuniao-ui/components/tn-lazy-load/tn-lazy-load").then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue */ 264))
    },
    tnLoadMore: function () {
      return Promise.all(/*! import() | tuniao-ui/components/tn-load-more/tn-load-more */[__webpack_require__.e("common/vendor"), __webpack_require__.e("tuniao-ui/components/tn-load-more/tn-load-more")]).then(__webpack_require__.bind(null, /*! @/tuniao-ui/components/tn-load-more/tn-load-more.vue */ 271))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.navBarStyle])
  var s1 = _vm.__get_style([_vm.navBarStyle2])
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 174:
/*!**********************************************************************************************************!*\
  !*** C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wallpaper.vue?vue&type=script&lang=js& */ 175);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var _template_page_mixin = _interopRequireDefault(__webpack_require__(/*! @/libs/mixin/template_page_mixin.js */ 95));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'TemplateWallpaper',
  mixins: [_template_page_mixin.default],
  data: function data() {
    return {
      show1: false,
      cardCur: 0,
      swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603452-assets/web-upload/c206eac9-0690-436f-8c89-5e652503cfe6.jpeg'
      }, {
        id: 1,
        type: 'image',
        url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603386-assets/web-upload/13ccbeff-8878-41f5-abd9-96bb1aaa267a.jpeg'
      }, {
        id: 2,
        type: 'image',
        url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603492-assets/web-upload/9d4b96de-55f8-4808-83a7-9962be5b2477.jpeg'
      }, {
        id: 3,
        type: 'image',
        url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603381-assets/web-upload/15743f8a-2c04-4ab3-8140-1d93f58b094a.jpeg'
      }, {
        id: 4,
        type: 'image',
        url: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603530-assets/web-upload/ef2234e6-6419-4c2a-921b-927a61ecfffa.jpeg'
      }],
      /* 导航*/
      navBarRectInfo: {},
      navBarChangebaseLineHeight: 0,
      navBarStyle: {
        color: '#FFFFFF',
        opacity: 1,
        display: 'flex'
      },
      navBarStyle2: {
        color: 'rgba(255,255,255,0)',
        opacity: 1,
        display: 'flex'
      },
      navBarBackgroundColor: 'rgba(255, 255, 255, 0)',
      activeBgAnimation: {},
      /* 瀑布流*/
      loadStatus: 'loadmore',
      list: [],
      data: [{
        title: '酷炫外卖首页',
        userName: '试试就逝世',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603328-assets/web-upload/0506256f-4ea4-4b19-a0aa-b032e31eb0a2.jpeg',
        userImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1664005699098-assets/web-upload/e8b29292-72fc-4c1e-9d7c-fd9dba31cb62.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: true,
        // 是否为新品
        tags: ['首页', '美食'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 338
        }
      }, {
        title: '内容发布页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603332-assets/web-upload/83f4706e-9e88-4748-80dd-350b514b5c9e.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: ['表单', '新建'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 289
        }
      }, {
        title: '商品详情，带购物车动画',
        userName: '青梅煮马',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603396-assets/web-upload/a7f7dd1d-3618-4888-a20c-6b55a6aa69a4.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: true,
        // 是否为新品
        tags: ['男生头像', '情侣头像'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 381
        }
      }, {
        title: '简约个人中心页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603328-assets/web-upload/89c4931b-bbdf-413f-806f-e73f0d291e8d.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: true,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 526
        }
      }, {
        title: '消息通知页面',
        userName: '坟头草三米高',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603394-assets/web-upload/901c83d3-f0ef-4ef8-acd8-fe16934672e1.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 372
        }
      }, {
        title: '弹窗领红包',
        userName: '不许凶我',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603386-assets/web-upload/13ccbeff-8878-41f5-abd9-96bb1aaa267a.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg',
        storeType: 2,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: ['弹窗', '模态窗'],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 694
        }
      }, {
        title: '系统设置',
        userName: 'seventeen',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603381-assets/web-upload/15743f8a-2c04-4ab3-8140-1d93f58b094a.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 2,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 508
        }
      }, {
        title: '金融理财首页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603455-assets/web-upload/997b637d-3435-44ee-a7cd-dc6914126f99.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 923
        }
      }, {
        title: '图片视频编辑上传',
        userName: '图鸟东东',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603418-assets/web-upload/2f17ab8f-d0c0-4727-b1d6-5f5f9222452b.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 989
        }
      }, {
        title: '路线导航',
        userName: '此处凶姐承包',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603403-assets/web-upload/c0ae4a35-6e63-4bf3-b7db-7a5b085ed5a4.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        }
      }, {
        title: '系统设置',
        userName: 'seventeen',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603452-assets/web-upload/c206eac9-0690-436f-8c89-5e652503cfe6.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 2,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 508
        }
      }, {
        title: '金融理财首页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603449-assets/web-upload/55a2f676-4e6d-482a-854f-07cd984e0e8a.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 923
        }
      }, {
        title: '图片视频编辑上传',
        userName: '图鸟东东',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603492-assets/web-upload/9d4b96de-55f8-4808-83a7-9962be5b2477.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 989
        }
      }, {
        title: '路线导航',
        userName: '此处凶姐承包',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603439-assets/web-upload/82420ab2-45ae-47a3-b344-583dc74f9510.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        }
      }, {
        title: '系统设置',
        userName: 'seventeen',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603408-assets/web-upload/3220af13-505c-45e8-b945-c013b98d2e97.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 2,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 508
        }
      }, {
        title: '金融理财首页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603509-assets/web-upload/d1dcb46a-2589-4b26-b443-9fe9b52f8dc1.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 923
        }
      }, {
        title: '图片视频编辑上传',
        userName: '图鸟东东',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603532-assets/web-upload/c8f3f24f-789c-474f-9fdf-831bedb7833c.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 989
        }
      }, {
        title: '路线导航',
        userName: '此处凶姐承包',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603498-assets/web-upload/62858fcd-ca48-45c2-8ffe-2204f646a6dd.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        }
      }, {
        title: '系统设置',
        userName: 'seventeen',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603544-assets/web-upload/0f26f622-b992-4480-8203-caddf9ff994c.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 2,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 508
        }
      }, {
        title: '金融理财首页',
        userName: '你的名字',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603532-assets/web-upload/9415afc4-a3dd-4b53-9acd-b746b8df2b4e.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 923
        }
      }, {
        title: '图片视频编辑上传',
        userName: '图鸟东东',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603530-assets/web-upload/ef2234e6-6419-4c2a-921b-927a61ecfffa.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 989
        }
      }, {
        title: '路线导航',
        userName: '此处凶姐承包',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603568-assets/web-upload/d3e42c95-74ff-46ab-885c-f5c9531b3996.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        }
      }, {
        title: '路线导航',
        userName: '此处凶姐承包',
        mainImage: 'https://cdn.nlark.com/yuque/0/2022/jpeg/280373/1668321603649-assets/web-upload/a8394b38-ba4b-4df4-9f9a-fa40469f03cd.jpeg',
        userImage: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg',
        storeType: 1,
        // 1 自营 2 第三方店铺
        newProduct: false,
        // 是否为新品
        tags: [],
        viewUser: {
          latestUserAvatar: [{
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_1.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_2.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_3.jpeg'
          }, {
            src: 'https://tnuiimage.tnkjapp.com/blogger/avatar_4.jpeg'
          }],
          viewUserCount: 129
        }
      }]
    };
  },
  onLoad: function onLoad() {
    this.getRandomData();
  },
  onReachBottom: function onReachBottom() {
    this.getRandomData();
  },
  onReady: function onReady() {
    var _this = this;
    this.$nextTick(function () {
      _this.initNavBarRectInfo();
    });
  },
  onPageScroll: function onPageScroll() {
    this.updateNavBarRectInfo();
  },
  methods: {
    // 跳转
    tn: function tn(e) {
      uni.navigateTo({
        url: e
      });
    },
    // cardSwiper
    cardSwiper: function cardSwiper(e) {
      this.cardCur = e.detail.current;
    },
    // 预览圈子管理员微信图片
    previewQRCodeImage: function previewQRCodeImage() {
      wx.previewImage({
        urls: ['https://tnuiimage.tnkjapp.com/advertise/qrcode.jpg']
      });
    },
    // 弹出模态框
    showModal: function showModal(event) {
      this.openModal();
    },
    // 打开模态框
    openModal: function openModal() {
      this.show1 = true;
    },
    // 初始化导航栏信息
    initNavBarRectInfo: function initNavBarRectInfo() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var navBarRectInfo, pageTipsRectInfo;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2._tGetRect('#navbar');
              case 2:
                navBarRectInfo = _context.sent;
                _context.next = 5;
                return _this2._tGetRect('#page_tips');
              case 5:
                pageTipsRectInfo = _context.sent;
                if (!(!navBarRectInfo.hasOwnProperty('top') || !pageTipsRectInfo.hasOwnProperty('top'))) {
                  _context.next = 9;
                  break;
                }
                setTimeout(function () {
                  _this2.initNavBarRectInfo();
                }, 10);
                return _context.abrupt("return");
              case 9:
                _this2.navBarRectInfo = {
                  top: navBarRectInfo.top
                };
                _this2.navBarChangebaseLineHeight = pageTipsRectInfo.top - navBarRectInfo.top;
              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    // 更新导航栏信息
    updateNavBarRectInfo: function updateNavBarRectInfo() {
      var _this3 = this;
      this._tGetRect('#page_tips').then(function (res) {
        var top = (res === null || res === void 0 ? void 0 : res.top) || 0;
        if (!top) {
          return;
        }
        var differHeight = top - _this3.navBarRectInfo.top;
        var opacity = differHeight / _this3.navBarChangebaseLineHeight;
        if (opacity < 0) {
          // this.navBarStyle.opacity = 1
          // this.navBarStyle.display = 'flex'
          _this3.navBarStyle.color = 'rgba(0, 0, 0, ${opacity})';
          _this3.navBarStyle2.color = 'rgba(0, 0, 0, ${opacity})';
          _this3.navBarBackgroundColor = "rgba(255, 255, 255, 1)";
        } else {
          // this.navBarStyle.opacity = 1 - opacity
          // this.navBarStyle.display = 'flex'
          _this3.navBarStyle.color = 'rgba(255, 255, 255, 1)';
          _this3.navBarStyle2.color = 'rgba(255, 255, 255, 0)';
          _this3.navBarBackgroundColor = "rgba(255, 255, 255, ".concat(1 - opacity, ")");
        }

        // console.log(top, differHeight, opacity);
      });
    },
    /* 瀑布流*/
    // 获取随机数据
    getRandomData: function getRandomData() {
      console.log(13);
      this.loadStatus = 'loading';
      for (var i = 0; i < 10; i++) {
        var index = this.$t.number.randomInt(0, this.data.length - 1);
        var item = JSON.parse(JSON.stringify(this.data[index]));
        item.id = this.$t.uuid();
        this.list.push(item);
      }
    },
    // 瀑布流加载完毕事件
    handleWaterFallFinish: function handleWaterFallFinish() {
      this.loadStatus = 'loadmore';
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 176:
/*!*******************************************************************************************************************************************!*\
  !*** C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=style&index=0&id=850610ca&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wallpaper.vue?vue&type=style&index=0&id=850610ca&lang=scss&scoped=true& */ 177);
/* harmony import */ var _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Download_HBuilderX_3_8_7_20230703_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wallpaper_vue_vue_type_style_index_0_id_850610ca_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 177:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/1/Documents/HBuilderProjects/guHub/pageB/wallpaper/wallpaper.vue?vue&type=style&index=0&id=850610ca&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[170,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pageB/wallpaper/wallpaper.js.map