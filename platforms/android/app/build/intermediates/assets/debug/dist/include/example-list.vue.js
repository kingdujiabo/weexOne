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
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(80),
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

/***/ 76:
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

/***/ 80:
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

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQ/ZWQ2NCoqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvZXhhbXBsZS1saXN0LnZ1ZT85NTdkIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanM/ZDRmMyoqKioqKioqKioqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvYmFzZS11cmwuanM/ZTQwOCoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbGlzdC1pdGVtLnZ1ZT85MmY4Iiwid2VicGFjazovLy9saXN0LWl0ZW0udnVlP2EyM2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbGlzdC1pdGVtLnZ1ZT9hOTQ1KiIsIndlYnBhY2s6Ly8vZXhhbXBsZS1saXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZT9kZmU1Iiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZT9hYmQxIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC52dWU/YzY1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4REFBNkQ7QUFDN0Q7QUFDQTtBQUNBLG9DQUFtQztBQUNuQyxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBeUQsR0FBRztBQUM1RCx1QkFBc0IsS0FBSywwQ0FBMEMsR0FBRyxxQ0FBcUMsR0FBRztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDNUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DO0FBQ0EsYUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxFQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTs7eUJBSUE7QUFGQTs7d0JBSUE7a0JBQ0E7QUFDQTs2QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzJCQUNBO0FBQ0E7QUFDQTtBQUVBO0FBYkE7QUFKQSxHOzs7Ozs7O0FDYkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O2dCQUlBO0FBREEsUUFFQTs7Z0JBRUEsNkNBSUE7QUFMQTtBQUpBOzswQ0FZQTtBQUZBO3dCQUdBOzJCQUNBOytCQUNBOzZCQUNBO3NCQUNBO3VDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEJBLEc7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0ZBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG9DQUFtQzs7QUFFbkM7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7dUJBR0E7cUJBRUE7QUFIQTs7bUNBTUE7QUFGQTs7MkJBSUE7MEJBQ0E7QUFFQTtBQUpBO0FBUkEsRzs7Ozs7OztBQ2hCQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDZkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJpbmNsdWRlXFxleGFtcGxlLWxpc3QudnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmRiOWMwMDg5ZjZkMzg4YjRiNGQiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9leGFtcGxlLWxpc3QudnVlP2VudHJ5PXRydWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMmE5NjQ4OWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGUtbGlzdC52dWU/ZW50cnk9dHJ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXGV4YW1wbGUtbGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBleGFtcGxlLWxpc3QudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJhOTY0ODllXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmE5NjQ4OWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvZXhhbXBsZS1saXN0LnZ1ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gb3B0aW9ucy5jb21wdXRlZCB8fCAob3B0aW9ucy5jb21wdXRlZCA9IHt9KVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI4IDI5IDMwIDMxIDMyIDMzIDM0IDM1IDM2IDM3IDM4IDM5IDQwIDQxIDQyIDQzIDQ0IDQ1IDQ2IDQ3IDQ4IDQ5IDUwIDUxIDUyIDUzIDU0IDU1IDU2IDU3IDU4IDU5IDYwIDYxIDYyIDYzIDY0IDY1IDY2IDY3IDY4IDY5IDcwIDcxIDcyIDczIDc0IDc1IDc2IDc3IDc4IDc5IDgwIDgxIDgyIDgzIiwiZXhwb3J0cy5nZXRCYXNlVVJMID0gZnVuY3Rpb24gKHZtKSB7XHJcbiAgdmFyIGJ1bmRsZVVybCA9IHZtLiRnZXRDb25maWcoKS5idW5kbGVVcmw7XHJcbiAgdmFyIG5hdGl2ZUJhc2U7XHJcbiAgdmFyIGlzQW5kcm9pZEFzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCd5b3VyX2N1cnJlbnRfSVAnKSA+PSAwIHx8IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vYXNzZXRzLycpPj0wO1xyXG4gIHZhciBpc2lPU0Fzc2V0cyA9IGJ1bmRsZVVybC5pbmRleE9mKCdmaWxlOi8vLycpID49IDAgJiYgYnVuZGxlVXJsLmluZGV4T2YoJ1dlZXhEZW1vLmFwcCcpID4gMDtcclxuICBpZiAoaXNBbmRyb2lkQXNzZXRzKSB7XHJcbiAgICBuYXRpdmVCYXNlID0gJ2ZpbGU6Ly9hc3NldHMvJztcclxuICB9XHJcbiAgZWxzZSBpZiAoaXNpT1NBc3NldHMpIHtcclxuICAgIC8vIGZpbGU6Ly8vdmFyL21vYmlsZS9Db250YWluZXJzL0J1bmRsZS9BcHBsaWNhdGlvbi97aWR9L1dlZXhEZW1vLmFwcC9cclxuICAgIC8vIGZpbGU6Ly8vVXNlcnMve3VzZXJ9L0xpYnJhcnkvRGV2ZWxvcGVyL0NvcmVTaW11bGF0b3IvRGV2aWNlcy97aWR9L2RhdGEvQ29udGFpbmVycy9CdW5kbGUvQXBwbGljYXRpb24ve2lkfS9XZWV4RGVtby5hcHAvXHJcbiAgICBuYXRpdmVCYXNlID0gYnVuZGxlVXJsLnN1YnN0cmluZygwLCBidW5kbGVVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHZhciBob3N0ID0gJ2xvY2FsaG9zdDoxMjU4MCc7XHJcbiAgICB2YXIgbWF0Y2hlcyA9IC9cXC9cXC8oW15cXC9dKz8pXFwvLy5leGVjKHZtLiRnZXRDb25maWcoKS5idW5kbGVVcmwpO1xyXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPj0gMikge1xyXG4gICAgICBob3N0ID0gbWF0Y2hlc1sxXTtcclxuICAgIH1cclxuICAgIG5hdGl2ZUJhc2UgPSAnaHR0cDovLycgKyBob3N0ICsgJy8nICsgdm0uZGlyICsgJy9idWlsZC8nO1xyXG4gIH1cclxuICB2YXIgaDVCYXNlID0gJy4vaW5kZXguaHRtbD9wYWdlPS4vJyArIHZtLmRpciArICcvYnVpbGQvJztcclxuICAvLyBpbiBOYXRpdmVcclxuICB2YXIgYmFzZSA9IG5hdGl2ZUJhc2U7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XHJcbiAgICAvLyBpbiBCcm93c2VyIG9yIFdlYlZpZXdcclxuICAgIGJhc2UgPSBoNUJhc2U7XHJcbiAgfVxyXG4gIHJldHVybiBiYXNlXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5jbHVkZS9iYXNlLXVybC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IDEwIDE5IDM2IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wYjkwNTczNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xpc3QtaXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbGlzdC1pdGVtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wYjkwNTczNSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbGlzdC1pdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXGxpc3QtaXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsaXN0LWl0ZW0udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTBiOTA1NzM1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMGI5MDU3MzVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvbGlzdC1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCAxOSAzNiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2XHJcbiAgICA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciB9XCJcclxuICAgIGNsYXNzPVwiaXRlbVwiXHJcbiAgICB2LW9uOmNsaWNrPVwiY2xpY2tcIlxyXG4gICAgdi1vbjp0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiXHJcbiAgICB2LW9uOnRvdWNoZW5kPVwidG91Y2hlbmRcIj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczogIHtcclxuICAgICAgYmdDb2xvcjogeyBkZWZhdWx0OiAnI2ZmZmZmZicgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIEZJWE1FIGFuZHJvaWQgdG91Y2hcclxuICAgICAgICAvLyBUT0RPIGFkYXB0aXZlIG9wcG9zaXRlIGJnQ29sb3JcclxuICAgICAgICAvLyB0aGlzLmJnQ29sb3IgPSAnI2U2ZTZlNic7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvdWNoZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyBGSVhNRSBhbmRyb2lkIHRvdWNoZW5kIG5vdCB0cmlnZ2VyZWRcclxuICAgICAgICAvLyB0aGlzLmJnQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4gIC5pdGVtIHtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLyptYXJnaW4tYm90dG9tOiAxcHg7IEZVVFVSRSAqL1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZGRkO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpc3QtaXRlbS52dWU/ZjNhMGEwM2UiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtXCIsXG4gICAgc3R5bGU6ICh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IF92bS5iZ0NvbG9yXG4gICAgfSksXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNsaWNrLFxuICAgICAgXCJ0b3VjaHN0YXJ0XCI6IF92bS50b3VjaHN0YXJ0LFxuICAgICAgXCJ0b3VjaGVuZFwiOiBfdm0udG91Y2hlbmRcbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMGI5MDU3MzVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBiOTA1NzM1IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9saXN0LWl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IDE5IDM2IiwiPHRlbXBsYXRlPlxyXG4gIDxsaXN0PlxyXG4gICAgPGNlbGwgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCIgYXBwZW5kPVwidHJlZVwiPlxyXG4gICAgICA8ZXhhbXBsZS1saXN0LWl0ZW0gOnRpdGxlPVwiaXRlbS50aXRsZVwiIDp1cmw9XCJpdGVtLnVybFwiPjwvZXhhbXBsZS1saXN0LWl0ZW0+XHJcbiAgICA8L2NlbGw+XHJcbiAgPC9saXN0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgZ2V0QmFzZVVSTCA9IHJlcXVpcmUoJy4vYmFzZS11cmwuanMnKS5nZXRCYXNlVVJMXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkaXI6IHtcclxuICAgICAgICBkZWZhdWx0OiAnZXhhbXBsZXMnXHJcbiAgICAgIH0sIC8vIGV4YW1wbGVzLCB0ZXN0IC4uLlxyXG4gICAgICBpdGVtczoge1xyXG4gICAgICAgIGRlZmF1bHQ6IFtcclxuICAgICAgICAgIHtuYW1lOiAnaGVsbG8nLCB0aXRsZTogJ0hlbGxvIFdvcmxkJywgdXJsOiAnJ31cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGV4YW1wbGVMaXN0SXRlbTogcmVxdWlyZSgnLi9leGFtcGxlLWxpc3QtaXRlbS52dWUnKVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgYmFzZSA9IGdldEJhc2VVUkwodGhpcylcclxuICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xyXG4gICAgICAgIGlmICghaXRlbS51cmwpIHtcclxuICAgICAgICAgIGl0ZW0udXJsID0gYmFzZSArIGl0ZW0ubmFtZSArICcuanMnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBleGFtcGxlLWxpc3QudnVlPzNhYWFjZDc4IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zNzlkYTVkYyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9leGFtcGxlLWxpc3QtaXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzc5ZGE1ZGMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcd2Vla1N0dWR5XFxcXHdlZXgyXFxcXHdlZXgzXFxcXHNyY1xcXFxpbmNsdWRlXFxcXGV4YW1wbGUtbGlzdC1pdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGV4YW1wbGUtbGlzdC1pdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zNzlkYTVkY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTM3OWRhNWRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmNsdWRlL2V4YW1wbGUtbGlzdC1pdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxOSAzNiIsIjx0ZW1wbGF0ZT5cclxuICA8bGlzdC1pdGVtIHYtb246Y2xpY2s9XCJyZWRpcmVjdFwiPlxyXG4gICAgPHRleHQgY2xhc3M9XCJpdGVtLXR4dFwiPnt7dGl0bGV9fTwvdGV4dD5cclxuICA8L2xpc3QtaXRlbT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzdHlsZT5cclxuICAuaXRlbS10eHQge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cclxuPHNjcmlwdD5cclxuICB2YXIgZXZlbnQgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvZXZlbnQnKVxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgdGl0bGU6IHsgZGVmYXVsdDogJzQ1NicgfSxcclxuICAgICAgdXJsOiB7IGRlZmF1bHQ6ICcnIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGxpc3RJdGVtOiByZXF1aXJlKCcuL2xpc3QtaXRlbS52dWUnKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGV2ZW50Lm9wZW5VUkwodGhpcy51cmwpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZXhhbXBsZS1saXN0LWl0ZW0udnVlPzE1NGIyOTc3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdsaXN0LWl0ZW0nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnJlZGlyZWN0XG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS10eHRcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzc5ZGE1ZGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTM3OWRhNWRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QtaXRlbS52dWVcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTkgMzYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpc3QnLCBfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ2NlbGwnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFwcGVuZFwiOiBcInRyZWVcIlxuICAgICAgfVxuICAgIH0sIFtfYygnZXhhbXBsZS1saXN0LWl0ZW0nLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRpdGxlXCI6IGl0ZW0udGl0bGUsXG4gICAgICAgIFwidXJsXCI6IGl0ZW0udXJsXG4gICAgICB9XG4gICAgfSldLCAxKVxuICB9KSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMmE5NjQ4OWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJhOTY0ODllIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvaW5jbHVkZS9leGFtcGxlLWxpc3QudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMTkiXSwic291cmNlUm9vdCI6IiJ9