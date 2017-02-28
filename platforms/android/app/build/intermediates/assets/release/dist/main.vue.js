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

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(113),
	  /* template */
	  __webpack_require__(117),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\main.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0f7658af", Component.options)
	  } else {
	    hotAPI.reload("data-v-0f7658af", Component.options)
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

/***/ 32:
/***/ function(module, exports) {

	exports.getBaseURL = function (vm) {
	  var bundleUrl = vm.$getConfig().bundleUrl;
	  var nativeBase;
	  var isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/')>=0;
	  var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
	  if (isAndroidAssets) {
	    nativeBase = 'file://assets/';
	  }
	  else if (isiOSAssets) {
	    // file:///var/mobile/Containers/Bundle/Application/{id}/WeexDemo.app/
	    // file:///Users/{user}/Library/Developer/CoreSimulator/Devices/{id}/data/Containers/Bundle/Application/{id}/WeexDemo.app/
	    nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	  }
	  else {
	    var host = 'localhost:12580';
	    var matches = /\/\/([^\/]+?)\//.exec(vm.$getConfig().bundleUrl);
	    if (matches && matches.length >= 2) {
	      host = matches[1];
	    }
	    nativeBase = 'http://' + host + '/' + vm.dir + '/build/';
	  }
	  var h5Base = './index.html?page=./' + vm.dir + '/build/';
	  // in Native
	  var base = nativeBase;
	  if (typeof window === 'object') {
	    // in Browser or WebView
	    base = h5Base;
	  }
	  return base
	}


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-0b905735!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./list-item.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(73),
	  /* template */
	  __webpack_require__(74),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\list-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] list-item.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0b905735", Component.options)
	  } else {
	    hotAPI.reload("data-v-0b905735", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 73:
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
	
	module.exports = {
	  props: {
	    bgColor: { default: '#ffffff' }
	  },
	  methods: {
	    click: function () {
	      this.$emit('click');
	    },
	    touchstart: function () {
	      // FIXME android touch
	      // TODO adaptive opposite bgColor
	      // this.bgColor = '#e6e6e6';
	    },
	    touchend: function () {
	      // FIXME android touchend not triggered
	      // this.bgColor = '#ffffff';
	    }
	  }
	};

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "item",
	    style: ({
	      backgroundColor: _vm.bgColor
	    }),
	    on: {
	      "click": _vm.click,
	      "touchstart": _vm.touchstart,
	      "touchend": _vm.touchend
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0b905735", module.exports)
	  }
	}

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-rewriter?id=data-v-379da5dc!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./example-list-item.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	
	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(78),
	  /* template */
	  __webpack_require__(79),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\example-list-item.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] example-list-item.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-379da5dc", Component.options)
	  } else {
	    hotAPI.reload("data-v-379da5dc", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 78:
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
	
	var event = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"@weex-module/event\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	module.exports = {
	  props: {
	    title: { default: '456' },
	    url: { default: '' }
	  },
	  components: {
	    listItem: __webpack_require__(72)
	  },
	  methods: {
	    redirect: function () {
	      event.openURL(this.url);
	    }
	  }
	};

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list-item', {
	    on: {
	      "click": _vm.redirect
	    }
	  }, [_c('text', {
	    staticClass: "item-txt"
	  }, [_vm._v(_vm._s(_vm.title))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-379da5dc", module.exports)
	  }
	}

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	
	module.exports = {
	  data: function () {
	    return {
	      items: [
	      // common
	      { name: 'vue/syntax/hello-world', title: 'Hello World' }, { name: 'vue/style/index', title: 'Common Style' }, { name: 'vue/animation', title: 'Animation' },
	
	      // component
	      { name: 'vue/components/text', title: 'Text' }, { name: 'vue/components/image', title: 'Image' }, { name: 'vue/components/input', title: 'Input' }, { name: 'vue/components/scroller', title: 'Scroller' }, { name: 'vue/components/list', title: 'List' }, { name: 'vue/components/slider', title: 'Slider' }, { name: 'vue/components/a', title: 'A' }, { name: 'vue/components/video', title: 'Video' }, { name: 'vue/components/countdown', title: 'Countdown' }, { name: 'vue/components/marquee', title: 'Marquee' }, { name: 'vue/components/web', title: 'Web' }, { name: 'vue/components/navigator', title: 'Navigator' }, { name: 'vue/components/tabbar', title: 'Tabbar' },
	
	      // module
	      { name: 'vue/modules/instance-api', title: 'Instance API' }, { name: 'vue/modules/modal', title: 'Modal' }, { name: 'vue/modules/stream', title: 'Stream' }, { name: 'vue/modules/storage', title: 'Storage' },
	      // {name: 'module/clipboard', title: 'Clipboard'}, // 0.8 , developing
	
	      // showcase
	      { name: 'vue/showcase/progress', title: 'Progress Bar' }, { name: 'vue/showcase/itemlist', title: 'List (Advanced)' }, { name: 'vue/showcase/calculator', title: 'Calculator' }]
	    };
	  },
	  components: {
	    exampleList: __webpack_require__(114)
	  }
	};

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(115),
	  /* template */
	  __webpack_require__(116),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\weekStudy\\weex2\\weex3\\src\\include\\example-list.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] example-list.vue: functional components are not supported with templates, they should use render functions.")}
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2a96489e", Component.options)
	  } else {
	    hotAPI.reload("data-v-2a96489e", Component.options)
	  }
	})()}
	
	module.exports = Component.exports


/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	//
	//
	//
	//
	//
	//
	//
	//
	
	var getBaseURL = __webpack_require__(32).getBaseURL;
	module.exports = {
	  props: {
	    dir: {
	      default: 'examples'
	    }, // examples, test ...
	    items: {
	      default: [{ name: 'hello', title: 'Hello World', url: '' }]
	    }
	  },
	  components: {
	    exampleListItem: __webpack_require__(77)
	  },
	  created: function () {
	    var base = getBaseURL(this);
	    for (var i in this.items) {
	      var item = this.items[i];
	      if (!item.url) {
	        item.url = base + item.name + '.js';
	      }
	    }
	  }
	};

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', _vm._l((_vm.items), function(item) {
	    return _c('cell', {
	      attrs: {
	        "append": "tree"
	      }
	    }, [_c('example-list-item', {
	      attrs: {
	        "title": item.title,
	        "url": item.url
	      }
	    })], 1)
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2a96489e", module.exports)
	  }
	}

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('example-list', {
	    attrs: {
	      "items": _vm.items,
	      "dir": "examples"
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0f7658af", module.exports)
	  }
	}

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcz9kNGYzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2Jhc2UtdXJsLmpzP2U0MDgqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9saXN0LWl0ZW0udnVlPzkyZjgqIiwid2VicGFjazovLy9saXN0LWl0ZW0udnVlP2EyM2EqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9saXN0LWl0ZW0udnVlP2E5NDUqKiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QtaXRlbS52dWU/NGRmNSIsIndlYnBhY2s6Ly8vZXhhbXBsZS1saXN0LWl0ZW0udnVlP2RmZTUqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZT9hYmQxKiIsIndlYnBhY2s6Ly8vbWFpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvZXhhbXBsZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vZXhhbXBsZS1saXN0LnZ1ZT8yY2UwIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC52dWU/NzVjZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi52dWU/MmY2MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7Z0JBSUE7QUFEQSxRQUVBOztnQkFFQSw2Q0FJQTtBQUxBO0FBSkE7OzBDQVlBO0FBRkE7d0JBR0E7MkJBQ0E7K0JBQ0E7NkJBQ0E7c0JBQ0E7dUNBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkEsRzs7Ozs7OztBQ1hBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0gsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNwQkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6Im1haW4udnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9tYWluLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTBmNzY1OGFmIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9tYWluLnZ1ZT9lbnRyeT10cnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXG1haW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbWFpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGY3NjU4YWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wZjc2NThhZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi52dWU/ZW50cnk9dHJ1ZVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDM2IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IG9wdGlvbnMuY29tcHV0ZWQgfHwgKG9wdGlvbnMuY29tcHV0ZWQgPSB7fSlcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOCAyOSAzMCAzMSAzMiAzMyAzNCAzNSAzNiAzNyAzOCAzOSA0MCA0MSA0MiA0MyA0NCA0NSA0NiA0NyA0OCA0OSA1MCA1MSA1MiA1MyA1NCA1NSA1NiA1NyA1OCA1OSA2MCA2MSA2MiA2MyA2NCA2NSA2NiA2NyA2OCA2OSA3MCA3MSA3MiA3MyA3NCA3NSA3NiA3NyA3OCA3OSA4MCA4MSA4MiA4MyIsImV4cG9ydHMuZ2V0QmFzZVVSTCA9IGZ1bmN0aW9uICh2bSkge1xyXG4gIHZhciBidW5kbGVVcmwgPSB2bS4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsO1xyXG4gIHZhciBuYXRpdmVCYXNlO1xyXG4gIHZhciBpc0FuZHJvaWRBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZigneW91cl9jdXJyZW50X0lQJykgPj0gMCB8fCBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovL2Fzc2V0cy8nKT49MDtcclxuICB2YXIgaXNpT1NBc3NldHMgPSBidW5kbGVVcmwuaW5kZXhPZignZmlsZTovLy8nKSA+PSAwICYmIGJ1bmRsZVVybC5pbmRleE9mKCdXZWV4RGVtby5hcHAnKSA+IDA7XHJcbiAgaWYgKGlzQW5kcm9pZEFzc2V0cykge1xyXG4gICAgbmF0aXZlQmFzZSA9ICdmaWxlOi8vYXNzZXRzLyc7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGlzaU9TQXNzZXRzKSB7XHJcbiAgICAvLyBmaWxlOi8vL3Zhci9tb2JpbGUvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICAvLyBmaWxlOi8vL1VzZXJzL3t1c2VyfS9MaWJyYXJ5L0RldmVsb3Blci9Db3JlU2ltdWxhdG9yL0RldmljZXMve2lkfS9kYXRhL0NvbnRhaW5lcnMvQnVuZGxlL0FwcGxpY2F0aW9uL3tpZH0vV2VleERlbW8uYXBwL1xyXG4gICAgbmF0aXZlQmFzZSA9IGJ1bmRsZVVybC5zdWJzdHJpbmcoMCwgYnVuZGxlVXJsLmxhc3RJbmRleE9mKCcvJykgKyAxKTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB2YXIgaG9zdCA9ICdsb2NhbGhvc3Q6MTI1ODAnO1xyXG4gICAgdmFyIG1hdGNoZXMgPSAvXFwvXFwvKFteXFwvXSs/KVxcLy8uZXhlYyh2bS4kZ2V0Q29uZmlnKCkuYnVuZGxlVXJsKTtcclxuICAgIGlmIChtYXRjaGVzICYmIG1hdGNoZXMubGVuZ3RoID49IDIpIHtcclxuICAgICAgaG9zdCA9IG1hdGNoZXNbMV07XHJcbiAgICB9XHJcbiAgICBuYXRpdmVCYXNlID0gJ2h0dHA6Ly8nICsgaG9zdCArICcvJyArIHZtLmRpciArICcvYnVpbGQvJztcclxuICB9XHJcbiAgdmFyIGg1QmFzZSA9ICcuL2luZGV4Lmh0bWw/cGFnZT0uLycgKyB2bS5kaXIgKyAnL2J1aWxkLyc7XHJcbiAgLy8gaW4gTmF0aXZlXHJcbiAgdmFyIGJhc2UgPSBuYXRpdmVCYXNlO1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykge1xyXG4gICAgLy8gaW4gQnJvd3NlciBvciBXZWJWaWV3XHJcbiAgICBiYXNlID0gaDVCYXNlO1xyXG4gIH1cclxuICByZXR1cm4gYmFzZVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvYmFzZS11cmwuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gNyAxMCAxOSAzNiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMGI5MDU3MzUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9saXN0LWl0ZW0udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xpc3QtaXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMGI5MDU3MzUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xpc3QtaXRlbS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxsaXN0LWl0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbGlzdC1pdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYjkwNTczNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBiOTA1NzM1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL2xpc3QtaXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTggMTkgMzYiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfVwiXHJcbiAgICBjbGFzcz1cIml0ZW1cIlxyXG4gICAgdi1vbjpjbGljaz1cImNsaWNrXCJcclxuICAgIHYtb246dG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIlxyXG4gICAgdi1vbjp0b3VjaGVuZD1cInRvdWNoZW5kXCI+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6ICB7XHJcbiAgICAgIGJnQ29sb3I6IHsgZGVmYXVsdDogJyNmZmZmZmYnIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKVxyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoXHJcbiAgICAgICAgLy8gVE9ETyBhZGFwdGl2ZSBvcHBvc2l0ZSBiZ0NvbG9yXHJcbiAgICAgICAgLy8gdGhpcy5iZ0NvbG9yID0gJyNlNmU2ZTYnO1xyXG4gICAgICB9LFxyXG4gICAgICB0b3VjaGVuZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRklYTUUgYW5kcm9pZCB0b3VjaGVuZCBub3QgdHJpZ2dlcmVkXHJcbiAgICAgICAgLy8gdGhpcy5iZ0NvbG9yID0gJyNmZmZmZmYnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICAuaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8qbWFyZ2luLWJvdHRvbTogMXB4OyBGVVRVUkUgKi9cclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZGRkZDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaXN0LWl0ZW0udnVlP2YzYTBhMDNlIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbVwiLFxuICAgIHN0eWxlOiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBfdm0uYmdDb2xvclxuICAgIH0pLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jbGljayxcbiAgICAgIFwidG91Y2hzdGFydFwiOiBfdm0udG91Y2hzdGFydCxcbiAgICAgIFwidG91Y2hlbmRcIjogX3ZtLnRvdWNoZW5kXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTBiOTA1NzM1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wYjkwNTczNSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvbGlzdC1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSAzNiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtMzc5ZGE1ZGMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9leGFtcGxlLWxpc3QtaXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZXhhbXBsZS1saXN0LWl0ZW0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM3OWRhNWRjIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlLWxpc3QtaXRlbS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXHdlZWtTdHVkeVxcXFx3ZWV4MlxcXFx3ZWV4M1xcXFxzcmNcXFxcaW5jbHVkZVxcXFxleGFtcGxlLWxpc3QtaXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBleGFtcGxlLWxpc3QtaXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzc5ZGE1ZGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNzlkYTVkY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QtaXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkgMzYiLCI8dGVtcGxhdGU+XHJcbiAgPGxpc3QtaXRlbSB2LW9uOmNsaWNrPVwicmVkaXJlY3RcIj5cclxuICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS10eHRcIj57e3RpdGxlfX08L3RleHQ+XHJcbiAgPC9saXN0LWl0ZW0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c3R5bGU+XHJcbiAgLml0ZW0tdHh0IHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIGV2ZW50ID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2V2ZW50JylcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHRpdGxlOiB7IGRlZmF1bHQ6ICc0NTYnIH0sXHJcbiAgICAgIHVybDogeyBkZWZhdWx0OiAnJyB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBsaXN0SXRlbTogcmVxdWlyZSgnLi9saXN0LWl0ZW0udnVlJylcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHJlZGlyZWN0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBldmVudC5vcGVuVVJMKHRoaXMudXJsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGV4YW1wbGUtbGlzdC1pdGVtLnZ1ZT8xNTRiMjk3NyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGlzdC1pdGVtJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5yZWRpcmVjdFxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tdHh0XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTM3OWRhNWRjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNzlkYTVkYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2luY2x1ZGUvZXhhbXBsZS1saXN0LWl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDE5IDM2IiwiPHRlbXBsYXRlPlxyXG4gIDxleGFtcGxlLWxpc3QgOml0ZW1zPVwiaXRlbXNcIiBkaXI9XCJleGFtcGxlc1wiPjwvZXhhbXBsZS1saXN0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgLy8gY29tbW9uXHJcbiAgICAgICAgICB7bmFtZTogJ3Z1ZS9zeW50YXgvaGVsbG8td29ybGQnLCB0aXRsZTogJ0hlbGxvIFdvcmxkJ30sXHJcbiAgICAgICAgICB7bmFtZTogJ3Z1ZS9zdHlsZS9pbmRleCcsIHRpdGxlOiAnQ29tbW9uIFN0eWxlJ30sXHJcbiAgICAgICAgICB7bmFtZTogJ3Z1ZS9hbmltYXRpb24nLCB0aXRsZTogJ0FuaW1hdGlvbid9LFxyXG5cclxuICAgICAgICAgIC8vIGNvbXBvbmVudFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy90ZXh0JywgdGl0bGU6ICdUZXh0J30sXHJcbiAgICAgICAgICB7bmFtZTogJ3Z1ZS9jb21wb25lbnRzL2ltYWdlJywgdGl0bGU6ICdJbWFnZSd9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy9pbnB1dCcsIHRpdGxlOiAnSW5wdXQnfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL2NvbXBvbmVudHMvc2Nyb2xsZXInLCB0aXRsZTogJ1Njcm9sbGVyJ30sXHJcbiAgICAgICAgICB7bmFtZTogJ3Z1ZS9jb21wb25lbnRzL2xpc3QnLCB0aXRsZTogJ0xpc3QnfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL2NvbXBvbmVudHMvc2xpZGVyJywgdGl0bGU6ICdTbGlkZXInfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL2NvbXBvbmVudHMvYScsIHRpdGxlOiAnQSd9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy92aWRlbycsIHRpdGxlOiAnVmlkZW8nfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL2NvbXBvbmVudHMvY291bnRkb3duJywgdGl0bGU6ICdDb3VudGRvd24nfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL2NvbXBvbmVudHMvbWFycXVlZScsIHRpdGxlOiAnTWFycXVlZSd9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy93ZWInLCB0aXRsZTogJ1dlYid9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy9uYXZpZ2F0b3InLCB0aXRsZTogJ05hdmlnYXRvcid9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvY29tcG9uZW50cy90YWJiYXInLCB0aXRsZTogJ1RhYmJhcid9LFxyXG5cclxuICAgICAgICAgIC8vIG1vZHVsZVxyXG4gICAgICAgICAge25hbWU6ICd2dWUvbW9kdWxlcy9pbnN0YW5jZS1hcGknLCB0aXRsZTogJ0luc3RhbmNlIEFQSSd9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvbW9kdWxlcy9tb2RhbCcsIHRpdGxlOiAnTW9kYWwnfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL21vZHVsZXMvc3RyZWFtJywgdGl0bGU6ICdTdHJlYW0nfSxcclxuICAgICAgICAgIHtuYW1lOiAndnVlL21vZHVsZXMvc3RvcmFnZScsdGl0bGU6J1N0b3JhZ2UnfSxcclxuICAgICAgICAgIC8vIHtuYW1lOiAnbW9kdWxlL2NsaXBib2FyZCcsIHRpdGxlOiAnQ2xpcGJvYXJkJ30sIC8vIDAuOCAsIGRldmVsb3BpbmdcclxuXHJcbiAgICAgICAgICAvLyBzaG93Y2FzZVxyXG4gICAgICAgICAge25hbWU6ICd2dWUvc2hvd2Nhc2UvcHJvZ3Jlc3MnLCB0aXRsZTogJ1Byb2dyZXNzIEJhcid9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvc2hvd2Nhc2UvaXRlbWxpc3QnLCB0aXRsZTogJ0xpc3QgKEFkdmFuY2VkKSd9LFxyXG4gICAgICAgICAge25hbWU6ICd2dWUvc2hvd2Nhc2UvY2FsY3VsYXRvcicsIHRpdGxlOiAnQ2FsY3VsYXRvcid9LFxyXG4gICAgICAgICAgLy8ge25hbWU6ICd2dWUvc2hvd2Nhc2UvbWluZXN3ZWVwZXInLCB0aXRsZTogJ01pbmVzd2VlcGVyJ30sXHJcbiAgICAgICAgICAvLyB7bmFtZTogJ3Z1ZS9zaG93Y2FzZS91aScsIHRpdGxlOiAnVUkgR2FsbGVyeSd9LFxyXG4gICAgICAgICAgLy8ge25hbWU6ICd2dWUvc2hvd2Nhc2UvZHJvcGRvd24vZHJvcGRvd24tZGVtbycsIHRpdGxlOiAnRHJvcGRvd24nfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgZXhhbXBsZUxpc3Q6IHJlcXVpcmUoJy4vaW5jbHVkZS9leGFtcGxlLWxpc3QudnVlJylcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbWFpbi52dWU/YmU3NmNhYzYiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9leGFtcGxlLWxpc3QudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJhOTY0ODllIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9leGFtcGxlLWxpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFx3ZWVrU3R1ZHlcXFxcd2VleDJcXFxcd2VleDNcXFxcc3JjXFxcXGluY2x1ZGVcXFxcZXhhbXBsZS1saXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGV4YW1wbGUtbGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmE5NjQ4OWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYTk2NDg5ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzNiIsIjx0ZW1wbGF0ZT5cclxuICA8bGlzdD5cclxuICAgIDxjZWxsIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIGFwcGVuZD1cInRyZWVcIj5cclxuICAgICAgPGV4YW1wbGUtbGlzdC1pdGVtIDp0aXRsZT1cIml0ZW0udGl0bGVcIiA6dXJsPVwiaXRlbS51cmxcIj48L2V4YW1wbGUtbGlzdC1pdGVtPlxyXG4gICAgPC9jZWxsPlxyXG4gIDwvbGlzdD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgdmFyIGdldEJhc2VVUkwgPSByZXF1aXJlKCcuL2Jhc2UtdXJsLmpzJykuZ2V0QmFzZVVSTFxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGlyOiB7XHJcbiAgICAgICAgZGVmYXVsdDogJ2V4YW1wbGVzJ1xyXG4gICAgICB9LCAvLyBleGFtcGxlcywgdGVzdCAuLi5cclxuICAgICAgaXRlbXM6IHtcclxuICAgICAgICBkZWZhdWx0OiBbXHJcbiAgICAgICAgICB7bmFtZTogJ2hlbGxvJywgdGl0bGU6ICdIZWxsbyBXb3JsZCcsIHVybDogJyd9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBleGFtcGxlTGlzdEl0ZW06IHJlcXVpcmUoJy4vZXhhbXBsZS1saXN0LWl0ZW0udnVlJylcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIGJhc2UgPSBnZXRCYXNlVVJMKHRoaXMpXHJcbiAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcclxuICAgICAgICBpZiAoIWl0ZW0udXJsKSB7XHJcbiAgICAgICAgICBpdGVtLnVybCA9IGJhc2UgKyBpdGVtLm5hbWUgKyAnLmpzJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZXhhbXBsZS1saXN0LnZ1ZT8zYWFhY2Q3OCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGlzdCcsIF92bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnY2VsbCcsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiXG4gICAgICB9XG4gICAgfSwgW19jKCdleGFtcGxlLWxpc3QtaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwidGl0bGVcIjogaXRlbS50aXRsZSxcbiAgICAgICAgXCJ1cmxcIjogaXRlbS51cmxcbiAgICAgIH1cbiAgICB9KV0sIDEpXG4gIH0pKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yYTk2NDg5ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmE5NjQ4OWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDM2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdleGFtcGxlLWxpc3QnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaXRlbXNcIjogX3ZtLml0ZW1zLFxuICAgICAgXCJkaXJcIjogXCJleGFtcGxlc1wiXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wZjc2NThhZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMGY3NjU4YWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9tYWluLnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAzNiJdLCJzb3VyY2VSb290IjoiIn0=