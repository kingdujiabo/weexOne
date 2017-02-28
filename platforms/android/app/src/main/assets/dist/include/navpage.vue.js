/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-59ce7576!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navpage.vue?entry=true\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(97),
	  /* template */
	  __webpack_require__(98),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\navpage.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navpage.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-59ce7576", Component.options)
	  } else {
	    hotAPI.reload("data-v-59ce7576", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-1236f1cd!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./navbar.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(36),
	  /* template */
	  __webpack_require__(37),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\navbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] navbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1236f1cd", Component.options)
	  } else {
	    hotAPI.reload("data-v-1236f1cd", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 36:
/***/ function(module, exports) {

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
	
	module.exports = {
	  props: {
	    dataRole: { default: 'navbar' },
	    //导航条背景色
	    backgroundColor: { default: 'black' },
	    //导航条高度
	    height: { default: 88 },
	    //导航条标题 
	    title: { default: '' },
	    //导航条标题颜色
	    titleColor: { default: 'black' },
	    //右侧按钮图片
	    rightItemSrc: { default: '' },
	    //右侧按钮标题
	    rightItemTitle: { default: '' },
	    //右侧按钮标题颜色
	    rightItemColor: { default: 'black' },
	    //左侧按钮图片
	    leftItemSrc: { default: '' },
	    //左侧按钮标题
	    leftItemTitle: { default: '' },
	    //左侧按钮颜色
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    onclickrightitem: function (e) {
	      this.$emit('naviBarRightItemClick');
	    },
	    onclickleftitem: function (e) {
	      this.$emit('naviBarLeftItemClick');
	    }
	  }
	};

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container",
	    style: ({
	      height: _vm.height,
	      backgroundColor: _vm.backgroundColor
	    }),
	    attrs: {
	      "dataRole": _vm.dataRole
	    }
	  }, [(!_vm.rightItemSrc) ? _c('text', {
	    staticClass: "right-text",
	    style: ({
	      color: _vm.rightItemColor
	    }),
	    attrs: {
	      "naviItemPosition": "right"
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }, [_vm._v(_vm._s(_vm.rightItemTitle))]) : _vm._e(), _vm._v(" "), (_vm.rightItemSrc) ? _c('image', {
	    staticClass: "right-image",
	    attrs: {
	      "naviItemPosition": "right",
	      "src": _vm.rightItemSrc
	    },
	    on: {
	      "click": _vm.onclickrightitem
	    }
	  }) : _vm._e(), _vm._v(" "), (!_vm.leftItemSrc) ? _c('text', {
	    staticClass: "left-text",
	    style: ({
	      color: _vm.leftItemColor
	    }),
	    attrs: {
	      "naviItemPosition": "left"
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), _vm._v(" "), (_vm.leftItemSrc) ? _c('image', {
	    staticClass: "left-image",
	    attrs: {
	      "naviItemPosition": "left",
	      "src": _vm.leftItemSrc
	    },
	    on: {
	      "click": _vm.onclickleftitem
	    }
	  }) : _vm._e(), _vm._v(" "), _c('text', {
	    staticClass: "center-text",
	    style: ({
	      color: _vm.titleColor
	    }),
	    attrs: {
	      "naviItemPosition": "center"
	    }
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1236f1cd", module.exports)
	  }
	}

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

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
	
	module.exports = {
	  components: {
	    navbar: __webpack_require__(35)
	  },
	  props: {
	    dataRole: { default: 'navbar' },
	    backgroundColor: { default: 'black' },
	    height: { default: 88 },
	    title: { default: "" },
	    titleColor: { default: 'black' },
	    rightItemSrc: { default: '' },
	    rightItemTitle: { default: '' },
	    rightItemColor: { default: 'black' },
	    leftItemSrc: { default: '' },
	    leftItemTitle: { default: '' },
	    leftItemColor: { default: 'black' }
	  },
	  methods: {
	    naviBarRightItemClick: function (e) {
	      this.$emit('naviBarRightItemClick', e);
	    },
	    naviBarLeftItemClick: function (e) {
	      this.$emit('naviBarLeftItemClick', e);
	    }
	  }
	};

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "wrapper"
	  }, [_c('navbar', {
	    attrs: {
	      "dataRole": _vm.dataRole,
	      "height": _vm.height,
	      "backgroundColor": _vm.backgroundColor,
	      "title": _vm.title,
	      "titleColor": _vm.titleColor,
	      "leftItemSrc": _vm.leftItemSrc,
	      "leftItemTitle": _vm.leftItemTitle,
	      "leftItemColor": _vm.leftItemColor,
	      "rightItemSrc": _vm.rightItemSrc,
	      "rightItemTitle": _vm.rightItemTitle,
	      "rightItemColor": _vm.rightItemColor
	    },
	    on: {
	      "naviBarRightItemClick": _vm.naviBarRightItemClick,
	      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "wrapper",
	    style: ({
	      marginTop: _vm.height
	    })
	  }, [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-59ce7576", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2cGFnZS52dWU/YjY4MiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzP2Q0ZjMqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci52dWU/MGMyOSIsIndlYnBhY2s6Ly8vbmF2YmFyLnZ1ZT8yMGZkKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIudnVlPzVhODcqIiwid2VicGFjazovLy9uYXZwYWdlLnZ1ZT8zMTNiIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdnBhZ2UudnVlP2ExN2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3JDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBK0UsaURBQWlELElBQUk7QUFDcEksb0NBQW1DOztBQUVuQztBQUNBLGFBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkMsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDN0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3dEQTs7MEJBR0E7QUFDQTtpQ0FDQTtBQUNBO3dCQUNBO0FBQ0E7dUJBQ0E7QUFDQTs0QkFDQTtBQUNBOzhCQUNBO0FBQ0E7Z0NBQ0E7QUFDQTtnQ0FDQTtBQUNBOzZCQUNBO0FBQ0E7K0JBQ0E7QUFDQTsrQkFFQTtBQXRCQTs7b0NBd0JBO2tCQUNBO0FBQ0E7bUNBQ0E7a0JBQ0E7QUFFQTtBQVBBO0FBeEJBLEc7Ozs7Ozs7QUN4RkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBOztpQ0FJQTtBQUZBOzswQkFJQTtpQ0FDQTt3QkFDQTt1QkFDQTs0QkFDQTs4QkFDQTtnQ0FDQTtnQ0FDQTs2QkFDQTsrQkFDQTsrQkFFQTtBQVpBOzt5Q0FjQTsyQ0FDQTtBQUNBO3dDQUNBOzBDQUNBO0FBRUE7QUFQQTtBQWpCQSxHOzs7Ozs7O0FDcENBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJpbmNsdWRlXFxuYXZwYWdlLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZkYjljMDA4OWY2ZDM4OGI0YjRkIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi01OWNlNzU3NiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25hdnBhZ2UudnVlP2VudHJ5PXRydWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmF2cGFnZS52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01OWNlNzU3NiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2cGFnZS52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXG5hdnBhZ2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbmF2cGFnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTljZTc1NzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OWNlNzU3NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9uYXZwYWdlLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IDY5IDcwIDcxIDcyIDczIDc0IDc1IDc2IDc3IDc4IDc5IDgwIDgxIDgyIDgzIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xMjM2ZjFjZCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25hdmJhci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmF2YmFyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMjM2ZjFjZCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbmF2YmFyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXG5hdmJhci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBuYXZiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTEyMzZmMWNkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTIzNmYxY2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSA3IDI4IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXZcclxuICAgIDpkYXRhUm9sZT1cImRhdGFSb2xlXCJcclxuICAgIGNsYXNzPVwiY29udGFpbmVyXCJcclxuICAgIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQsIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH1cIj5cclxuICAgIDx0ZXh0XHJcbiAgICAgIHYtaWY9XCIhcmlnaHRJdGVtU3JjXCJcclxuICAgICAgbmF2aUl0ZW1Qb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogcmlnaHRJdGVtQ29sb3IgfVwiXHJcbiAgICAgIGNsYXNzPVwicmlnaHQtdGV4dFwiXHJcbiAgICAgIHYtb246Y2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+e3tyaWdodEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgPGltYWdlXHJcbiAgICAgIHYtaWY9XCJyaWdodEl0ZW1TcmNcIlxyXG4gICAgICBuYXZpSXRlbVBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICA6c3JjPVwicmlnaHRJdGVtU3JjXCJcclxuICAgICAgY2xhc3M9XCJyaWdodC1pbWFnZVwiXHJcbiAgICAgIHYtb246Y2xpY2s9XCJvbmNsaWNrcmlnaHRpdGVtXCI+PC9pbWFnZT5cclxuICAgIDx0ZXh0XHJcbiAgICAgIHYtaWY9XCIhbGVmdEl0ZW1TcmNcIlxyXG4gICAgICBuYXZpSXRlbVBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgIDpzdHlsZT1cInsgY29sb3I6IGxlZnRJdGVtQ29sb3IgfVwiXHJcbiAgICAgIGNsYXNzPVwibGVmdC10ZXh0XCJcclxuICAgICAgdi1vbjpjbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPnt7bGVmdEl0ZW1UaXRsZX19PC90ZXh0PlxyXG4gICAgPGltYWdlXHJcbiAgICAgIHYtaWY9XCJsZWZ0SXRlbVNyY1wiXHJcbiAgICAgIG5hdmlJdGVtUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgOnNyYz1cImxlZnRJdGVtU3JjXCJcclxuICAgICAgY2xhc3M9XCJsZWZ0LWltYWdlXCJcclxuICAgICAgdi1vbjpjbGljaz1cIm9uY2xpY2tsZWZ0aXRlbVwiPjwvaW1hZ2U+XHJcbiAgICA8dGV4dFxyXG4gICAgICBuYXZpSXRlbVBvc2l0aW9uPVwiY2VudGVyXCJcclxuICAgICAgOnN0eWxlPVwieyBjb2xvcjogdGl0bGVDb2xvciB9XCJcclxuICAgICAgY2xhc3M9XCJjZW50ZXItdGV4dFwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgcG9zaXRpb246IGZpeGVkOyBcclxuICAgIHRvcDogMDsgXHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHJpZ2h0OiAwOyBcclxuICAgIHdpZHRoOiA3NTA7XHJcbiAgfVxyXG4gIC5yaWdodC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBib3R0b206IDI4OyBcclxuICAgIHJpZ2h0OiAzMjsgXHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMzI7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAubGVmdC10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICBib3R0b206IDI4OyBcclxuICAgIGxlZnQgOjMyOyBcclxuICAgIHRleHQtYWxpZ24gOmxlZnQ7ICBcclxuICAgIGZvbnQtc2l6ZTogMzI7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY2VudGVyLXRleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGJvdHRvbTogMjU7IFxyXG4gICAgbGVmdDogMTcyOyBcclxuICAgIHJpZ2h0OiAxNzI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZm9udC1zaXplOiAzNjsgXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmxlZnQtaW1hZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgIGJvdHRvbTogMjA7IFxyXG4gICAgbGVmdDogMjg7IFxyXG4gICAgd2lkdGg6IDUwOyBcclxuICAgIGhlaWdodDogNTA7XHJcbiAgfVxyXG4gIC5yaWdodC1pbWFnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgYm90dG9tOiAyMDsgXHJcbiAgICByaWdodDogMjg7IFxyXG4gICAgd2lkdGg6IDUwOyBcclxuICAgIGhlaWdodDogNTA7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGFSb2xlOiB7IGRlZmF1bHQ6ICduYXZiYXInIH0sXHJcbiAgICAgIC8v5a+86Iiq5p2h6IOM5pmv6ImyXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXHJcbiAgICAgIC8v5a+86Iiq5p2h6auY5bqmXHJcbiAgICAgIGhlaWdodDogeyBkZWZhdWx0OiA4OCB9LFxyXG4gICAgICAvL+WvvOiIquadoeagh+mimCBcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgLy/lr7zoiKrmnaHmoIfpopjpopzoibJcclxuICAgICAgdGl0bGVDb2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXHJcbiAgICAgIC8v5Y+z5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgIHJpZ2h0SXRlbVNyYzogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICAvL+WPs+S+p+aMiemSruagh+mimFxyXG4gICAgICByaWdodEl0ZW1UaXRsZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICAvL+WPs+S+p+aMiemSruagh+mimOminOiJslxyXG4gICAgICByaWdodEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXHJcbiAgICAgIC8v5bem5L6n5oyJ6ZKu5Zu+54mHXHJcbiAgICAgIGxlZnRJdGVtU3JjOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIC8v5bem5L6n5oyJ6ZKu5qCH6aKYXHJcbiAgICAgIGxlZnRJdGVtVGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgLy/lt6bkvqfmjInpkq7popzoibJcclxuICAgICAgbGVmdEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9uY2xpY2tyaWdodGl0ZW06IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnbmF2aUJhclJpZ2h0SXRlbUNsaWNrJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uY2xpY2tsZWZ0aXRlbTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCduYXZpQmFyTGVmdEl0ZW1DbGljaycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5hdmJhci52dWU/MDk4Y2U4NmUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIGhlaWdodDogX3ZtLmhlaWdodCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogX3ZtLmJhY2tncm91bmRDb2xvclxuICAgIH0pLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFSb2xlXCI6IF92bS5kYXRhUm9sZVxuICAgIH1cbiAgfSwgWyghX3ZtLnJpZ2h0SXRlbVNyYykgPyBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodC10ZXh0XCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBjb2xvcjogX3ZtLnJpZ2h0SXRlbUNvbG9yXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcInJpZ2h0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5vbmNsaWNrcmlnaHRpdGVtXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ucmlnaHRJdGVtVGl0bGUpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ucmlnaHRJdGVtU3JjKSA/IF9jKCdpbWFnZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyaWdodC1pbWFnZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hdmlJdGVtUG9zaXRpb25cIjogXCJyaWdodFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLnJpZ2h0SXRlbVNyY1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uY2xpY2tyaWdodGl0ZW1cbiAgICB9XG4gIH0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksICghX3ZtLmxlZnRJdGVtU3JjKSA/IF9jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQtdGV4dFwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgY29sb3I6IF92bS5sZWZ0SXRlbUNvbG9yXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImxlZnRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9uY2xpY2tsZWZ0aXRlbVxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmxlZnRJdGVtVGl0bGUpKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIChfdm0ubGVmdEl0ZW1TcmMpID8gX2MoJ2ltYWdlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxlZnQtaW1hZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJuYXZpSXRlbVBvc2l0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJzcmNcIjogX3ZtLmxlZnRJdGVtU3JjXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub25jbGlja2xlZnRpdGVtXG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygndGV4dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjZW50ZXItdGV4dFwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgY29sb3I6IF92bS50aXRsZUNvbG9yXG4gICAgfSksXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmF2aUl0ZW1Qb3NpdGlvblwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMTIzNmYxY2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTEyMzZmMWNkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDcgMjgiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cclxuICAgIDxuYXZiYXJcclxuICAgICAgOmRhdGFSb2xlPVwiZGF0YVJvbGVcIlxyXG4gICAgICA6aGVpZ2h0PVwiaGVpZ2h0XCJcclxuICAgICAgOmJhY2tncm91bmRDb2xvcj1cImJhY2tncm91bmRDb2xvclwiXHJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcclxuICAgICAgOnRpdGxlQ29sb3I9XCJ0aXRsZUNvbG9yXCJcclxuICAgICAgOmxlZnRJdGVtU3JjPVwibGVmdEl0ZW1TcmNcIlxyXG4gICAgICA6bGVmdEl0ZW1UaXRsZT1cImxlZnRJdGVtVGl0bGVcIlxyXG4gICAgICA6bGVmdEl0ZW1Db2xvcj1cImxlZnRJdGVtQ29sb3JcIlxyXG4gICAgICA6cmlnaHRJdGVtU3JjPVwicmlnaHRJdGVtU3JjXCJcclxuICAgICAgOnJpZ2h0SXRlbVRpdGxlPVwicmlnaHRJdGVtVGl0bGVcIlxyXG4gICAgICA6cmlnaHRJdGVtQ29sb3I9XCJyaWdodEl0ZW1Db2xvclwiXHJcbiAgICAgIEBuYXZpQmFyUmlnaHRJdGVtQ2xpY2s9XCJuYXZpQmFyUmlnaHRJdGVtQ2xpY2tcIlxyXG4gICAgICBAbmF2aUJhckxlZnRJdGVtQ2xpY2s9XCJuYXZpQmFyTGVmdEl0ZW1DbGlja1wiXHJcbiAgICAgID48L25hdmJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgOnN0eWxlPVwieyBtYXJnaW5Ub3A6IGhlaWdodCB9XCI+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gIC53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6IDA7IFxyXG4gICAgbGVmdDogMDsgXHJcbiAgICByaWdodDogMDsgXHJcbiAgICBib3R0b206IDA7IFxyXG4gICAgd2lkdGg6IDc1MDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBuYXZiYXI6IHJlcXVpcmUoJy4vbmF2YmFyLnZ1ZScpXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YVJvbGU6IHsgZGVmYXVsdDogJ25hdmJhcicgfSxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB7IGRlZmF1bHQ6ICdibGFjaycgfSxcclxuICAgICAgaGVpZ2h0OiB7IGRlZmF1bHQ6IDg4IH0sXHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6IFwiXCIgfSxcclxuICAgICAgdGl0bGVDb2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXHJcbiAgICAgIHJpZ2h0SXRlbVNyYzogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICByaWdodEl0ZW1UaXRsZTogeyBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICByaWdodEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH0sXHJcbiAgICAgIGxlZnRJdGVtU3JjOiB7IGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIGxlZnRJdGVtVGl0bGU6IHsgZGVmYXVsdDogJycgfSxcclxuICAgICAgbGVmdEl0ZW1Db2xvcjogeyBkZWZhdWx0OiAnYmxhY2snIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG5hdmlCYXJSaWdodEl0ZW1DbGljazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCduYXZpQmFyUmlnaHRJdGVtQ2xpY2snLCBlKVxyXG4gICAgICB9LFxyXG4gICAgICBuYXZpQmFyTGVmdEl0ZW1DbGljazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCduYXZpQmFyTGVmdEl0ZW1DbGljaycsIGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbmF2cGFnZS52dWU/NjI2N2QzZTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3cmFwcGVyXCJcbiAgfSwgW19jKCduYXZiYXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVJvbGVcIjogX3ZtLmRhdGFSb2xlLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLmhlaWdodCxcbiAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IF92bS5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBcInRpdGxlXCI6IF92bS50aXRsZSxcbiAgICAgIFwidGl0bGVDb2xvclwiOiBfdm0udGl0bGVDb2xvcixcbiAgICAgIFwibGVmdEl0ZW1TcmNcIjogX3ZtLmxlZnRJdGVtU3JjLFxuICAgICAgXCJsZWZ0SXRlbVRpdGxlXCI6IF92bS5sZWZ0SXRlbVRpdGxlLFxuICAgICAgXCJsZWZ0SXRlbUNvbG9yXCI6IF92bS5sZWZ0SXRlbUNvbG9yLFxuICAgICAgXCJyaWdodEl0ZW1TcmNcIjogX3ZtLnJpZ2h0SXRlbVNyYyxcbiAgICAgIFwicmlnaHRJdGVtVGl0bGVcIjogX3ZtLnJpZ2h0SXRlbVRpdGxlLFxuICAgICAgXCJyaWdodEl0ZW1Db2xvclwiOiBfdm0ucmlnaHRJdGVtQ29sb3JcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcIm5hdmlCYXJSaWdodEl0ZW1DbGlja1wiOiBfdm0ubmF2aUJhclJpZ2h0SXRlbUNsaWNrLFxuICAgICAgXCJuYXZpQmFyTGVmdEl0ZW1DbGlja1wiOiBfdm0ubmF2aUJhckxlZnRJdGVtQ2xpY2tcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXJcIixcbiAgICBzdHlsZTogKHtcbiAgICAgIG1hcmdpblRvcDogX3ZtLmhlaWdodFxuICAgIH0pXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01OWNlNzU3NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNTljZTc1NzYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9pbmNsdWRlL25hdnBhZ2UudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiXSwic291cmNlUm9vdCI6IiJ9